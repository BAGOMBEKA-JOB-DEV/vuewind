<script setup lang="js">
import { defineProps, defineEmits, computed } from 'vue';

// Define props
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Write SMS',
  },
  modelValue: {
    type: [String, Array],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});

// Define emits
const emit = defineEmits(['update:modelValue']);

// Compute the value to display in the textarea
const displayValue = computed(() => {
  return Array.isArray(props.modelValue) ? props.modelValue.join('\n') : props.modelValue;
});

// Handle input changes
const handleInput = (e) => {
  const value = e.target.value;
  // If input contains multiple lines, treat it as an array
  emit('update:modelValue', value.includes('\n') ? value.split('\n') : value);
};
</script>

<template>
  <div class="mb-0">
    <label for="textarea" class="block mb-2 font-medium text-black dark:text-white">
      {{ label }}
    </label>
    <textarea rows="6" :placeholder="placeholder"
      class="w-full placeholder:font-thin text-black border border-primary-300 py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      :value="displayValue" @input="handleInput"></textarea>
  </div>
</template>
