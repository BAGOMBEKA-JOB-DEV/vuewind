<script setup>
import VwMeter from "../../lib/components/VwMeter.vue";
</script>
<template>
  <VwMeter
    :value="7.2"
    :max="10"
    label="Storage used (GB)"
    style="width: 320px; max-width: 100%"
  />
</template>
