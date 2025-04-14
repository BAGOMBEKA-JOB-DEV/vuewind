
<script lang="js" setup>
import { ref, watch } from 'vue';

// Define props for label, options, default text, and v-model binding
const props = defineProps({
  label: String,
  options: Array,
  defaultText: {
    type: String,
    required: false,
  },
  modelValue: {
    required: false,
  },
});

// Emit function for v-model
const emit = defineEmits(['update:modelValue']);

// Reactive variables
const dropdownOpen = ref(false);
const selectedOption = ref(props.modelValue || null);

// Watch for external changes to modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    selectedOption.value = newValue;
  }
);

// Methods
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option; // Update the selected option
  dropdownOpen.value = false; // Close the dropdown
  emit('update:modelValue', option); // Emit the change to the parent
};
</script>


<template>
  <div class="relative w-full">
    <!-- Dropdown Label -->
    <label v-if="label" class="mb-2.5 block text-black dark:text-white">{{ label }}</label>

    <!-- Dropdown Toggle -->
    <div
      @click="toggleDropdown"
      class="flex items-center justify-between dark:bg-transparent active:bg-white p-3 border-[1.5px] border-black dark:border-primary-300 cursor-pointer w-full"

    >
      <span
        class="dark:text-gray-400"
        :class="{
          'text-[15px] text-gray-500 font-thin ': !selectedOption && defaultText, // Style the default text
          'font-lightbold text-[15px] text-primary-900': selectedOption // Apply styles for selectedOption
        }"
      >
        {{ selectedOption || defaultText }}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 transition-transform text-black"
        :class="{ 'rotate-180': dropdownOpen }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9l3.75 3.75L15.75 9" />
      </svg>
    </div>

    <!-- Dropdown Options -->
    <ul
      v-if="dropdownOpen"
      class="absolute z-30 xl:w-full max-h-40 overflow-y-auto text-sm text-black dark:text-white w-full mt-1 bg-white 
       rounded-[3px] focus:border-primary active:border-primary dark:border-form-strokedark
        dark:bg-form-input dark:focus:border-primary shadow-lg"
    >
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        class="p-4 text-[15px] cursor-pointer hover:bg-secondary-300 hover:text-black"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>
