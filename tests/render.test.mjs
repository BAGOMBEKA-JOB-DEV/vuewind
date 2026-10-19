import test from "node:test";
import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { createServer } from "vite";
import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";

test("all runnable examples render without browser globals or Vue warnings", async (t) => {
  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  try {
    const examples = (await readdir("src/docs/examples")).filter((f) =>
      f.endsWith(".vue"),
    );
    for (const file of examples) {
      await t.test(file, async () => {
        const { default: component } = await server.ssrLoadModule(
          `/src/docs/examples/${file}`,
        );
        const app = createSSRApp(component);
        const warnings = [];
        app.config.warnHandler = (message) => warnings.push(message);
        const html = await renderToString(app);
        assert.ok(html.length > 5);
        assert.deepEqual(warnings, []);
      });
    }
    await t.test(
      "SSR rejects carriage-return attribute injection and escapes labels",
      async () => {
        const { default: VwInput } = await server.ssrLoadModule(
          "/src/lib/components/VwInput.vue",
        );
        const app = createSSRApp({
          render: () =>
            h(VwInput, {
              label: '<img src=x onerror="security-probe">',
              "x\rautofocus\ronfocus": "security-probe",
            }),
        });
        app.config.warnHandler = () => {};
        const html = await renderToString(app);
        assert.doesNotMatch(html, /autofocus|onfocus|<img/);
        assert.match(html, /&lt;img/);
      },
    );
  } finally {
    await server.close();
  }
});
