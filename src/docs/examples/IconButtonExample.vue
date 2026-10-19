<script setup>
import VwIconButton from "../../lib/components/VwIconButton.vue";
</script>
<template>
  <div class="demo-row">
    <VwIconButton icon="plus" label="Add item" /><VwIconButton
      icon="heart"
      label="Save to favorites"
    /><VwIconButton
      icon="download"
      label="Download file"
      variant="primary"
    /><VwIconButton icon="settings" label="Open settings" variant="ghost" />
  </div>
</template>
