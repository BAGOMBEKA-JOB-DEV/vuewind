<script setup>
import { ref } from "vue";
import VwToast from "../../lib/components/VwToast.vue";
import VwButton from "../../lib/components/VwButton.vue";
const visible = ref(true);
</script>
<template>
  <VwToast
    v-if="visible"
    title="Looking good!"
    description="Your changes are saved and ready to go."
    @close="visible = false"
  /><VwButton v-else variant="outline" @click="visible = true"
    >Show notification</VwButton
  >
</template>
