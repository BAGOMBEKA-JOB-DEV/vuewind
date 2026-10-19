<script setup>
import VwPopover from "../../lib/components/VwPopover.vue";
import VwSwitch from "../../lib/components/VwSwitch.vue";
import { ref } from "vue";
const updates = ref(true);
</script>
<template>
  <VwPopover label="Quick preferences"
    ><div class="demo-stack">
      <strong>Make it your space</strong>
      <p class="vw-muted">A few small things, just for you.</p>
      <VwSwitch v-model="updates" label="Product updates" /></div
  ></VwPopover>
</template>
