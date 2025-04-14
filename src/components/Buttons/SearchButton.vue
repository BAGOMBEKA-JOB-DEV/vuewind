<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Search',
  },
  placeholder: {
    type: String,
    default: 'Type to search...',
  },
  customClasses: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['search'])

const inputValue = ref('')
const originalData = ref(null)  // Store the original data to restore when cleared

// Emit search query when the user clicks the search button (form submit)
const onSearch = () => {
  emit('search', inputValue.value.trim())
}

// Watch for when the input value is cleared to reset the data
const onInputChange = () => {
  if (inputValue.value.trim() === '') {
    // If the search input is cleared, restore the original data
    emit('search', '') // Reset the data to the original (or you can pass `null` if needed)
  }
}
</script>

<template>
  <div :class="`w-full flex ${customClasses}`">
    <form @submit.prevent="onSearch"
      class="flex w-full max-w-2xl space-x-2 bg-white border border-gray-300 rounded-lg shadow-sm p-2">
      <input required v-model="inputValue" @input="onInputChange" type="text" :placeholder="placeholder"
        class="flex-grow px-4 py-2 p-3 text-normal text-gray-700 placeholder-gray-400 border-none focus:outline-none focus:ring-1 focus:ring-secondary-500 rounded-md" />
      <button type="submit"
        class="flex items-center px-4 py-2 text-sm font-medium text-white bg-secondary-400 rounded-md hover:bg-secondary-700 transition duration-200">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0Z" />
        </svg>
        Search
      </button>
    </form>
  </div>
</template>
