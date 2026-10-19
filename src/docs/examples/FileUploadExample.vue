<script setup>
import VwFileUpload from "../../lib/components/VwFileUpload.vue";
</script>
<template>
  <VwFileUpload
    accept="image/*,.pdf"
    label="Add your files"
    multiple
    style="width: 380px; max-width: 100%"
  />
</template>
