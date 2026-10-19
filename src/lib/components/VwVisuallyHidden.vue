<script setup>
defineProps({ as: { type: String, default: "span" } });
</script>

<template>
  <component :is="as" class="vw-sr-only"><slot /></component>
</template>
