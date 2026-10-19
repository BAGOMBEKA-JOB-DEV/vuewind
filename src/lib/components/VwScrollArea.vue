<script setup>
defineProps({
  height: { type: String, default: "240px" },
  label: { type: String, default: "Scrollable content" },
});
</script>

<template>
  <div
    class="vw-scroll-area"
    :style="{ maxHeight: height }"
    tabindex="0"
    role="region"
    :aria-label="label"
  >
    <slot />
  </div>
</template>
