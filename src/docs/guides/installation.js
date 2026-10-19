export default {
  title: "Installation",
  description: "A few small steps. A whole new place to build.",
  sections: [
    {
      id: "requirements",
      title: "A comfortable starting point.",
      body: "Start with an existing Vue 3.5 application. Vuewind provides compiled components, TypeScript declarations, and one shared stylesheet. You do not need Tailwind, the documentation app, or a Vuewind plugin to use the package.",
    },
    {
      id: "install",
      title: "Add Vuewind to your project.",
      body: "Install the public package from npm. Vue is a peer dependency, so your application keeps control of its Vue runtime.",
      code: "npm install vuewind",
      language: "shell",
      note: "Version 1.0.0 is prepared for its first manual npm release. If npm still reports that vuewind is not found, the maintainer has not completed that first publication yet.",
    },
    {
      id: "styles",
      title: "Set the foundation once.",
      body: "Import the stylesheet once in your app entry, normally src/main.js or src/main.ts. It includes the theme tokens and all component styles. CSS imports are preserved during tree shaking.",
      code: "import 'vuewind/style.css'",
      language: "js",
    },
    {
      id: "first-component",
      title: "Your first component.",
      body: "Use named imports for the components you need. Your bundler can remove unused component code. Each component follows standard Vue props, events, and slots.",
      code: "import { VwButton, VwInput, VwIcon } from 'vuewind'",
      language: "js",
    },
    {
      id: "compose",
      title: "A small beginning.",
      body: "Components use standard Vue props, events, and slots. No plugin registration is required for local imports.",
      code: "<script setup>\nimport { ref } from 'vue'\nimport { VwButton, VwInput } from 'vuewind'\nconst name = ref('')\n</script>\n\n<template>\n  <VwInput v-model=\"name\" label=\"Workspace name\" />\n  <VwButton @click=\"name = ''\">Reset</VwButton>\n</template>",
      language: "vue",
      note: "Load vuewind/style.css before using this example. Vuewind handles presentation and interaction; your application handles storage, networking, and validation.",
    },
    {
      id: "repository",
      title: "Explore the source, too.",
      body: "To work on the library or run the documentation locally, clone the repository. This is a separate workflow from installing Vuewind into an existing app. Use Node.js 20.19 or newer for repository development.",
      code: "git clone https://github.com/BAGOMBEKA-JOB-DEV/vuewind.git\ncd vuewind\nnpm ci\nnpm run dev",
      language: "shell",
    },
  ],
};
