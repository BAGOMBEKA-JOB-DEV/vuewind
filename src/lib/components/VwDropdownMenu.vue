<script setup>
import { ref } from "vue";
import { useDisclosure } from "../utils/disclosure.js";
import { moveFocus } from "../utils/keyboard.js";
import Icon from "../Icon.vue";
defineProps({
  label: { type: String, default: "Options" },
  items: { type: Array, default: () => [] },
});
const emit = defineEmits(["select"]);
const element = ref(null);
const { close } = useDisclosure(element);
const choose = (item) => {
  emit("select", item);
  close();
  element.value?.querySelector("summary")?.focus();
};
</script>

<template>
  <details ref="element" class="vw-popover">
    <summary class="vw-button" data-variant="outline">
      {{ label }}<Icon name="down" :size="14" />
    </summary>
    <div
      class="vw-popover-panel vw-menu-panel"
      @keydown="moveFocus($event, $event.currentTarget)"
    >
      <button
        v-for="(item, i) in items"
        :key="item.value ?? i"
        type="button"
        data-vw-item
        :disabled="item.disabled"
        @click="choose(item)"
      >
        <Icon v-if="item.icon" :name="item.icon" :size="16" />{{ item.label }}
      </button>
    </div>
  </details>
</template>
