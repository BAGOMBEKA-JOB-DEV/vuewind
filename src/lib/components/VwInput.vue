<script setup>
import { useId } from "vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: String,
  hint: String,
  error: String,
  type: { type: String, default: "text" },
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label v-if="label" :for="id" class="vw-label">{{ label }}</label
    ><input
      v-bind="$attrs"
      :id="id"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      class="vw-input"
      :aria-invalid="error ? true : undefined"
      :aria-describedby="error || hint ? `${id}-help` : undefined"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <p
      v-if="error || hint"
      :id="`${id}-help`"
      class="vw-field-hint"
      :class="{ 'vw-error': error }"
    >
      {{ error || hint }}
    </p>
  </div>
</template>
