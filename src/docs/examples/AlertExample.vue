<script setup>
import VwAlert from "../../lib/components/VwAlert.vue";
</script>
<template>
  <div class="demo-stack" style="width: 440px; max-width: 100%">
    <VwAlert title="Everything is up to date." variant="success"
      >Your changes have been saved successfully.</VwAlert
    ><VwAlert title="A little heads up" variant="info"
      >You can change these settings at any time.</VwAlert
    >
  </div>
</template>
