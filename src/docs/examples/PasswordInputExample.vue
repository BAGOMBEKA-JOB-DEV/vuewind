<script setup>
import { ref } from "vue";
import VwPasswordInput from "../../lib/components/VwPasswordInput.vue";
const value = ref("");
</script>
<template>
  <VwPasswordInput
    v-model="value"
    autocomplete="new-password"
    placeholder="At least 8 characters"
    style="width: 320px; max-width: 100%"
  />
</template>
