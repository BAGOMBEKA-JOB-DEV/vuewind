<script setup>
import VwStepper from "../../lib/components/VwStepper.vue";
</script>
<template>
  <VwStepper
    :current="1"
    :steps="['Your details', 'Workspace', 'Ready to go']"
  />
</template>
