<script setup>
import { ref } from "vue";
import VwPagination from "../../lib/components/VwPagination.vue";
const page = ref(1);
</script>
<template>
  <div class="demo-stack">
    <VwPagination v-model="page" :total="8" />
    <p class="vw-muted" role="status">Page {{ page }} of 8</p>
  </div>
</template>
