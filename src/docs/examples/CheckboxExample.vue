<script setup>
import { ref } from "vue";
import VwCheckbox from "../../lib/components/VwCheckbox.vue";
const accepted = ref(true);
</script>
<template>
  <div class="demo-stack">
    <VwCheckbox v-model="accepted" label="Keep me in the loop" /><VwCheckbox
      label="Send me product updates"
    /><VwCheckbox disabled label="This option is unavailable" />
  </div>
</template>
