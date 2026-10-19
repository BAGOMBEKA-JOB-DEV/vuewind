<script setup>
defineProps({ label: { type: String, default: "Show more" }, open: Boolean });
const emit = defineEmits(["toggle"]);
</script>

<template>
  <details
    class="vw-collapsible"
    :open="open"
    @toggle="emit('toggle', $event.target.open)"
  >
    <summary>{{ label }}</summary>
    <div><slot /></div>
  </details>
</template>
