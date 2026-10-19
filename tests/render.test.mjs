import test from "node:test";
import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { createServer } from "vite";
import { createSSRApp } from "vue";
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
  } finally {
    await server.close();
  }
});
