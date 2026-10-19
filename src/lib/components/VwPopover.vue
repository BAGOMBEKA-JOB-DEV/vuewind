<script setup>
import { ref } from "vue";
import { useDisclosure } from "../utils/disclosure.js";
defineProps({ label: { type: String, default: "More information" } });
const element = ref(null);
useDisclosure(element);
</script>

<template>
  <details ref="element" class="vw-popover">
    <summary class="vw-button" data-variant="outline">{{ label }}</summary>
    <div class="vw-popover-panel"><slot /></div>
  </details>
</template>
