<script setup>
defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  loading: Boolean,
  disabled: Boolean,
  type: { type: String, default: "button" },
});
</script>

<template>
  <button
    :type="type"
    class="vw-button"
    :data-variant="variant"
    :data-size="size"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
  >
    <span v-if="loading" class="vw-spinner" aria-hidden="true" /><slot />
  </button>
</template>
