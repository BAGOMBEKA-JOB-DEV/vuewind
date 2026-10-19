<script setup>
import VwBadge from "../../lib/components/VwBadge.vue";
</script>
<template>
  <div class="demo-row">
    <VwBadge dot variant="success">Available</VwBadge><VwBadge>Draft</VwBadge
    ><VwBadge variant="info">In review</VwBadge
    ><VwBadge variant="warning">Pending</VwBadge
    ><VwBadge variant="danger">Archived</VwBadge>
  </div>
</template>
