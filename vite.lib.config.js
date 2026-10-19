import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { readFileSync } from "node:fs";

export default defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    {
      name: "vuewind-declarations",
      generateBundle() {
        const source = readFileSync(
          new URL("./src/lib/index.d.ts", import.meta.url),
          "utf8",
        );
        for (const fileName of ["index.d.ts", "index.d.cts"]) {
          this.emitFile({ type: "asset", fileName, source });
        }
      },
    },
  ],
  build: {
    outDir: "lib-dist",
    lib: {
      entry: fileURLToPath(new URL("./src/lib/entry.js", import.meta.url)),
      formats: ["es", "cjs"],
      cssFileName: "style",
      fileName: (format) => (format === "es" ? "vuewind.js" : "vuewind.cjs"),
    },
    rollupOptions: { external: ["vue"] },
    cssCodeSplit: false,
  },
});
