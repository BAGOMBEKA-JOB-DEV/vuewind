<script setup>
import { ref, onBeforeUnmount } from "vue";
import { copyText } from "../utils/clipboard.js";
import Icon from "../Icon.vue";
const props = defineProps({
  text: { type: String, required: true },
  label: { type: String, default: "Copy" },
});
const message = ref("");
let timer;
async function copy() {
  try {
    await copyText(props.text);
    message.value = "Copied!";
  } catch {
    message.value = "Copy unavailable";
  }
  clearTimeout(timer);
  timer = setTimeout(() => (message.value = ""), 2000);
}
onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <button type="button" class="vw-button" data-variant="outline" @click="copy">
    <Icon :name="message === 'Copied!' ? 'check' : 'copy'" :size="15" /><span
      aria-live="polite"
      >{{ message || label }}</span
    >
  </button>
</template>
