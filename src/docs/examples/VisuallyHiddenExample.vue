<script setup>
import VwVisuallyHidden from "../../lib/components/VwVisuallyHidden.vue";
import Icon from "../../lib/Icon.vue";
</script>
<template>
  <button type="button" class="vw-button" data-variant="outline">
    <Icon name="download" /><VwVisuallyHidden
      >Download the project files</VwVisuallyHidden
    ><span aria-hidden="true">Download</span>
  </button>
</template>
