<script setup>
import { useId } from "vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: String,
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: "Select an option" },
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label v-if="label" :for="id" class="vw-label">{{ label }}</label
    ><select
      v-bind="$attrs"
      :id="id"
      class="vw-input vw-select"
      :value="modelValue"
      :disabled="disabled"
      @change="
        emit(
          'update:modelValue',
          options.find(
            (o) =>
              String(typeof o === 'object' ? o.value : o) ===
              $event.target.value,
          )?.value ?? $event.target.value,
        )
      "
    >
      <option disabled value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="typeof option === 'object' ? option.value : option"
        :value="typeof option === 'object' ? option.value : option"
      >
        {{ typeof option === "object" ? option.label : option }}
      </option>
    </select>
  </div>
</template>
