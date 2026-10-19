<script setup>
import { ref } from "vue";
import VwCalendar from "../../lib/components/VwCalendar.vue";
const date = ref("");
</script>
<template>
  <div class="demo-stack">
    <VwCalendar v-model="date" />
    <p v-if="date" class="vw-muted" role="status">Selected: {{ date }}</p>
  </div>
</template>
