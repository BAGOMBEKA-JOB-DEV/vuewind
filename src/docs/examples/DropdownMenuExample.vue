<script setup>
import { ref } from "vue";
import VwDropdownMenu from "../../lib/components/VwDropdownMenu.vue";
const chosen = ref("");
const items = [
  { label: "View profile", value: "profile", icon: "user" },
  { label: "Settings", value: "settings", icon: "settings" },
  { label: "Download", value: "download", icon: "download" },
];
</script>
<template>
  <div class="demo-stack">
    <VwDropdownMenu :items="items" @select="chosen = $event.label" /><span
      v-if="chosen"
      role="status"
      class="vw-muted"
      >Selected: {{ chosen }}</span
    >
  </div>
</template>
