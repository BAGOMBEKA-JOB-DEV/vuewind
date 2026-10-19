<script setup>
import Icon from "../Icon.vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "Search" },
  placeholder: { type: String, default: "Search anything…" },
});
const emit = defineEmits(["update:modelValue", "search"]);
</script>

<template>
  <form
    role="search"
    class="vw-search-input"
    @submit.prevent="emit('search', modelValue)"
  >
    <Icon name="search" /><input
      v-bind="$attrs"
      type="search"
      :aria-label="label"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    /><button
      v-if="modelValue"
      type="button"
      aria-label="Clear search"
      @click="emit('update:modelValue', '')"
    >
      <Icon name="close" :size="14" />
    </button>
  </form>
</template>
