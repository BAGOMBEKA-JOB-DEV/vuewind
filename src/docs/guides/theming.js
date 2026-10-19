export default {
  title: "Theming",
  description: "A considered foundation. Your own point of view.",
  sections: [
    {
      id: "approach",
      title: "A shared design language.",
      body: "All new components use semantic CSS custom properties. The same token controls the surface, border, or primary color wherever it appears. Start with a few global decisions rather than overriding every component.",
    },
    {
      id: "tokens",
      title: "The essentials.",
      body: "Override tokens after importing the library styles. Primary foreground and background should be chosen as a pair so labels remain readable.",
      code: ":root {\n  --vw-primary: #3566bd;\n  --vw-primary-hover: #28539e;\n  --vw-primary-soft: #ecf1fc;\n  --vw-on-primary: #ffffff;\n  --vw-radius: 9px;\n}",
      language: "css",
    },
    {
      id: "surfaces",
      title: "Give your content room to breathe.",
      body: "Surface and text tokens separate purpose from raw color. Customize the page, raised surfaces, subtle backgrounds, and borders together.",
      code: ":root {\n  --vw-bg: #fafbf9;\n  --vw-surface: #ffffff;\n  --vw-soft: #f1f3ef;\n  --vw-text: #202820;\n  --vw-muted: #697268;\n  --vw-border: #e4e8e0;\n}",
      language: "css",
    },
    {
      id: "scope",
      title: "A theme can be local.",
      body: "CSS variables inherit. Apply overrides to a wrapper to theme only part of a page, without changing the rest of your application.",
      code: ".campaign-panel {\n  --vw-primary: #7854b8;\n  --vw-primary-hover: #64439e;\n  --vw-primary-soft: #f1edf8;\n}",
      language: "css",
    },
    {
      id: "tailwind",
      title: "Keep your Tailwind workflow.",
      body: "The original project retains Tailwind CSS 3.4. New components use a prefixed CSS layer so their appearance can be reused without copying a Tailwind configuration. Continue using utilities for page layout, spacing, and application-specific styles.",
      note: "Do not enable a second CSS reset in the same app without checking native controls and heading styles.",
    },
  ],
};
