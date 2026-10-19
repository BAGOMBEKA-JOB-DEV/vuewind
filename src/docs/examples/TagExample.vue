<script setup>
import { ref } from "vue";
import VwTag from "../../lib/components/VwTag.vue";
const tags = ref(["Design", "Vue", "Open source"]);
</script>
<template>
  <div class="demo-row">
    <VwTag
      v-for="tag in tags"
      :key="tag"
      :label="tag"
      removable
      @remove="tags = tags.filter((t) => t !== tag)"
    /><span v-if="!tags.length" class="vw-muted"
      >All clear. Refresh to start again.</span
    >
  </div>
</template>
