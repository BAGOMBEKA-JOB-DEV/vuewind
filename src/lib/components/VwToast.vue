<script setup>
import Icon from "../Icon.vue";
defineProps({
  title: { type: String, default: "All done" },
  description: String,
  dismissible: { type: Boolean, default: true },
});
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="vw-toast" role="status">
    <span class="vw-toast-icon"><Icon name="check" :size="17" /></span>
    <div>
      <strong>{{ title }}</strong>
      <p v-if="description">{{ description }}</p>
    </div>
    <button
      v-if="dismissible"
      type="button"
      aria-label="Dismiss notification"
      @click="emit('close')"
    >
      <Icon name="close" :size="15" />
    </button>
  </div>
</template>
