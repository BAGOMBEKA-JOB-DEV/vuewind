<script setup>
import { ref, useId } from "vue";
defineProps({ text: { type: String, required: true } });
const dismissed = ref(false);
const id = useId();
</script>

<template>
  <span
    class="vw-tooltip-wrap"
    :class="{ 'vw-tooltip-dismissed': dismissed }"
    @mouseenter="dismissed = false"
    @focusin="dismissed = false"
    @keydown.esc="dismissed = true"
    ><span :aria-describedby="id" tabindex="0" class="vw-tooltip-trigger"
      ><slot /></span
    ><span :id="id" role="tooltip" class="vw-tooltip">{{ text }}</span></span
  >
</template>
