<script setup>
import { useId } from "vue";
defineProps({
  modelValue: { type: Number, default: 50 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  label: { type: String, default: "Value" },
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <div class="vw-between">
      <label :for="id" class="vw-label">{{ label }}</label
      ><output :for="id" class="vw-muted">{{ modelValue }}</output>
    </div>
    <input
      :id="id"
      class="vw-slider"
      type="range"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      @input="emit('update:modelValue', Number($event.target.value))"
    />
  </div>
</template>
