<script setup>
import VwKbd from "../../lib/components/VwKbd.vue";
</script>
<template>
  <div class="demo-row">
    <span class="vw-muted">Find anything</span><VwKbd :keys="['⌘', 'K']" /><span
      class="vw-muted"
      >or press</span
    ><VwKbd>/</VwKbd>
  </div>
</template>
