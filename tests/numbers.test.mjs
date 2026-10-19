import test from "node:test";
import assert from "node:assert/strict";
import { clamp, pageRange } from "../src/lib/utils/numbers.js";

test("numeric bounds handle invalid values and preserve zero", () => {
  assert.equal(clamp(-2, 0, 10), 0);
  assert.equal(clamp(12, 0, 10), 10);
  assert.equal(clamp("5", 0, 10), 5);
  assert.equal(clamp(Number.NaN, 2, 10), 2);
  assert.equal(clamp(0, 0, 10), 0);
});

test("pagination stays bounded while keeping a useful window", () => {
  assert.deepEqual(pageRange(1, 8), [1, 2, 3, 4, 5]);
  assert.deepEqual(pageRange(8, 8), [4, 5, 6, 7, 8]);
  assert.deepEqual(pageRange(4, 8), [2, 3, 4, 5, 6]);
  assert.deepEqual(pageRange(1, 0), [1]);
  for (let total = 1; total < 30; total++) {
    for (let page = 1; page <= total; page++) {
      const window = pageRange(page, total);
      assert.ok(window.includes(page));
      assert.ok(window.every((n) => n >= 1 && n <= total));
      assert.equal(new Set(window).size, window.length);
    }
  }
});
