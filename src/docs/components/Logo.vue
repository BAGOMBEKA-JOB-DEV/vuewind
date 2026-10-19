<script setup>
import Icon from "../../lib/Icon.vue";
defineProps({ compact: Boolean });
</script>
<template>
  <RouterLink to="/" class="docs-brand" aria-label="Vuewind home"
    ><span class="brand-mark"><Icon name="wind" :size="23" /></span
    ><span v-if="!compact"
      >vuewind<span class="brand-period">.</span></span
    ></RouterLink
  >
</template>
