<script setup>
defineProps({ items: { type: Array, default: () => [] } });
</script>

<template>
  <div class="vw-accordion">
    <details v-for="(item, i) in items" :key="item.id ?? i">
      <summary>{{ item.title }}<span aria-hidden="true">+</span></summary>
      <div class="vw-accordion-body">
        <slot :item="item">{{ item.content }}</slot>
      </div>
    </details>
  </div>
</template>
