<script setup>
import { computed } from "vue";
import VwAvatar from "./VwAvatar.vue";
const props = defineProps({
  items: { type: Array, default: () => [] },
  max: { type: Number, default: 4 },
});
const visible = computed(() => props.items.slice(0, Math.max(0, props.max)));
</script>

<template>
  <div class="vw-avatar-group" aria-label="Team members">
    <VwAvatar
      v-for="(person, i) in visible"
      :key="person.id ?? i"
      :name="person.name"
      :src="person.src"
    /><span
      v-if="items.length > visible.length"
      class="vw-avatar vw-avatar-more"
      :aria-label="`${items.length - visible.length} more members`"
      >+{{ items.length - visible.length }}</span
    >
  </div>
</template>
