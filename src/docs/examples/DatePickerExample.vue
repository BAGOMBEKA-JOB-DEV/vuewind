<script setup>
import { ref } from "vue";
import VwDatePicker from "../../lib/components/VwDatePicker.vue";
const value = ref("");
</script>
<template>
  <VwDatePicker
    v-model="value"
    label="Launch date"
    style="width: 280px; max-width: 100%"
  />
</template>
