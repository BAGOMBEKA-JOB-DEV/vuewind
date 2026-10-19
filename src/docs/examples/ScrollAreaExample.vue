<script setup>
import VwScrollArea from "../../lib/components/VwScrollArea.vue";
</script>
<template>
  <VwScrollArea height="160px" label="Component names" style="width: 280px"
    ><div
      v-for="name in [
        'Accordion',
        'Alert',
        'Avatar',
        'Badge',
        'Button',
        'Calendar',
        'Card',
        'Checkbox',
        'Dialog',
        'Input',
      ]"
      :key="name"
      class="vw-scroll-row"
    >
      {{ name }}
    </div></VwScrollArea
  >
</template>
