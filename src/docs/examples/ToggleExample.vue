<script setup>
import { ref } from "vue";
import VwToggle from "../../lib/components/VwToggle.vue";
import Icon from "../../lib/Icon.vue";
const saved = ref(false);
</script>
<template>
  <VwToggle v-model="saved" label="Save to favorites"
    ><Icon name="heart" />{{ saved ? "Saved" : "Save for later" }}</VwToggle
  >
</template>
