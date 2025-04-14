<template>
  <div class="relative w-full">
    <!-- Dropdown Label -->
    <label v-if="label" class="mb-2.5 block text-black dark:text-white">{{ label }}</label>

    <!-- Combined Input and Dropdown Trigger -->
    <div class="relative">
      <input
        v-model="searchTerm"
        type="text"
        :placeholder="defaultText"
        @focus="dropdownOpen = true"
        @click.stop
        class="w-full p-3 text-[15px] border-[1.5px] border-black dark:border-primary-300 cursor-pointer dark:bg-transparent"
        :class="{
          'text-gray-500 font-thin': !selectedOption,
          'font-lightbold text-primary-900': selectedOption
        }"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 transition-transform text-black absolute right-3 top-1/2 transform -translate-y-1/2"
        :class="{ 'rotate-180': dropdownOpen }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9l3.75 3.75L15.75 9" />
      </svg>
    </div>

    <!-- Dropdown Options -->
    <div v-if="dropdownOpen" class="absolute z-30 w-full bg-white shadow-lg rounded-[3px] mt-1">
      <ul class="max-h-40 overflow-y-auto text-sm text-black dark:text-white">
        <li
          v-for="(option, index) in filteredOptions"
          :key="optionKey(option, index)"
          @click="selectOption(option)"
          class="p-4 text-[15px] cursor-pointer hover:bg-secondary-300 hover:text-black"
        >
          {{ optionLabel(option) }}
        </li>

        <li v-if="filteredOptions.length === 0" class="p-4 text-[15px] text-gray-500 text-center">
          No options found
        </li>
      </ul>
    </div>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted, defineEmits } from 'vue'

const props = defineProps({
  label: String,
  options: Array,
  defaultText: {
    type: String,
    required: false,
    default: 'Select an option',
  },
  modelValue: {
    type: [String, Object],
    required: false,
  },
  valueKey: {
    type: String,
    default: 'currency_name',
  },
  error: String, 
})

const emit = defineEmits(['update:modelValue'])

const dropdownOpen = ref(false)
const selectedOption = ref(props.modelValue || null)
const searchTerm = ref('')
const originalOptions = ref(props.options || [])

const filteredOptions = computed(() => {
  if (!searchTerm.value) return originalOptions.value

  return originalOptions.value.filter((option) => {
    const label = optionLabel(option)
    return label.toLowerCase().includes(searchTerm.value.toLowerCase())
  })
})

watch(
  () => props.modelValue,
  (newValue) => {
    selectedOption.value = newValue
    if (newValue) {
      searchTerm.value = optionLabel(newValue)
    }
  },
)

watch(
  () => props.options,
  (newOptions) => {
    originalOptions.value = newOptions || []
  },
)

const selectOption = (option) => {
  selectedOption.value = optionLabel(option)
  searchTerm.value = optionLabel(option)
  dropdownOpen.value = false
  emit('update:modelValue', option)
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    dropdownOpen.value = false
    if (selectedOption.value) {
      searchTerm.value = optionLabel(selectedOption.value)
    } else {
      searchTerm.value = ''
    }
  }
}

const optionLabel = (option) => {
  return typeof option === 'string' ? option : option[props.valueKey]
}

const optionKey = (option, index) => {
  return option.code + '-' + index
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  if (props.modelValue) {
    searchTerm.value = optionLabel(props.modelValue)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
