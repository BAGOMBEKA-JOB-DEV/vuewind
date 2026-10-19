<script setup>
defineProps({ variant: { type: String, default: "neutral" }, dot: Boolean });
</script>

<template>
  <span class="vw-badge" :data-variant="variant"
    ><span v-if="dot" class="vw-status-dot" aria-hidden="true" /><slot
  /></span>
</template>
