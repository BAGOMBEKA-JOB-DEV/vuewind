<script setup>
defineProps({ ratio: { type: Number, default: 16 / 9 } });
</script>

<template>
  <div class="vw-aspect" :style="{ aspectRatio: Math.max(0.01, ratio) }">
    <slot />
  </div>
</template>
