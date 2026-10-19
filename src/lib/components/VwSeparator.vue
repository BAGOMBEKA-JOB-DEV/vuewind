<script setup>
defineProps({ label: String, vertical: Boolean });
</script>

<template>
  <div
    class="vw-separator"
    :class="{ 'vw-separator-vertical': vertical }"
    role="separator"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
  >
    <span v-if="label">{{ label }}</span>
  </div>
</template>
