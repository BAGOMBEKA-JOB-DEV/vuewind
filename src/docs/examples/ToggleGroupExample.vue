<script setup>
import { ref } from "vue";
import VwToggleGroup from "../../lib/components/VwToggleGroup.vue";
const value = ref("week");
const items = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
];
</script>
<template>
  <VwToggleGroup v-model="value" :items="items" label="Time range" />
</template>
