<script setup>
import { ref } from "vue";
import VwDialog from "../../lib/components/VwDialog.vue";
import VwButton from "../../lib/components/VwButton.vue";
const open = ref(false);
</script>
<template>
  <VwButton variant="outline" @click="open = true">Open dialog</VwButton
  ><VwDialog
    v-model="open"
    title="A fresh start"
    description="Great things begin with a little space to think."
    ><p>
      Your work is saved. Take a moment, then get back to what you do best.
    </p>
    <template #footer
      ><VwButton variant="outline" @click="open = false">Go back</VwButton
      ><VwButton @click="open = false">Sounds good</VwButton></template
    ></VwDialog
  >
</template>
