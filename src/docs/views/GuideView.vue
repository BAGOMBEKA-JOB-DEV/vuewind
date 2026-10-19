<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DocsToc from "../components/DocsToc.vue";
import CodeBlock from "../components/CodeBlock.vue";
import NotFoundView from "./NotFoundView.vue";
import Icon from "../../lib/Icon.vue";
const records = import.meta.glob("../guides/*.js", {
  eager: true,
  import: "default",
});
const route = useRoute();
const guide = computed(() => records[`../guides/${route.params.slug}.js`]);
const toc = computed(
  () =>
    guide.value?.sections.map((s) => ({
      id: s.id,
      label: s.title.replace(/\.$/, ""),
    })) || [],
);
</script>
<template>
  <NotFoundView v-if="!guide" />
  <div v-else class="docs-page-grid" :key="route.params.slug">
    <article class="docs-article">
      <div class="page-topline">
        <div class="page-breadcrumb">
          <RouterLink to="/docs/introduction">Getting started</RouterLink
          ><span>/</span><span>{{ guide.title }}</span>
        </div>
        <a
          :href="`https://github.com/BAGOMBEKA-JOB-DEV/vuewind/blob/redesign/vuewind-docs-v2/src/docs/guides/${route.params.slug}.js`"
          target="_blank"
          rel="noopener noreferrer"
          class="page-source"
          >View source <Icon name="arrow" :size="12"
        /></a>
      </div>
      <div class="guide-title-area">
        <div class="eyebrow">A THOUGHTFUL FOUNDATION</div>
        <h1 class="page-heading">
          {{ guide.title }}<span class="component-title-period">.</span>
        </h1>
        <p class="page-description">{{ guide.description }}</p>
      </div>
      <section
        v-for="section in guide.sections"
        :id="section.id"
        :key="section.id"
        class="guide-content-section section-anchor"
      >
        <h2>{{ section.title }}</h2>
        <p v-if="section.body">{{ section.body }}</p>
        <ul v-if="section.list">
          <li v-for="item in section.list" :key="item">{{ item }}</li>
        </ul>
        <CodeBlock
          v-if="section.code"
          :code="section.code"
          :language="section.language || 'vue'"
        />
        <aside v-if="section.note" class="guide-callout">
          {{ section.note }}
        </aside>
      </section>
      <div class="page-pagination">
        <RouterLink to="/docs/introduction"
          ><small>A FRESH PERSPECTIVE</small
          ><strong>← Introduction</strong></RouterLink
        ><RouterLink to="/components"
          ><small>YOUR NEXT IDEA</small
          ><strong>Explore the collection →</strong></RouterLink
        >
      </div>
      <footer class="docs-footer">
        <span>Made with care. Built with Vue.</span
        ><a
          href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind/issues"
          target="_blank"
          rel="noopener noreferrer"
          >Improve these docs <Icon name="arrow" :size="12"
        /></a>
      </footer>
    </article>
    <DocsToc :items="toc" />
  </div>
</template>
