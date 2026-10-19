<script setup>
import { ref } from "vue";
import VwSelect from "../../lib/components/VwSelect.vue";
const value = ref("Vue");
</script>
<template>
  <VwSelect
    v-model="value"
    label="Your framework"
    :options="['Vue', 'Nuxt', 'Laravel + Inertia']"
    style="width: 280px; max-width: 100%"
  />
</template>
