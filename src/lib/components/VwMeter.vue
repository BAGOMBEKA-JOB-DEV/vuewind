<script setup>
import { computed } from "vue";
import { clamp } from "../utils/numbers.js";
const props = defineProps({
  value: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  label: { type: String, default: "Usage" },
});
const percent = computed(() =>
  clamp((props.value / Math.max(1, props.max)) * 100),
);
</script>

<template>
  <div class="vw-field">
    <div class="vw-between">
      <span class="vw-label">{{ label }}</span
      ><span class="vw-muted">{{ value }} / {{ max }}</span>
    </div>
    <meter
      class="vw-meter"
      :value="percent"
      min="0"
      max="100"
      :aria-label="label"
    >
      {{ Math.round(percent) }}%
    </meter>
  </div>
</template>
