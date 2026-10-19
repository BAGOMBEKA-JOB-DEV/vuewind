<script setup>
import { ref } from "vue";
import VwSwitch from "../../lib/components/VwSwitch.vue";
const enabled = ref(true);
const quiet = ref(false);
</script>
<template>
  <div class="demo-stack">
    <VwSwitch v-model="enabled" label="Email notifications" /><VwSwitch
      v-model="quiet"
      label="Do not disturb"
    />
  </div>
</template>
