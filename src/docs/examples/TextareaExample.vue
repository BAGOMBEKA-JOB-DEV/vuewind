<script setup>
import { ref } from "vue";
import VwTextarea from "../../lib/components/VwTextarea.vue";
const value = ref("");
</script>
<template>
  <VwTextarea
    v-model="value"
    label="A little about your project"
    placeholder="What are you working on?"
    style="width: 360px; max-width: 100%"
  />
</template>
