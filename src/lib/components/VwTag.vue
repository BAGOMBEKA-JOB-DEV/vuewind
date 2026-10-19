<script setup>
import Icon from "../Icon.vue";
defineProps({ removable: Boolean, label: { type: String, required: true } });
const emit = defineEmits(["remove"]);
</script>

<template>
  <span class="vw-tag"
    >{{ label
    }}<button
      v-if="removable"
      type="button"
      :aria-label="`Remove ${label}`"
      @click="emit('remove')"
    >
      <Icon name="close" :size="12" /></button
  ></span>
</template>
