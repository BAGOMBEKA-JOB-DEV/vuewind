<script setup lang="js">
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

// Props: Accepts v-model and label
const props = defineProps({
  label: {
    type: String,
    default: 'Schedule'
  },
  modelValue: {
    type: String, // Expecting date-time string
    default: ''
  }
});

// Emit event for v-model
const emit = defineEmits(['update:modelValue']);

// Refs
const inputElement = ref(null);
const isDatepickerOpen = ref(false);
const isDatepickerClosed = ref(false);
const datepickerInstance = ref(null);

// Initialize flatpickr on mount
onMounted(() => {
  datepickerInstance.value = flatpickr(inputElement.value, {
    mode: 'single',
    static: false,
    monthSelectorType: 'dropdown',
    dateFormat: 'M j, Y h:i K',
    enableTime: true,
    time_24hr: false,
    defaultHour: 12,
    defaultMinute: 0,
    onOpen: () => {
      isDatepickerOpen.value = true;
      isDatepickerClosed.value = true;
    },
    onClose: () => {
      isDatepickerOpen.value = false;
    },
    onChange: (selectedDates) => {
      const newValue = selectedDates[0] ? selectedDates[0].toISOString() : '';
      emit('update:modelValue', newValue); // Update parent component
    }
  });

  // Set default value if provided
  if (props.modelValue) {
    datepickerInstance.value.setDate(props.modelValue, false);
  }
});

// Watch for changes in v-model from parent
watch(() => props.modelValue, (newValue) => {
  if (datepickerInstance.value) {
    datepickerInstance.value.setDate(newValue, false);
  }
});
</script>

<template>
  <div>
    <label class="mb-3 mt-5 block font-medium text-black dark:text-white">
      {{ label }}
    </label>
    <div class="relative">
      <!-- Datepicker Input -->
      <input ref="inputElement"
        class="datepicker w-full placeholder:font-thin text-black border-black border-[1.5px] py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        placeholder="Choose Time & Date" />
    </div>
  </div>
</template>
