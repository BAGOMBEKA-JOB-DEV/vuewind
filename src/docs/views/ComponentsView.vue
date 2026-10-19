<script setup>
import { computed, ref } from "vue";
import { components, categories } from "../registry.js";
import Icon from "../../lib/Icon.vue";
import VwSearchInput from "../../lib/components/VwSearchInput.vue";
const query = ref("");
const selected = ref("All components");
const filtered = computed(() =>
  components.filter(
    (c) =>
      (selected.value === "All components" || c.category === selected.value) &&
      `${c.name} ${c.description}`
        .toLowerCase()
        .includes(query.value.toLowerCase()),
  ),
);
const icons = {
  Actions: "bolt",
  Forms: "settings",
  "Data display": "chart",
  Navigation: "right",
  Feedback: "bell",
  Overlays: "layers",
  Layout: "grid",
};
</script>
<template>
  <article class="docs-article catalog-article">
    <div class="page-breadcrumb">
      <span>The collection</span><span>/</span><span>Components</span>
    </div>
    <div class="catalog-heading">
      <div class="eyebrow">SMALL PIECES. BIG POSSIBILITIES.</div>
      <h1 class="page-heading">
        A component for<br /><span>your next great idea.</span>
      </h1>
      <p class="page-description">
        {{ components.length }} thoughtful building blocks, one considered
        design language. Find your starting point and make it yours.
      </p>
    </div>
    <div class="catalog-toolbar">
      <div class="catalog-filters" role="group" aria-label="Component category">
        <button
          v-for="category in ['All components', ...categories]"
          :key="category"
          type="button"
          :aria-pressed="selected === category"
          @click="selected = category"
        >
          {{ category }}
        </button>
      </div>
      <VwSearchInput
        v-model="query"
        label="Filter components"
        placeholder="Find a component…"
      />
    </div>
    <div class="catalog-results-count" role="status">
      {{ filtered.length }} components
      <span v-if="selected !== 'All components'">in {{ selected }}</span>
    </div>
    <div class="catalog-grid">
      <RouterLink
        v-for="item in filtered"
        :key="item.slug"
        :to="`/components/${item.slug}`"
        class="catalog-card"
        ><div class="catalog-card-art" :data-category="item.category">
          <Icon :name="icons[item.category]" :size="36" /><span
            class="catalog-art-line"
          /><span class="catalog-art-dot" />
        </div>
        <div class="catalog-card-content">
          <span class="catalog-card-category">{{ item.category }}</span>
          <h2>{{ item.name }}<Icon name="arrow" :size="15" /></h2>
          <p>{{ item.description }}</p>
        </div></RouterLink
      >
    </div>
    <div v-if="!filtered.length" class="catalog-empty">
      <Icon name="search" :size="30" />
      <h2>No components found.</h2>
      <p>Try another name, or clear the category filter.</p>
      <button
        type="button"
        class="vw-button"
        data-variant="outline"
        @click="
          query = '';
          selected = 'All components';
        "
      >
        Clear filters
      </button>
    </div>
    <footer class="docs-footer">
      <span
        >{{ components.length }} ways to get started. One foundation to build
        on.</span
      ><RouterLink to="/docs/composition"
        >Learn to compose <Icon name="right" :size="12"
      /></RouterLink>
    </footer>
  </article>
</template>
