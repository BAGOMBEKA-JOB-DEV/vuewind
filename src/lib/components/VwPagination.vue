<script setup>
import { clamp, pageRange } from "../utils/numbers.js";
defineProps({
  modelValue: { type: Number, default: 1 },
  total: { type: Number, default: 1 },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <nav aria-label="Pagination" class="vw-pagination">
    <button
      type="button"
      class="vw-button"
      data-variant="outline"
      :disabled="modelValue <= 1"
      @click="
        emit('update:modelValue', clamp(modelValue - 1, 1, Math.max(1, total)))
      "
    >
      Previous</button
    ><button
      v-for="page in pageRange(modelValue, total)"
      :key="page"
      type="button"
      class="vw-button vw-page-button"
      :data-variant="modelValue === page ? 'primary' : 'ghost'"
      :aria-current="modelValue === page ? 'page' : undefined"
      :aria-label="`Page ${page}`"
      @click="emit('update:modelValue', page)"
    >
      {{ page }}</button
    ><button
      type="button"
      class="vw-button"
      data-variant="outline"
      :disabled="modelValue >= total"
      @click="
        emit('update:modelValue', clamp(modelValue + 1, 1, Math.max(1, total)))
      "
    >
      Next
    </button>
  </nav>
</template>
