<script setup>
import { useId } from "vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: String, default: "" },
  label: String,
  prefix: String,
  suffix: String,
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label v-if="label" :for="id" class="vw-label">{{ label }}</label>
    <div class="vw-input-group">
      <span v-if="prefix" :id="`${id}-prefix`">{{ prefix }}</span
      ><input
        v-bind="$attrs"
        :id="id"
        :value="modelValue"
        :aria-describedby="
          [prefix ? `${id}-prefix` : '', suffix ? `${id}-suffix` : '']
            .filter(Boolean)
            .join(' ') || undefined
        "
        @input="emit('update:modelValue', $event.target.value)"
      /><span v-if="suffix" :id="`${id}-suffix`">{{ suffix }}</span>
    </div>
  </div>
</template>
