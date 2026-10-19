<script setup>
import { useId } from "vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "Date" },
  min: String,
  max: String,
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label class="vw-label" :for="id">{{ label }}</label
    ><input
      v-bind="$attrs"
      :id="id"
      class="vw-input"
      type="date"
      :value="modelValue"
      :min="min"
      :max="max"
      :disabled="disabled"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
