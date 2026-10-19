<script setup>
import { ref } from "vue";
import VwSearchInput from "../../lib/components/VwSearchInput.vue";
const query = ref("");
</script>
<template>
  <div class="demo-stack" style="width: 320px; max-width: 100%">
    <VwSearchInput
      v-model="query"
      placeholder="Find your next component…"
    /><span v-if="query" class="vw-muted">Searching for “{{ query }}”</span>
  </div>
</template>
