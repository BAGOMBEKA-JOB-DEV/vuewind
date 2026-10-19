<script setup>
import { ref } from "vue";
import VwNumberInput from "../../lib/components/VwNumberInput.vue";
const quantity = ref(2);
</script>
<template>
  <VwNumberInput v-model="quantity" :min="1" :max="10" label="Team members" />
</template>
