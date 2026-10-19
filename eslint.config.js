import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"],
    languageOptions: { globals: globals.browser },
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  skipFormatting,
  {
    rules: {
      "vue/multi-word-component-names": [
        "error",
        { ignores: ["Icon", "Logo"] },
      ],
    },
  },
];
