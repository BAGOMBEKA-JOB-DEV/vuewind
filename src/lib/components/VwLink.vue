<script setup>
import Icon from "../Icon.vue";
defineProps({ href: { type: String, required: true }, external: Boolean });
</script>

<template>
  <a
    class="vw-link"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    ><slot /><Icon v-if="external" name="arrow" :size="13" /><span
      v-if="external"
      class="vw-sr-only"
    >
      (opens in a new tab)</span
    ></a
  >
</template>
