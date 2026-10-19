<script setup>
import { ref } from "vue";
import VwRating from "../../lib/components/VwRating.vue";
const rating = ref(4);
</script>
<template>
  <div class="demo-stack">
    <VwRating v-model="rating" label="How was your experience?" />
    <p class="vw-muted" role="status">
      {{ rating }} out of 5. Thanks for sharing.
    </p>
  </div>
</template>
