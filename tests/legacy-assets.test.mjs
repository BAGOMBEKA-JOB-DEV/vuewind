import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import * as fs from "node:fs";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import * as XLSX from "xlsx";
import { exportToExcel } from "../src/utils/exportToExcel.js";

test("legacy spreadsheet exports round-trip and preserve formula-like input as text", async () => {
  XLSX.set_fs(fs);
  const temporary = await mkdtemp(path.join(tmpdir(), "vuewind-export-"));
  try {
    const rows = [{ name: "Vuewind", note: "=1+1" }];
    const target = path.join(temporary, "export");
    exportToExcel(rows, ["name", "note"], target);
    const workbook = XLSX.read(await readFile(`${target}.xlsx`), {
      type: "buffer",
    });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    assert.deepEqual(XLSX.utils.sheet_to_json(sheet), rows);
    assert.equal(sheet.B2.t, "s");
    assert.equal(sheet.B2.f, undefined);
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});

test("legacy dashboard stylesheet compiles with its existing custom theme", async () => {
  const from = path.resolve("src/assets/css/style.css");
  const result = await postcss([tailwindcss()]).process(
    await readFile(from, "utf8"),
    { from },
  );
  assert.ok(result.css.includes(".flatpickr-calendar"));
  assert.ok(result.css.includes(".apexcharts-legend-text"));
  assert.ok(!result.css.includes("@apply"));
});
