<script setup>
defineProps({
  width: { type: String, default: "100%" },
  height: { type: String, default: "1rem" },
  rounded: Boolean,
});
</script>

<template>
  <span
    class="vw-skeleton"
    :style="{ width, height, borderRadius: rounded ? '50%' : undefined }"
    aria-hidden="true"
  />
</template>
