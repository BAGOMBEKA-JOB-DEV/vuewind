<script setup>
defineProps({
  items: { type: Array, default: () => [] },
  active: String,
  label: { type: String, default: "Main navigation" },
});
</script>

<template>
  <nav :aria-label="label" class="vw-navigation">
    <a
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      :aria-current="active === item.href ? 'page' : undefined"
      >{{ item.label }}</a
    >
  </nav>
</template>
