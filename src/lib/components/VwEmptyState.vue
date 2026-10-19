<script setup>
import Icon from "../Icon.vue";
defineProps({
  title: { type: String, default: "A fresh canvas" },
  description: { type: String, default: "Your next great idea belongs here." },
  icon: { type: String, default: "folder" },
});
</script>

<template>
  <div class="vw-empty">
    <span class="vw-empty-icon"><Icon :name="icon" :size="25" /></span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <slot />
  </div>
</template>
