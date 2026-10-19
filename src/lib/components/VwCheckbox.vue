<script setup>
defineProps({ modelValue: Boolean, label: String, disabled: Boolean });
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="vw-check-label" :class="{ 'vw-disabled': disabled }"
    ><input
      class="vw-checkbox"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', $event.target.checked)"
    /><span
      ><slot>{{ label }}</slot></span
    ></label
  >
</template>
