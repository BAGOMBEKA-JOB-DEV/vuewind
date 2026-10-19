<script setup>
defineProps({ modelValue: Boolean, disabled: Boolean, label: String });
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <button
    type="button"
    class="vw-button vw-toggle"
    :data-variant="modelValue ? 'secondary' : 'outline'"
    :aria-pressed="modelValue"
    :aria-label="label"
    :disabled="disabled"
    @click="emit('update:modelValue', !modelValue)"
  >
    <slot />
  </button>
</template>
