export default {
  title: "Composition",
  description: "Small pieces. A clear way to put them together.",
  sections: [
    {
      id: "principles",
      title: "Let components do one thing well.",
      body: "Props express intent. Slots hold content. Events report actions. State stays in your application so the same component can support very different experiences.",
    },
    {
      id: "state",
      title: "Keep the state close.",
      body: "Controlled inputs use modelValue and update:modelValue. Vue’s v-model syntax keeps the relationship clear. Vuewind components do not mutate your application arrays or make API calls.",
      code: "<script setup>\nimport { ref } from 'vue'\nimport { VwSwitch } from '@/lib'\nconst notifications = ref(true)\n</script>\n\n<template>\n  <VwSwitch v-model=\"notifications\" label=\"Notifications\" />\n</template>",
      language: "vue",
    },
    {
      id: "slots",
      title: "Leave room for your own ideas.",
      body: "Card exposes header, default, and footer slots. Table exposes cell-key slots. Dialog and Drawer expose close through their default and footer slots.",
      code: '<VwCard title="Your workspace">\n  <p>A place for the next good idea.</p>\n  <template #footer>\n    <VwButton @click="save">Save changes</VwButton>\n  </template>\n</VwCard>',
      language: "vue",
    },
    {
      id: "boundaries",
      title: "A clear boundary with your app.",
      body: "A file picker selects files; your service uploads them. A table renders records; your application filters them. A sign-in form gathers input; your authentication provider verifies it. Clear boundaries make the components easier to reuse and test.",
    },
    {
      id: "blocks",
      title: "See the bigger picture.",
      body: "The Blocks page combines the same components into a workspace overview, a local form demo, and notification settings. Open their source to see composition in practice.",
      note: "The examples are local demonstrations. No demo submits data to a backend or pretends to authenticate a user.",
    },
  ],
};
