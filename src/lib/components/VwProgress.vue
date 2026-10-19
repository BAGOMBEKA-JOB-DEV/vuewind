<script setup>
import { computed } from "vue";
import { clamp } from "../utils/numbers.js";
const props = defineProps({
  value: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  label: { type: String, default: "Progress" },
  showValue: Boolean,
});
const percent = computed(() =>
  clamp((props.value / Math.max(1, props.max)) * 100),
);
</script>

<template>
  <div class="vw-field">
    <div v-if="showValue" class="vw-between">
      <span class="vw-label">{{ label }}</span
      ><span class="vw-muted">{{ Math.round(percent) }}%</span>
    </div>
    <div
      class="vw-progress"
      role="progressbar"
      :aria-label="label"
      :aria-valuenow="percent"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span :style="{ width: `${percent}%` }" />
    </div>
  </div>
</template>
