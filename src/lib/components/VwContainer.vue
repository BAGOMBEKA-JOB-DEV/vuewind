<script setup>
defineProps({
  size: { type: String, default: "md" },
  as: { type: String, default: "div" },
});
</script>

<template>
  <component :is="as" class="vw-container" :data-size="size"
    ><slot
  /></component>
</template>
