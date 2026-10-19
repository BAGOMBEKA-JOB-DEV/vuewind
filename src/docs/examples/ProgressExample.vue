<script setup>
import VwProgress from "../../lib/components/VwProgress.vue";
</script>
<template>
  <div class="demo-stack" style="width: 340px; max-width: 100%">
    <VwProgress :value="68" label="Project progress" show-value /><VwProgress
      :value="32"
      label="Upload progress"
    />
  </div>
</template>
