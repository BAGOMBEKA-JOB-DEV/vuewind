<script setup>
import { computed, ref, useId } from "vue";
defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "Choose a date" },
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
const today = new Date();
const year = ref(today.getFullYear());
const month = ref(today.getMonth());
const title = computed(() =>
  new Date(year.value, month.value, 1).toLocaleDateString("en", {
    month: "long",
    year: "numeric",
  }),
);
const days = computed(() => {
  const offset = new Date(year.value, month.value, 1).getDay();
  const count = new Date(year.value, month.value + 1, 0).getDate();
  return [
    ...Array(offset).fill(null),
    ...Array.from({ length: count }, (_, i) => i + 1),
  ];
});
const dateValue = (day) =>
  `${year.value}-${String(month.value + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
function shift(n) {
  const d = new Date(year.value, month.value + n, 1);
  year.value = d.getFullYear();
  month.value = d.getMonth();
}
</script>

<template>
  <section class="vw-calendar" :aria-label="label">
    <header class="vw-between">
      <button type="button" aria-label="Previous month" @click="shift(-1)">
        ‹</button
      ><strong :id="id" aria-live="polite">{{ title }}</strong
      ><button type="button" aria-label="Next month" @click="shift(1)">
        ›
      </button>
    </header>
    <div class="vw-calendar-grid" :aria-labelledby="id">
      <span
        v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
        :key="day"
        class="vw-calendar-weekday"
        >{{ day }}</span
      ><template v-for="(day, i) in days" :key="i"
        ><span v-if="!day" /><button
          v-else
          type="button"
          :aria-label="
            new Date(year, month, day).toLocaleDateString('en', {
              dateStyle: 'full',
            })
          "
          :aria-pressed="modelValue === dateValue(day)"
          :class="{ 'is-selected': modelValue === dateValue(day) }"
          @click="emit('update:modelValue', dateValue(day))"
        >
          {{ day }}
        </button></template
      >
    </div>
  </section>
</template>
