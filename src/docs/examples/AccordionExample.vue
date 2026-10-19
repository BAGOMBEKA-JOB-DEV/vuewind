<script setup>
import VwAccordion from "../../lib/components/VwAccordion.vue";
const items = [
  {
    title: "Is Vuewind free to use?",
    content: "Yes. Every component is open source under the MIT license.",
  },
  {
    title: "Can I customize the design?",
    content:
      "Absolutely. Change semantic CSS tokens or edit the component source.",
  },
  {
    title: "Does it work with my Vue project?",
    content: "The components use Vue 3.5 and work in a standard Vite project.",
  },
];
</script>
<template>
  <VwAccordion :items="items" style="width: 430px; max-width: 100%" />
</template>
