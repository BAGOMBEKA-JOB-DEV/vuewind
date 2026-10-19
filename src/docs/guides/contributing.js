export default {
  title: "Contributing",
  description: "A good foundation gets better with good people.",
  sections: [
    {
      id: "start",
      title: "Make yourself at home.",
      body: "Start from a clean checkout and create a focused branch. Read the component source, its example, and its documentation record together. Each belongs to the same public contract.",
      code: "npm install\nnpm test\nnpm run build\nnpm run build:lib",
      language: "shell",
    },
    {
      id: "components",
      title: "A component has three parts.",
      body: "Keep implementation, runnable example, and API documentation aligned. The registry discovers these files automatically.",
      code: "src/lib/components/VwYourComponent.vue\nsrc/docs/examples/YourComponentExample.vue\nsrc/docs/content/your-component.js",
      language: "text",
    },
    {
      id: "conventions",
      title: "Keep things easy to understand.",
      list: [
        "Use Vue script setup and explicit props and events.",
        "Prefer native HTML semantics to unnecessary ARIA roles.",
        "Use the shared --vw tokens and vw- CSS prefix.",
        "Keep application-specific networking out of the library.",
        "Provide meaningful keyboard and accessibility notes.",
      ],
    },
    {
      id: "checks",
      title: "Check what a person will experience.",
      body: "Run the component and documentation tests, build both targets, and inspect the changed example in light and dark mode. For interactive behavior, run the browser check with a local Chromium installation.",
      code: "npm run test:browser",
      language: "shell",
      note: "The browser check uses Chromium through the DevTools protocol. Set BROWSER_BIN to your Chromium executable if it is not in a standard location.",
    },
    {
      id: "review",
      title: "Leave a clear trail.",
      body: "Keep commits focused on a meaningful change. Describe the behavior, the reason for it, and the validation you performed. Include screenshots when a visual change benefits from comparison.",
    },
  ],
};
