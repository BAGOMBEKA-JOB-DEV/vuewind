<script setup>
defineProps({ items: { type: Array, default: () => [] }, ordered: Boolean });
</script>

<template>
  <component :is="ordered ? 'ol' : 'ul'" class="vw-list"
    ><li v-for="(item, i) in items" :key="item.id ?? i">
      <slot :item="item" :index="i">{{
        typeof item === "string" ? item : item.label
      }}</slot>
    </li></component
  >
</template>
