<script setup>
defineProps({
  label: { type: String, default: "Related actions" },
  vertical: Boolean,
});
</script>

<template>
  <div
    class="vw-button-group"
    role="group"
    :aria-label="label"
    :class="{ 'vw-button-group-vertical': vertical }"
  >
    <slot />
  </div>
</template>
