<script setup>
import { ref } from "vue";
import VwBanner from "../../lib/components/VwBanner.vue";
const visible = ref(true);
</script>
<template>
  <VwBanner v-if="visible" dismissible @close="visible = false"
    >A fresh foundation. The next chapter of Vuewind is here.</VwBanner
  ><span v-else class="vw-muted">Announcement dismissed.</span>
</template>
