<script setup>
defineProps({ keys: { type: Array, default: () => [] } });
</script>

<template>
  <span class="vw-kbd-group"
    ><kbd v-for="(key, i) in keys" :key="i" class="vw-kbd">{{ key }}</kbd
    ><kbd v-if="!keys.length" class="vw-kbd"><slot /></kbd
  ></span>
</template>
