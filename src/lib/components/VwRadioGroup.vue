<script setup>
import { useId } from "vue";
defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: String,
  options: { type: Array, default: () => [] },
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <fieldset class="vw-field" :disabled="disabled">
    <legend v-if="label" class="vw-label">{{ label }}</legend>
    <label
      v-for="option in options"
      :key="typeof option === 'object' ? option.value : option"
      class="vw-check-label"
      ><input
        type="radio"
        class="vw-radio"
        :name="id"
        :value="typeof option === 'object' ? option.value : option"
        :checked="
          modelValue === (typeof option === 'object' ? option.value : option)
        "
        @change="
          emit(
            'update:modelValue',
            typeof option === 'object' ? option.value : option,
          )
        "
      />{{ typeof option === "object" ? option.label : option }}</label
    >
  </fieldset>
</template>
