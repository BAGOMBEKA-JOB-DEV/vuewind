<script setup>
import VwCard from "../../lib/components/VwCard.vue";
import VwButton from "../../lib/components/VwButton.vue";
</script>
<template>
  <VwCard
    title="Make room for your next idea."
    description="A small space for something great."
    style="max-width: 380px"
    ><p>
      Your components, your conventions. Start with a foundation that feels like
      yours.
    </p>
    <template #footer
      ><VwButton size="sm">Create project</VwButton
      ><span class="vw-muted">Free to make it yours.</span></template
    ></VwCard
  >
</template>
