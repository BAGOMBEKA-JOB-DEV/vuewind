<template>
    <div class="relative w-full">
      <!-- Label -->
      <label v-if="label" class="mb-2.5 block text-black dark:text-white">{{ label }}</label>
  
      <!-- Search Input -->
      <div class="flex flex-wrap items-center gap-2 p-3 border-[1.5px] border-black dark:border-primary-300 w-full dark:bg-transparent">
        <!-- Selected Chips -->
        <template v-for="(option, index) in selectedOptions" :key="option">
          <div class="flex items-center px-3 py-1 bg-secondary-200 text-[15px] rounded-full text-primary-900">
            <svg
              class="w-6 h-6 bg-secondary-300 p-1 text-black font-bold border border-secondary-300 shadow-2xl mr-1 rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {{ option }}
            <button @click.stop="removeOption(index)" class="ml-2 text-primary-900 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </template>
  
        <!-- Search Input -->
        <input
          v-model="searchQuery"
          @input="searchOptions"
          @keyup.enter="addNewOption"
          type="text"
          placeholder="Search or add numbers separated by commas"
          class="flex-grow text-black bg-transparent outline-none"
        />
      </div>
  
      <!-- Search Results -->
      <ul v-if="searchResults.length" class="absolute z-30 w-full mt-1 bg-white rounded-[3px] shadow-lg max-h-48 overflow-auto">
        <li
          v-for="option in searchResults"
          :key="option"
          @click.stop="selectOption(option)"
          class="flex justify-between items-center p-4 text-[15px] cursor-pointer hover:bg-secondary-300 hover:text-black"
        >
          <span class="text-gray-900">{{ option }}</span>
          <svg
            class="w-6 h-6 bg-gray-100 text-black p-1 border border-gray-100 shadow-2xl rounded-xl"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";

// Props
const props = defineProps({
  label: String,
  options: Array,
  defaultText: {
    type: String,
    required: false,
  },
});

// Reactive variables
const searchQuery = ref("");
const selectedOptions = ref([]);
const searchResults = ref([]);

// Methods
const searchOptions = () => {
  if (searchQuery.value.trim()) {
    searchResults.value = props.options.filter(
      (option) =>
        !selectedOptions.value.includes(option) &&
        option.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    searchResults.value = [];
  }
};

const selectOption = (option) => {
  if (!selectedOptions.value.includes(option)) {
    selectedOptions.value.push(option);
    searchQuery.value = ""; // Clear input after selecting an option
    searchResults.value = []; // Clear search results
  }
};

const removeOption = (index) => {
  selectedOptions.value.splice(index, 1);
};

const addNewOption = () => {
  // Step 1: Trim and split the input string if there are commas, or treat it as a single input
  const newOptions = searchQuery.value.trim().split(',').map(option => option.trim()); // Split by commas and remove extra spaces

  // Step 2: Append the new options to the selectedOptions array
  newOptions.forEach((newOption) => {
    // Ensure the option is not empty and is not already in selectedOptions
    if (newOption && !selectedOptions.value.includes(newOption)) {
      selectedOptions.value.push(newOption); // Add as separate option
    }
  });

  // Step 3: Clear the input field and reset search results after adding the options
  searchQuery.value = ""; // Clear the input field
  searchResults.value = []; // Clear the search results
};





  </script>
  