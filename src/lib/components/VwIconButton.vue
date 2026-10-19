<script setup>
import Icon from "../Icon.vue";
defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: "plus" },
  variant: { type: String, default: "outline" },
  disabled: Boolean,
});
</script>

<template>
  <button
    type="button"
    class="vw-button vw-icon-button"
    :data-variant="variant"
    :aria-label="label"
    :title="label"
    :disabled="disabled"
  >
    <Icon :name="icon" />
  </button>
</template>
