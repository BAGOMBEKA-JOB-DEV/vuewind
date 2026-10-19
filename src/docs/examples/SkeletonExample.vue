<script setup>
import VwSkeleton from "../../lib/components/VwSkeleton.vue";
</script>
<template>
  <div class="demo-row" role="status" aria-label="Loading profile">
    <VwSkeleton width="48px" height="48px" rounded />
    <div class="demo-stack" style="width: 200px">
      <VwSkeleton width="65%" /><VwSkeleton /><VwSkeleton width="80%" />
    </div>
  </div>
</template>
