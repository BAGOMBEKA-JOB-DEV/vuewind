<script setup>
import { ref } from "vue";
import VwInputGroup from "../../lib/components/VwInputGroup.vue";
const value = ref("your-workspace");
</script>
<template>
  <VwInputGroup
    v-model="value"
    label="Workspace URL"
    prefix="https://"
    suffix=".app"
    style="width: 380px; max-width: 100%"
  />
</template>
