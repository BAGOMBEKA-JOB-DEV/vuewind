<script setup>
import { useId } from "vue";
defineProps({
  modelValue: { type: Number, default: 0 },
  max: { type: Number, default: 5 },
  label: { type: String, default: "Rating" },
  readonly: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <fieldset class="vw-rating" :aria-label="label" :disabled="readonly">
    <legend class="vw-sr-only">{{ label }}</legend>
    <label v-for="n in max" :key="n" :class="{ 'is-selected': n <= modelValue }"
      ><input
        type="radio"
        :name="id"
        :value="n"
        :checked="modelValue === n"
        :aria-label="`${n} out of ${max} stars`"
        @change="emit('update:modelValue', n)"
      /><span aria-hidden="true">★</span></label
    >
  </fieldset>
</template>
