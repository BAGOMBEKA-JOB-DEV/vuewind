<script setup>
import VwBreadcrumb from "../../lib/components/VwBreadcrumb.vue";
const items = [
  { label: "Documentation", href: "/docs/introduction" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" },
];
</script>
<template><VwBreadcrumb :items="items" /></template>
