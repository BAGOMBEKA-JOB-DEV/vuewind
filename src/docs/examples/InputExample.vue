<script setup>
import { ref } from "vue";
import VwInput from "../../lib/components/VwInput.vue";
const email = ref("");
</script>
<template>
  <VwInput
    v-model="email"
    label="Email address"
    type="email"
    placeholder="you@company.com"
    hint="We will only send the good stuff."
    style="width: 320px; max-width: 100%"
  />
</template>
