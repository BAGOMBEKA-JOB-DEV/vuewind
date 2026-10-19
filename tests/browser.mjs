import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createServer } from "vite";

// Use the browser's own DevTools protocol; no downloaded browser or test runtime is needed.
const candidates = [
  process.env.BROWSER_BIN,
  "/opt/google/chrome/chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
].filter(Boolean);
let executable;
for (const candidate of candidates) {
  try {
    await access(candidate);
    executable = candidate;
    break;
  } catch {}
}
if (!executable)
  throw new Error("Set BROWSER_BIN to a local Chrome or Chromium executable.");

const output = path.resolve("test-results");
await mkdir(output, { recursive: true });
const profile = await mkdtemp(path.join(tmpdir(), "vuewind-browser-"));
const server = await createServer({
  server: { host: "127.0.0.1", port: 0, strictPort: false },
});
let browser,
  socket,
  session,
  nextId = 0;
const pending = new Map(),
  runtimeErrors = [],
  checks = [];
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function send(method, params = {}, target = session) {
  const id = ++nextId;
  const result = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`DevTools timeout: ${method}`));
    }, 15000);
    pending.set(id, {
      resolve: (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      reject: (value) => {
        clearTimeout(timer);
        reject(value);
      },
    });
  });
  socket.send(
    JSON.stringify({
      id,
      method,
      params,
      ...(target ? { sessionId: target } : {}),
    }),
  );
  return result;
}
async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
    userGesture: true,
  });
  if (result.exceptionDetails)
    throw new Error(
      result.exceptionDetails.exception?.description ||
        result.exceptionDetails.text,
    );
  return result.result?.value;
}
async function until(expression, timeout = 12000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    try {
      if (await evaluate(expression)) return;
    } catch {
      /* Navigation replaces the execution context. */
    }
    await pause(60);
  }
  throw new Error(`Browser condition timed out: ${expression}`);
}
async function check(name, fn) {
  await fn();
  checks.push(name);
  console.log(`✓ ${name}`);
}
async function navigate(route) {
  await send("Page.navigate", { url: `${base}${route}` });
  await until(
    `location.pathname === ${JSON.stringify(route)} && document.querySelector('main h1') && document.readyState === 'complete'`,
  );
  await evaluate("document.fonts.ready.then(() => true)");
}
async function click(selector) {
  await until(`!!document.querySelector(${JSON.stringify(selector)})`);
  const point = await evaluate(`(() => {
    const element=document.querySelector(${JSON.stringify(selector)});
    element.scrollIntoView({block:'center',behavior:'instant'});
    const rect=element.getBoundingClientRect();
    return {x:rect.x+rect.width/2,y:rect.y+rect.height/2};
  })()`);
  await send("Input.dispatchMouseEvent", {
    type: "mousePressed",
    button: "left",
    clickCount: 1,
    ...point,
  });
  await send("Input.dispatchMouseEvent", {
    type: "mouseReleased",
    button: "left",
    clickCount: 1,
    ...point,
  });
}
async function key(key, modifiers = 0) {
  const codes = {
    Enter: 13,
    Escape: 27,
    Tab: 9,
    ArrowRight: 39,
    ArrowLeft: 37,
    ArrowDown: 40,
    ArrowUp: 38,
    k: 75,
  };
  const code = key === "k" ? "KeyK" : key;
  const windowsVirtualKeyCode = codes[key] || 0;
  const options = {
    key,
    code,
    modifiers,
    windowsVirtualKeyCode,
    nativeVirtualKeyCode: windowsVirtualKeyCode,
  };
  await send("Input.dispatchKeyEvent", { type: "keyDown", ...options });
  await send("Input.dispatchKeyEvent", { type: "keyUp", ...options });
}
async function viewport(width, height = 1000) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });
}
async function screenshot(name, full = false) {
  const { cssContentSize } = await send("Page.getLayoutMetrics");
  const options = full
    ? {
        captureBeyondViewport: true,
        clip: {
          x: 0,
          y: 0,
          width: cssContentSize.width,
          height: cssContentSize.height,
          scale: 1,
        },
      }
    : {};
  const result = await send("Page.captureScreenshot", {
    format: "png",
    ...options,
  });
  await writeFile(path.join(output, name), Buffer.from(result.data, "base64"));
}
let base;
try {
  await server.listen();
  base = `http://127.0.0.1:${server.httpServer.address().port}`;
  const endpoint = new Promise((resolve, reject) => {
    browser = spawn(
      executable,
      [
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--no-first-run",
        "--no-default-browser-check",
        "--remote-debugging-port=0",
        `--user-data-dir=${profile}`,
        "about:blank",
      ],
      { stdio: ["ignore", "ignore", "pipe"] },
    );
    let text = "";
    const timer = setTimeout(
      () => reject(new Error("Chrome did not expose a DevTools endpoint.")),
      15000,
    );
    browser.stderr.on("data", (data) => {
      text += data;
      const match = text.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) {
        clearTimeout(timer);
        resolve(match[1]);
      }
    });
    browser.on("error", reject);
    browser.on("exit", (code) => {
      if (!socket) {
        clearTimeout(timer);
        reject(new Error(`Chrome exited: ${code}. ${text.slice(-1000)}`));
      }
    });
  });
  socket = new WebSocket(await endpoint);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(String(event.data));
    if (message.id) {
      const request = pending.get(message.id);
      if (!request) return;
      pending.delete(message.id);
      message.error
        ? request.reject(new Error(message.error.message))
        : request.resolve(message.result);
    }
    if (message.method === "Runtime.exceptionThrown")
      runtimeErrors.push(
        message.params.exceptionDetails.exception?.description ||
          message.params.exceptionDetails.text,
      );
    if (
      message.method === "Runtime.consoleAPICalled" &&
      message.params.type === "error"
    )
      runtimeErrors.push(
        message.params.args
          .map((arg) => arg.value || arg.description)
          .join(" "),
      );
  });
  const { targetId } = await send(
    "Target.createTarget",
    { url: "about:blank" },
    null,
  );
  ({ sessionId: session } = await send(
    "Target.attachToTarget",
    { targetId, flatten: true },
    null,
  ));
  await send("Page.enable");
  await send("Runtime.enable");
  await viewport(1600, 1100);
  await check(
    "Desktop homepage renders the new documentation design",
    async () => {
      await navigate("/");
      assert.match(
        await evaluate("document.querySelector('h1').textContent"),
        /Good ideas/,
      );
      assert.equal(
        await evaluate("document.querySelectorAll('.showcase-card').length"),
        4,
      );
      await screenshot("desktop-home.png", true);
    },
  );
  await check("Dark mode and accent persist across page loads", async () => {
    await click('.header-icon[aria-label="Switch to dark mode"]');
    await click(".accent-options button.blue");
    await until(
      "document.documentElement.classList.contains('dark') && document.documentElement.dataset.accent==='blue'",
    );
    await screenshot("desktop-dark.png", true);
    await navigate("/components/button");
    assert.ok(
      await evaluate(
        "document.documentElement.classList.contains('dark') && document.documentElement.dataset.accent==='blue'",
      ),
    );
    await evaluate(
      "localStorage.setItem('vuewind-theme','light');localStorage.setItem('vuewind-accent','green')",
    );
  });
  await check(
    "All 60 component routes load live examples without runtime errors",
    async () => {
      const names = (await import("node:fs/promises")).readdir;
      const docs = await names("src/docs/content");
      for (const file of docs.filter((f) => f.endsWith(".js"))) {
        const { default: record } = await import(`../src/docs/content/${file}`);
        await navigate(`/components/${record.slug}`);
        await until(
          "document.querySelector('.demo-preview')?.childNodes.length > 0",
        );
        assert.match(
          await evaluate("document.querySelector('h1').textContent"),
          new RegExp(record.name),
        );
      }
    },
  );
  await check(
    "Component source preview shows the actual runnable example",
    async () => {
      await navigate("/components/button");
      await click(".demo-view-tabs button:nth-child(2)");
      await until(
        "document.querySelector('.demo-frame pre')?.textContent.includes('VwButton')",
      );
      assert.match(
        await evaluate("document.querySelector('.demo-frame pre').textContent"),
        /import VwButton/,
      );
      await screenshot("button-documentation.png", true);
    },
  );
  await check("Catalog filters by query and category", async () => {
    await navigate("/components");
    await evaluate(
      "{ const input=document.querySelector('input[type=search]');input.value='checkbox';input.dispatchEvent(new Event('input',{bubbles:true})); }",
    );
    await until("document.querySelectorAll('.catalog-card').length === 1");
    assert.match(
      await evaluate("document.querySelector('.catalog-card h2').textContent"),
      /Checkbox/,
    );
    await evaluate(
      "{ const input=document.querySelector('input[type=search]');input.value='no-such-component';input.dispatchEvent(new Event('input',{bubbles:true})); }",
    );
    await until("!!document.querySelector('.catalog-empty')");
    await click(".catalog-empty button");
    await until("document.querySelectorAll('.catalog-card').length === 60");
    await evaluate(
      "[...document.querySelectorAll('.catalog-filters button')].find(b=>b.textContent==='Forms').click()",
    );
    await until(
      "document.querySelectorAll('.catalog-card').length > 1 && document.querySelectorAll('.catalog-card').length < 60",
    );
    assert.ok(
      await evaluate(
        "[...document.querySelectorAll('.catalog-card-category')].every(e=>e.textContent==='Forms')",
      ),
    );
  });
  await check("Keyboard search opens, filters, and navigates", async () => {
    await key("k", 2);
    await until("document.querySelector('.command-dialog').open");
    await send("Input.insertText", { text: "Checkbox" });
    await until("document.querySelectorAll('.command-result').length === 1");
    await key("Enter");
    await until(
      "location.pathname==='/components/checkbox' && !document.querySelector('.command-dialog').open",
    );
  });
  await check(
    "Checkbox and switch update their native checked state",
    async () => {
      await until(
        "!!document.querySelector('.demo-preview input[type=checkbox]')",
      );
      const before = await evaluate(
        "document.querySelector('.demo-preview input[type=checkbox]').checked",
      );
      await click(".demo-preview input[type=checkbox]");
      assert.equal(
        await evaluate(
          "document.querySelector('.demo-preview input[type=checkbox]').checked",
        ),
        !before,
      );
      await navigate("/components/switch");
      await click(".demo-preview [role=switch]");
      await until(
        "document.querySelector('.demo-preview [role=switch]').getAttribute('aria-checked')==='false'",
      );
    },
  );
  await check(
    "Tabs support arrow navigation and a single active tab stop",
    async () => {
      await navigate("/components/tabs");
      await until("!!document.querySelector('.demo-preview [role=tab]')");
      await evaluate(
        "document.querySelector('.demo-preview [role=tab]').focus()",
      );
      await key("ArrowRight");
      await until(
        "document.querySelector('.demo-preview [role=tab][aria-selected=true]').textContent==='Activity'",
      );
      assert.equal(
        await evaluate(
          "document.querySelectorAll('.demo-preview [role=tab][tabindex=\"0\"]').length",
        ),
        1,
      );
    },
  );
  await check(
    "Native dialogs contain focus and restore the opener after Escape",
    async () => {
      await navigate("/components/dialog");
      await click(".demo-preview > button");
      await until("!!document.querySelector('.demo-preview dialog[open]')");
      for (let i = 0; i < 9; i++) {
        await key("Tab");
        assert.ok(
          await evaluate(
            "document.querySelector('.demo-preview dialog').contains(document.activeElement) || document.activeElement===document.body",
          ),
        );
      }
      await key("Escape");
      await until("!document.querySelector('.demo-preview dialog').open");
      assert.ok(
        await evaluate(
          "document.activeElement===document.querySelector('.demo-preview > button')",
        ),
      );
    },
  );
  await check(
    "Guide, blocks, and missing-page routes remain useful",
    async () => {
      for (const route of [
        "/docs/installation",
        "/docs/theming",
        "/docs/accessibility",
        "/blocks",
        "/changelog",
      ]) {
        await navigate(route);
        assert.ok(
          (await evaluate("document.querySelector('h1').textContent")).length >
            3,
        );
      }
      await navigate("/components/missing");
      assert.match(
        await evaluate("document.querySelector('h1').textContent"),
        /Nothing here/,
      );
    },
  );
  await check(
    "Mobile navigation and main layouts fit a 390px viewport",
    async () => {
      await viewport(390, 844);
      for (const route of [
        "/",
        "/components",
        "/components/button",
        "/components/table",
        "/docs/installation",
        "/blocks",
      ]) {
        await navigate(route);
        await pause(100);
        assert.ok(
          await evaluate(
            "document.documentElement.scrollWidth <= innerWidth + 1",
          ),
          `Horizontal overflow on ${route}`,
        );
        if (route === "/") await screenshot("mobile-home.png", true);
      }
      await click(".mobile-menu-button");
      await until("!!document.querySelector('dialog.vw-drawer[open]')");
      await screenshot("mobile-navigation.png");
      await key("Escape");
      await until("!document.querySelector('dialog.vw-drawer').open");
    },
  );
  assert.deepEqual(runtimeErrors, [], "Browser runtime errors");
  await writeFile(
    path.join(output, "browser-report.json"),
    JSON.stringify(
      {
        checks,
        runtimeErrors,
        screenshots: [
          "desktop-home.png",
          "desktop-dark.png",
          "button-documentation.png",
          "mobile-home.png",
          "mobile-navigation.png",
        ],
      },
      null,
      2,
    ),
  );
  console.log(
    `\n${checks.length} browser checks passed. Screenshots: ${output}`,
  );
} finally {
  if (socket?.readyState === WebSocket.OPEN) {
    try {
      await send("Browser.close", {}, null);
    } catch {}
    socket.close();
  }
  browser?.kill("SIGTERM");
  await server.close();
  await pause(300);
  await rm(profile, {
    recursive: true,
    force: true,
    maxRetries: 4,
    retryDelay: 150,
  });
}
