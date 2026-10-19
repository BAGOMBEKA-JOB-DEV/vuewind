<script setup>
import { computed } from "vue";
const props = defineProps({
  level: { type: Number, default: 2 },
  size: { type: String, default: "md" },
});
const tag = computed(() => `h${Math.min(6, Math.max(1, props.level))}`);
</script>

<template>
  <component :is="tag" class="vw-heading" :data-size="size"><slot /></component>
</template>
