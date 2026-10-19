<script setup>
import { ref } from "vue";
import VwRadioGroup from "../../lib/components/VwRadioGroup.vue";
const plan = ref("Monthly");
</script>
<template>
  <VwRadioGroup
    v-model="plan"
    label="Billing frequency"
    :options="['Monthly', 'Yearly', 'Pay as you go']"
  />
</template>
