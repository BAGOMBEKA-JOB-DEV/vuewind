<script setup>
import { computed, ref, watch } from "vue";
const props = defineProps({
  src: String,
  name: { type: String, default: "Anonymous" },
  size: { type: String, default: "md" },
});
const failed = ref(false);
watch(
  () => props.src,
  () => (failed.value = false),
);
const initials = computed(() =>
  props.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase(),
);
</script>

<template>
  <span class="vw-avatar" :data-size="size" role="img" :aria-label="name"
    ><img v-if="src && !failed" :src="src" alt="" @error="failed = true" /><span
      v-else
      aria-hidden="true"
      >{{ initials }}</span
    ></span
  >
</template>
