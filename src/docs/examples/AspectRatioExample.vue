<script setup>
import VwAspectRatio from "../../lib/components/VwAspectRatio.vue";
import Icon from "../../lib/Icon.vue";
</script>
<template>
  <VwAspectRatio :ratio="16 / 9" style="width: 380px; max-width: 100%"
    ><div class="vw-aspect-placeholder">
      <Icon name="layers" :size="34" /><span
        >A little space for something beautiful.</span
      >
    </div></VwAspectRatio
  >
</template>
