<script setup>
import Icon from "../../lib/Icon.vue";
defineProps({ items: { type: Array, default: () => [] } });
</script>
<template>
  <aside class="docs-toc" aria-label="On this page">
    <strong>On this page</strong>
    <nav>
      <a
        v-for="(item, i) in items"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ 'toc-first': i === 0 }"
        >{{ item.label }}</a
      >
    </nav>
    <div class="toc-help">
      <Icon name="github" :size="15" /><a
        href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind/issues"
        target="_blank"
        rel="noopener noreferrer"
        >Something missing?<br /><span
          >Open an issue <span aria-hidden="true">↗</span></span
        ></a
      >
    </div>
    <div class="toc-note">
      <Icon name="wind" :size="23" />
      <p>Less friction.<br />More creation.</p>
    </div>
  </aside>
</template>
