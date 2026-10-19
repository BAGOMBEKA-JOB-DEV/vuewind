<script setup>
defineProps({ label: { type: String, default: "Loading" } });
</script>

<template>
  <span class="vw-spinner-wrap" role="status"
    ><span class="vw-spinner" aria-hidden="true" /><span class="vw-sr-only">{{
      label
    }}</span></span
  >
</template>
