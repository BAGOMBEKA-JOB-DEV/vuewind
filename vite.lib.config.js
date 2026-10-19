import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { readFileSync } from "node:fs";

export default defineConfig({
  plugins: [
    vue(),
    {
      name: "vuewind-declarations",
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "index.d.ts",
          source: readFileSync(
            new URL("./src/lib/index.d.ts", import.meta.url),
            "utf8",
          ),
        });
      },
    },
  ],
  build: {
    outDir: "lib-dist",
    lib: {
      entry: fileURLToPath(new URL("./src/lib/entry.js", import.meta.url)),
      formats: ["es"],
      fileName: "vuewind",
    },
    rollupOptions: { external: ["vue"] },
    cssCodeSplit: false,
  },
});
