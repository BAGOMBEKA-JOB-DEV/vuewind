<script setup>
import VwNavigationMenu from "../../lib/components/VwNavigationMenu.vue";
const items = [
  { label: "Overview", href: "/docs/introduction" },
  { label: "Components", href: "/components" },
  { label: "Blocks", href: "/blocks" },
];
</script>
<template>
  <VwNavigationMenu :items="items" active="/docs/introduction" />
</template>
