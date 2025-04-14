<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: String,
    type: String || Number,
    placeholder: String,
    customClasses: String,
   modelValue: {
     default: ''
   },
required: {
      type: Boolean,
      default: false
    },
    error: String,
  },
  emits: ['update:modelValue']
})
</script>

<template>
  <div :class="customClasses">
    <label class="mb-2.5 block text-black dark:text-white">
      {{ label }}
      <span v-if="required" class="text-meta-1">*</span>
    </label>
    <input :type="type" :placeholder="placeholder"
    :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full placeholder:font-thin  appearance-none border-[1.5px]  text-black border-black bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
      <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>
