
<script setup lang="js">
import { ref, onMounted } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
})

const datepicker = ref(null)
onMounted(() => {
  if (datepicker.value) {
    flatpickr(datepicker.value, {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j, Y',

    })
  }
})
</script>
<template>
  <div>
    <div class="relative">
      <input
        ref="datepicker"
      class="md:w-[12rem] py-3 lg:px-8 xl:px-2 datepicker w-full border-[1.5px] border-black bg-transparent px-5 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary mt-3 placeholder:text-left ps-3 p-2.5
      "
  :placeholder="placeholder"

        data-class="flatpickr-right"
      />
    </div>
  </div>
</template>
