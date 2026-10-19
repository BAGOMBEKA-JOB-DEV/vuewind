<script setup>
import Icon from "../Icon.vue";
defineProps({ title: String, variant: { type: String, default: "info" } });
</script>

<template>
  <div
    class="vw-alert"
    :data-variant="variant"
    :role="variant === 'danger' ? 'alert' : 'status'"
  >
    <Icon :name="variant === 'success' ? 'check' : 'info'" />
    <div>
      <strong v-if="title">{{ title }}</strong>
      <div><slot /></div>
    </div>
  </div>
</template>
