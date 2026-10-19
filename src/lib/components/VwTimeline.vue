<script setup>
defineProps({ items: { type: Array, default: () => [] } });
</script>

<template>
  <ol class="vw-timeline">
    <li v-for="(item, i) in items" :key="item.id ?? i">
      <span class="vw-timeline-dot" aria-hidden="true" />
      <div>
        <strong>{{ item.title }}</strong>
        <p v-if="item.description">{{ item.description }}</p>
        <time v-if="item.time" :datetime="item.datetime">{{ item.time }}</time>
      </div>
    </li>
  </ol>
</template>
