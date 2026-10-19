<script setup>
import { useId } from "vue";
import { moveFocus } from "../utils/keyboard.js";
defineProps({
  modelValue: { type: String, default: "" },
  items: { type: Array, default: () => [] },
  label: { type: String, default: "Sections" },
});
const emit = defineEmits(["update:modelValue"]);
const id = useId();
</script>

<template>
  <div class="vw-tabs">
    <div
      role="tablist"
      :aria-label="label"
      class="vw-tab-list"
      @keydown="moveFocus($event, $event.currentTarget, { activate: true })"
    >
      <button
        v-for="(item, i) in items"
        :id="`${id}-tab-${i}`"
        :key="item.value"
        type="button"
        role="tab"
        data-vw-item
        :aria-selected="(modelValue || items[0]?.value) === item.value"
        :aria-controls="`${id}-panel`"
        :tabindex="(modelValue || items[0]?.value) === item.value ? 0 : -1"
        @click="emit('update:modelValue', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <div
      :id="`${id}-panel`"
      role="tabpanel"
      :aria-labelledby="`${id}-tab-${Math.max(
        0,
        items.findIndex((i) => i.value === (modelValue || items[0]?.value)),
      )}`"
      tabindex="0"
      class="vw-tab-panel"
    >
      <slot :value="modelValue || items[0]?.value" />
    </div>
  </div>
</template>
