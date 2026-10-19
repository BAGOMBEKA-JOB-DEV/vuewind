<script setup>
import { useId } from "vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: String, default: "" },
  label: String,
  rows: { type: Number, default: 4 },
  error: String,
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label v-if="label" :for="id" class="vw-label">{{ label }}</label
    ><textarea
      v-bind="$attrs"
      :id="id"
      class="vw-input vw-textarea"
      :value="modelValue"
      :rows="rows"
      :disabled="disabled"
      :aria-invalid="error ? true : undefined"
      :aria-describedby="error ? `${id}-error` : undefined"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" :id="`${id}-error`" class="vw-error">{{ error }}</p>
  </div>
</template>
