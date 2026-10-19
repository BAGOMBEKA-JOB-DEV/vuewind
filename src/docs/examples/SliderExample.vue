<script setup>
import { ref } from "vue";
import VwSlider from "../../lib/components/VwSlider.vue";
const volume = ref(64);
</script>
<template>
  <VwSlider
    v-model="volume"
    label="Volume"
    style="width: 320px; max-width: 100%"
  />
</template>
