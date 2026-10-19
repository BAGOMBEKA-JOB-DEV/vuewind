<script setup>
import { moveFocus } from "../utils/keyboard.js";
defineProps({
  modelValue: { type: String, default: "" },
  items: { type: Array, default: () => [] },
  label: { type: String, default: "Options" },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    class="vw-toggle-group"
    role="group"
    :aria-label="label"
    @keydown="moveFocus($event, $event.currentTarget)"
  >
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      class="vw-button"
      data-vw-item
      :data-variant="modelValue === item.value ? 'secondary' : 'ghost'"
      :aria-pressed="modelValue === item.value"
      @click="emit('update:modelValue', item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
