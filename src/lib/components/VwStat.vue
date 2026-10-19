<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  change: String,
  trend: { type: String, default: "up" },
});
</script>

<template>
  <div class="vw-stat">
    <p class="vw-stat-label">{{ label }}</p>
    <div class="vw-stat-value">
      {{ value
      }}<span v-if="change" class="vw-stat-change" :data-trend="trend"
        >{{ trend === "up" ? "↗" : "↘" }} {{ change }}</span
      >
    </div>
    <p v-if="$slots.default" class="vw-muted"><slot /></p>
  </div>
</template>
