import test from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile, access } from "node:fs/promises";
import { parse, compileScript, compileTemplate } from "@vue/compiler-sfc";

const componentFiles = (await readdir("src/lib/components")).filter((f) =>
  f.endsWith(".vue"),
);
const docsFiles = (await readdir("src/docs/content")).filter((f) =>
  f.endsWith(".js"),
);
const exported = await readFile("src/lib/index.js", "utf8");

test("every documented component has implementation, source example, API, and export", async () => {
  assert.equal(componentFiles.length, 60);
  assert.equal(docsFiles.length, componentFiles.length);
  const names = new Set();
  for (const file of docsFiles) {
    const { default: doc } = await import(`../src/docs/content/${file}`);
    assert.ok(!names.has(doc.name), `Duplicate ${doc.name}`);
    names.add(doc.name);
    assert.equal(file, `${doc.slug}.js`);
    assert.ok(doc.description.length > 10);
    assert.ok(doc.notes.length > 20);
    assert.ok(doc.keyboard.length > 10);
    await access(`src/lib/components/Vw${doc.name}.vue`);
    await access(`src/docs/examples/${doc.name}Example.vue`);
    assert.ok(exported.includes(`default as Vw${doc.name}`));
    assert.equal(new Set(doc.props.map((p) => p.name)).size, doc.props.length);
    const implementation = await readFile(
      `src/lib/components/Vw${doc.name}.vue`,
      "utf8",
    );
    const emits =
      implementation.match(/defineEmits\(\s*\[([^\]]*)\]/)?.[1] || "";
    assert.deepEqual(
      doc.events.map((event) => event.name),
      [...emits.matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]),
      `${doc.name} event documentation must match its implementation`,
    );
  }
});

async function filesUnder(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) =>
      e.isDirectory() ? filesUnder(`${dir}/${e.name}`) : `${dir}/${e.name}`,
    ),
  );
  return nested.flat();
}

test("redesigned source compiles and all local imports resolve", async (t) => {
  const files = [
    ...(await filesUnder("src/lib")),
    ...(await filesUnder("src/docs")),
  ];
  for (const file of files.filter((f) => /\.(vue|js)$/.test(f))) {
    await t.test(file, async () => {
      const source = await readFile(file, "utf8");
      if (file.endsWith(".vue")) {
        const { descriptor, errors } = parse(source, { filename: file });
        assert.deepEqual(errors, []);
        const script = compileScript(descriptor, { id: file });
        const template = compileTemplate({
          source: descriptor.template.content,
          filename: file,
          id: file,
          compilerOptions: { bindingMetadata: script.bindings },
        });
        assert.deepEqual(template.errors, []);
      }
      for (const match of source.matchAll(
        /(?:import|export)\s+(?:[^'";]*?\s+from\s+)?['"](\.[^'"]+)['"]/g,
      )) {
        const url = new URL(
          match[1],
          new URL(file, `file://${process.cwd()}/`),
        );
        await access(url);
      }
    });
  }
});
