<script setup>
import { useId } from "vue";
import { clamp } from "../utils/numbers.js";
defineProps({
  modelValue: { type: Number, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  label: { type: String, default: "Quantity" },
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label class="vw-label" :for="id">{{ label }}</label>
    <div class="vw-number">
      <button
        type="button"
        :aria-label="`Decrease ${label}`"
        :disabled="modelValue <= min"
        @click="emit('update:modelValue', clamp(modelValue - step, min, max))"
      >
        −</button
      ><input
        :id="id"
        type="number"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        @change="
          emit('update:modelValue', clamp($event.target.value, min, max))
        "
      /><button
        type="button"
        :aria-label="`Increase ${label}`"
        :disabled="modelValue >= max"
        @click="emit('update:modelValue', clamp(modelValue + step, min, max))"
      >
        +
      </button>
    </div>
  </div>
</template>
