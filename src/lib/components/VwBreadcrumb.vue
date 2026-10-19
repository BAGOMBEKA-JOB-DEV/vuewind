<script setup>
defineProps({
  items: { type: Array, default: () => [] },
  label: { type: String, default: "Breadcrumb" },
});
</script>

<template>
  <nav :aria-label="label">
    <ol class="vw-breadcrumb">
      <li v-for="(item, i) in items" :key="i">
        <span v-if="i" aria-hidden="true" class="vw-breadcrumb-divider">/</span
        ><a v-if="item.href && i < items.length - 1" :href="item.href">{{
          item.label
        }}</a
        ><span
          v-else
          :aria-current="i === items.length - 1 ? 'page' : undefined"
          >{{ item.label }}</span
        >
      </li>
    </ol>
  </nav>
</template>
