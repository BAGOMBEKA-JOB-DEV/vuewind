import test from "node:test";
import assert from "node:assert/strict";
import { highlight } from "../src/docs/utils/highlight.js";

test("code highlighting preserves every source character", () => {
  const source =
    '<script setup>\nconst value = "<b>safe</b>"\n// a comment\n</script>';
  const tokens = highlight(source);
  assert.equal(tokens.map((t) => t.text).join(""), source);
  assert.ok(tokens.some((t) => t.type === "string"));
  assert.ok(tokens.some((t) => t.type === "comment"));
  assert.ok(tokens.some((t) => t.type === "keyword"));
});

test("untrusted code remains text rather than generated HTML", () => {
  const source = '<img src=x onerror=alert(1)> & "unsafe"';
  assert.equal(
    highlight(source)
      .map((t) => t.text)
      .join(""),
    source,
  );
  assert.ok(highlight(source).every((t) => typeof t.text === "string"));
});
