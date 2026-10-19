<script setup>
import VwAvatarGroup from "../../lib/components/VwAvatarGroup.vue";
const people = [
  { name: "Alex Morgan" },
  { name: "Sarah Chen" },
  { name: "James Wilson" },
  { name: "Priya Patel" },
  { name: "Daniel Lee" },
];
</script>
<template>
  <div class="demo-row">
    <VwAvatarGroup :items="people" :max="3" /><span class="vw-muted"
      >A good team makes all the difference.</span
    >
  </div>
</template>
