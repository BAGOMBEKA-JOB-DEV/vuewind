<script setup>
import { useId } from "vue";
defineProps({ modelValue: Boolean, label: String, disabled: Boolean });
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <label class="vw-check-label" :for="id"
    ><button
      :id="id"
      type="button"
      class="vw-switch"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :aria-label="label || $attrs['aria-label']"
      @click="emit('update:modelValue', !modelValue)"
    >
      <span /></button
    ><span v-if="label">{{ label }}</span></label
  >
</template>
