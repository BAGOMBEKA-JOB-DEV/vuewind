export default {
  title: "Installation",
  description: "A few small steps. A whole new place to build.",
  sections: [
    {
      id: "requirements",
      title: "A comfortable starting point.",
      body: "Use Node.js 20.19 or newer and npm. The components target Vue 3.5. This repository includes the documentation app, examples, and component source; it is not currently published to npm.",
    },
    {
      id: "clone",
      title: "Make yourself a copy.",
      body: "Clone the repository and switch to the redesign branch to explore this version.",
      code: "git clone https://github.com/BAGOMBEKA-JOB-DEV/vuewind.git\ncd vuewind\ngit checkout redesign/vuewind-docs-v2\nnpm install",
      language: "shell",
    },
    {
      id: "run",
      title: "See what is possible.",
      body: "Start the documentation server. Vite prints your local URL, normally http://localhost:5173. Browse examples, change the theme, and open the Code tab to see the exact source behind each preview.",
      code: "npm run dev",
      language: "shell",
    },
    {
      id: "first-component",
      title: "Your first component.",
      body: "Inside this project, import from the library source. The documentation app already loads the shared styles. In another project, copy src/lib and import the tokens and component stylesheet once in your entry file.",
      code: "import { VwButton } from '@/lib'\nimport '@/lib/styles/tokens.css'\nimport '@/lib/styles/components.css'",
      language: "js",
    },
    {
      id: "compose",
      title: "A small beginning.",
      body: "Components use standard Vue props, events, and slots. No plugin registration is required for local imports.",
      code: "<script setup>\nimport { VwButton } from '@/lib'\n</script>\n\n<template>\n  <VwButton @click=\"save\">Save changes</VwButton>\n</template>",
      language: "vue",
      note: "The save function is application logic: provide your own handler. Vuewind never sends data or creates an account for you.",
    },
    {
      id: "build",
      title: "Ready for the next step.",
      body: "Build the documentation app or generate a standalone ES module library. The library build keeps Vue external and emits its styles separately.",
      code: "npm test\nnpm run build\nnpm run build:lib\nnpm run preview",
      language: "shell",
    },
  ],
};
