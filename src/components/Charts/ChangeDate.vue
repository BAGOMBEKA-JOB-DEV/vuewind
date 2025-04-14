<template>
  <div class="flex items-center space-x-4">
    <div class="relative flex items-center">
      <transition name="fade">
        <div v-if="showInputs" class="flex items-center space-x-2">
          <input
            v-model="startDate"
            ref="startDatePicker"
            placeholder="Select Start Date"
            readonly
            class="py-2 lg:px-8 xl:px-10 datepicker w-full border-[1.5px] border-black bg-transparent px-5 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary cursor-pointer"
          />
          <input
            v-model="endDate"
            ref="endDatePicker"
            placeholder="Select End Date"
            readonly
            class="py-2 lg:px-8 xl:px-10 datepicker w-full border-[1.5px] border-black bg-transparent px-5 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary cursor-pointer"
          />
        </div>
      </transition>
      <button
        @click="toggleInputs"
        :class="{
          'ml-0': !showInputs,
          'ml-5': showInputs,
          'transform duration-100': showInputs,
        }"
        class="px-8 py-3 bg-secondary-200 text-black flex gap-2"
      >
        <span class="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 8.5V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V8.5H21ZM7.25 15C6.55964 15 6 15.5596 6 16.25C6 16.9404 6.55964 17.5 7.25 17.5C7.94036 17.5 8.5 16.9404 8.5 16.25C8.5 15.5596 7.94036 15 7.25 15ZM12 15C11.3096 15 10.75 15.5596 10.75 16.25C10.75 16.9404 11.3096 17.5 12 17.5C12.6904 17.5 13.25 16.9404 13.25 16.25C13.25 15.5596 12.6904 15 12 15ZM7.25 10.5C6.55964 10.5 6 11.0596 6 11.75C6 12.4404 6.55964 13 7.25 13C7.94036 13 8.5 12.4404 8.5 11.75C8.5 11.0596 7.94036 10.5 7.25 10.5ZM12 10.5C11.3096 10.5 10.75 11.0596 10.75 11.75C10.75 12.4404 11.3096 13 12 13C12.6904 13 13.25 12.4404 13.25 11.75C13.25 11.0596 12.6904 10.5 12 10.5ZM16.75 10.5C16.0596 10.5 15.5 11.0596 15.5 11.75C15.5 12.4404 16.0596 13 16.75 13C17.4404 13 18 12.4404 18 11.75C18 11.0596 17.4404 10.5 16.75 10.5ZM17.75 3C19.5449 3 21 4.45507 21 6.25V7H3V6.25C3 4.45507 4.45507 3 6.25 3H17.75Z"
              fill="#2A2A45"
            />
          </svg>
        </span>
        {{ showInputs ? 'Change Date Range' : 'Select Date Range' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const showInputs = ref(false)
const startDatePicker = ref<HTMLInputElement | null>(null)
const endDatePicker = ref<HTMLInputElement | null>(null)
const startDate = ref('')
const endDate = ref('')

let startPickr: any = null
let endPickr: any = null

const initializeDatePickers = async () => {
  if (showInputs.value) {
    await nextTick()

    if (startDatePicker.value) {
      startPickr = flatpickr(startDatePicker.value, {
        mode: 'single',
        dateFormat: 'M j, Y',
        onChange: (selectedDates) => {
          if (selectedDates[0]) {
            startDate.value = selectedDates[0].toLocaleDateString()
            // Update end date min date
            if (endPickr) {
              endPickr.set('minDate', selectedDates[0])
            }
          }
        },
      })
    }

    if (endDatePicker.value) {
      endPickr = flatpickr(endDatePicker.value, {
        mode: 'single',
        dateFormat: 'M j, Y',
        onChange: (selectedDates) => {
          if (selectedDates[0]) {
            endDate.value = selectedDates[0].toLocaleDateString()
          }
        },
      })
    }
  }
}

const toggleInputs = async () => {
  showInputs.value = !showInputs.value
  if (showInputs.value) {
    await initializeDatePickers()
  } else {
    // Destroy flatpickr instances when hiding inputs
    if (startPickr) {
      startPickr.destroy()
      startPickr = null
    }
    if (endPickr) {
      endPickr.destroy()
      endPickr = null
    }
  }
}

// Clean up on component unmount
onMounted(() => {
  return () => {
    if (startPickr) startPickr.destroy()
    if (endPickr) endPickr.destroy()
  }
})
</script>

<style scoped>
/* Add any custom styles for the date picker if needed */
:deep(.flatpickr-calendar) {
  background: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
</style>
