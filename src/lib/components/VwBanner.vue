<script setup>
import Icon from "../Icon.vue";
defineProps({ dismissible: Boolean });
const emit = defineEmits(["close"]);
</script>

<template>
  <aside class="vw-banner">
    <span><slot /></span
    ><button
      v-if="dismissible"
      type="button"
      aria-label="Dismiss announcement"
      @click="emit('close')"
    >
      <Icon name="close" :size="15" />
    </button>
  </aside>
</template>
