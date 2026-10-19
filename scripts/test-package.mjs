import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import {
  mkdtemp,
  mkdir,
  readFile,
  writeFile,
  readdir,
  rm,
  symlink,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import ts from "typescript";
import { packageExample } from "../src/docs/utils/package-example.js";

const run = promisify(execFile);
const root = process.cwd();
const temporary = await mkdtemp(path.join(tmpdir(), "vuewind-package-"));
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const env = { ...process.env, npm_config_cache: path.join(temporary, "cache") };
try {
  const pkg = JSON.parse(await readFile("package.json", "utf8"));
  assert.equal(pkg.name, "@bagombeka/vuewind");
  assert.equal(pkg.private, undefined);
  assert.deepEqual(
    Object.keys(pkg.dependencies || {}),
    [],
    "Consumers must not install the documentation dependency tree.",
  );
  const { stdout } = await run(
    npm,
    ["pack", "--ignore-scripts", "--json", "--pack-destination", temporary],
    { cwd: root, env },
  );
  const [packed] = JSON.parse(stdout);
  assert.equal(packed.filename, `bagombeka-vuewind-${pkg.version}.tgz`);
  const paths = packed.files.map((file) => file.path).sort();
  assert.deepEqual(
    paths,
    [
      "LICENSE",
      "README.md",
      "lib-dist/index.d.cts",
      "lib-dist/index.d.ts",
      "lib-dist/style.css",
      "lib-dist/vuewind.cjs",
      "lib-dist/vuewind.js",
      "package.json",
    ].sort(),
  );
  const consumer = path.join(temporary, "consumer");
  await mkdir(path.join(consumer, "examples"), { recursive: true });
  const tarball = path.join(temporary, packed.filename);
  await writeFile(
    path.join(consumer, "package.json"),
    JSON.stringify(
      {
        name: "vuewind-release-consumer",
        private: true,
        type: "module",
        dependencies: { "@bagombeka/vuewind": `file:${tarball}` },
      },
      null,
      2,
    ),
  );
  // Install the real tarball without fetching peers, then supply the checkout's Vue peer.
  await run(
    npm,
    [
      "install",
      "--ignore-scripts",
      "--offline",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
      "--legacy-peer-deps",
    ],
    { cwd: consumer, env },
  );
  const installedVue = JSON.parse(
    await readFile(path.join(root, "node_modules/vue/package.json"), "utf8"),
  );
  assert.match(installedVue.version, /^3\./);
  assert.ok(Number(installedVue.version.split(".")[1]) >= 5);
  await symlink(
    path.join(root, "node_modules/vue"),
    path.join(consumer, "node_modules/vue"),
    process.platform === "win32" ? "junction" : "dir",
  );
  const requireFromConsumer = createRequire(
    path.join(consumer, "package.json"),
  );
  const esmPath = path.join(
    consumer,
    "node_modules/@bagombeka/vuewind/lib-dist/vuewind.js",
  );
  const esm = await import(pathToFileURL(esmPath).href);
  const cjs = requireFromConsumer("@bagombeka/vuewind");
  const records = await Promise.all(
    (await readdir("src/docs/content"))
      .filter((file) => file.endsWith(".js"))
      .map(
        async (file) => (await import(`../src/docs/content/${file}`)).default,
      ),
  );
  const expected = [
    "VwIcon",
    ...records.map((record) => `Vw${record.name}`),
  ].sort();
  assert.deepEqual(Object.keys(esm).sort(), expected);
  assert.deepEqual(Object.keys(cjs).sort(), expected);
  const importTypes = path.join(consumer, "imports.mts");
  const requireTypes = path.join(consumer, "requires.cts");
  await writeFile(
    importTypes,
    `import {VwButton,VwInput,VwSwitch,VwIcon} from '@bagombeka/vuewind';\nimport {h} from 'vue';\nh(VwButton,{variant:'outline'});\nh(VwInput,{modelValue:'Hello',label:'Name'});\nh(VwSwitch,{modelValue:true,label:'Notifications'});\nh(VwIcon,{name:'wind',size:20});`,
  );
  await writeFile(
    requireTypes,
    `import Vuewind = require('@bagombeka/vuewind');\nconst button: typeof Vuewind.VwButton = Vuewind.VwButton;`,
  );
  const program = ts.createProgram([importTypes, requireTypes], {
    noEmit: true,
    strict: true,
    types: [],
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  assert.deepEqual(
    diagnostics.map((item) =>
      ts.flattenDiagnosticMessageText(item.messageText, "\n"),
    ),
    [],
    "Installed ESM and CommonJS declarations must type-check.",
  );
  for (const library of [esm, cjs]) {
    const warnings = [];
    const app = createSSRApp({
      render: () =>
        h("main", [
          h(
            library.VwButton,
            { variant: "outline" },
            () => "Installed from npm tarball",
          ),
          h(library.VwInput, { label: "Workspace", modelValue: "Vuewind" }),
          h(library.VwSwitch, { label: "Notifications", modelValue: true }),
          h(library.VwIcon, { name: "wind" }),
        ]),
    });
    app.config.warnHandler = (message) => warnings.push(message);
    const html = await renderToString(app);
    assert.match(html, /Installed from npm tarball/);
    assert.match(html, /aria-checked="true"/);
    assert.match(html, /Workspace/);
    assert.deepEqual(warnings, []);
  }
  const imports = [],
    names = [];
  for (const file of (await readdir("src/docs/examples")).filter((file) =>
    file.endsWith(".vue"),
  )) {
    const source = packageExample(
      await readFile(`src/docs/examples/${file}`, "utf8"),
    );
    assert.ok(
      !source.includes("../../lib/"),
      `${file} contains a private import`,
    );
    await writeFile(path.join(consumer, "examples", file), source);
    const name = file.replace(".vue", "");
    imports.push(`import ${name} from './examples/${file}';`);
    names.push(name);
  }
  await writeFile(
    path.join(consumer, "index.html"),
    '<div id="app"></div><script type="module" src="/main.js"></script>',
  );
  await writeFile(
    path.join(consumer, "main.js"),
    `${imports.join("\n")}\nimport {createApp,h} from 'vue';\nimport '@bagombeka/vuewind/style.css';\ncreateApp({render:()=>h('main',[${names.map((name) => `h(${name})`).join(",")}])}).mount('#app');`,
  );
  await build({
    root: consumer,
    configFile: false,
    plugins: [vue()],
    logLevel: "silent",
    build: { outDir: "dist" },
  });
  const assetFiles = await readdir(path.join(consumer, "dist/assets"));
  const css = await readFile(
    path.join(
      consumer,
      "dist/assets",
      assetFiles.find((file) => file.endsWith(".css")),
    ),
    "utf8",
  );
  assert.ok(
    css.includes("--vw-primary") &&
      css.includes(".vw-button") &&
      css.includes(":focus-visible"),
  );
  const installed = JSON.parse(
    await readFile(
      path.join(consumer, "node_modules/@bagombeka/vuewind/package.json"),
      "utf8",
    ),
  );
  assert.equal(installed.version, pkg.version);
  assert.equal(installed.name, pkg.name);
  console.log(
    `Verified @bagombeka/vuewind@${pkg.version}: ${paths.length} packed files, ${expected.length} ESM/CJS exports, both TypeScript declaration formats, SSR, CSS, and ${names.length} consumer examples.`,
  );
} finally {
  await rm(temporary, { recursive: true, force: true });
}
