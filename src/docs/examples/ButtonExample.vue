<script setup>
import VwButton from "../../lib/components/VwButton.vue";
import Icon from "../../lib/Icon.vue";
</script>
<template>
  <div class="demo-row">
    <VwButton>Get started <Icon name="right" :size="15" /></VwButton
    ><VwButton variant="secondary">Secondary</VwButton
    ><VwButton variant="outline">Outline</VwButton
    ><VwButton variant="ghost">Ghost</VwButton
    ><VwButton variant="danger">Delete</VwButton>
  </div>
</template>
