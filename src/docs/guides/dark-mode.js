export default {
  title: "Dark mode",
  description: "The same care, in a different light.",
  sections: [
    {
      id: "switch",
      title: "One class. A different atmosphere.",
      body: "Add dark to the root element to switch every component to the dark token palette. A complete dark palette includes surfaces, borders, muted text, and focus colors.",
      code: "document.documentElement.classList.toggle('dark', true)",
      language: "js",
    },
    {
      id: "preference",
      title: "Respect a personal preference.",
      body: "The documentation opens in dark mode by default. Saved light, dark, and system preferences take precedence, and the theme toggle remains available in the header. The theme store also persists the accent color. Browser storage failures do not prevent switching themes.",
      code: "import { useThemeStore } from '@/stores/theme'\n\nconst theme = useThemeStore()\ntheme.mode = 'system'\ntheme.accent = 'green'",
      language: "js",
    },
    {
      id: "customize",
      title: "Make both palettes feel related.",
      body: "Override dark tokens alongside your light tokens. Use a brighter accent on dark surfaces and adjust its foreground color to preserve contrast.",
      code: ".dark {\n  --vw-primary: #90b7ff;\n  --vw-primary-hover: #bbd2ff;\n  --vw-primary-soft: #25324c;\n  --vw-on-primary: #12271a;\n}",
      language: "css",
    },
    {
      id: "testing",
      title: "Check the quiet details.",
      body: "Review disabled controls, placeholder text, badges, charts, and code examples in both modes. Color alone should never be the only way to understand state.",
      list: [
        "Try the keyboard focus ring on every interactive surface.",
        "Check native date and select controls with color-scheme enabled.",
        "Test a custom accent against its foreground color.",
        "Do not invert image assets as a substitute for a dark theme.",
      ],
    },
  ],
};
