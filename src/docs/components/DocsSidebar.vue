<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { guides } from "../navigation.js";
import { componentGroups, components } from "../registry.js";
import Icon from "../../lib/Icon.vue";
import { useDocsStore } from "../../stores/docs.js";
const docs = useDocsStore();
const expanded = ref(new Set(["Actions", "Forms"]));
const route = useRoute();
watch(
  () => route.params.slug,
  (slug) => {
    const group = componentGroups.find((group) =>
      group.items.some((item) => item.slug === slug),
    );
    if (group) expanded.value = new Set([...expanded.value, group.name]);
  },
  { immediate: true },
);
function toggle(name) {
  const next = new Set(expanded.value);
  next.has(name) ? next.delete(name) : next.add(name);
  expanded.value = next;
}
</script>
<template>
  <aside class="docs-sidebar" aria-label="Documentation sidebar">
    <div class="sidebar-inner">
      <div class="sidebar-kicker">BUILD WITH VUEWIND</div>
      <nav aria-label="Getting started">
        <div class="sidebar-section-label">Getting started</div>
        <RouterLink
          v-for="guide in guides"
          :key="guide.slug"
          :to="`/docs/${guide.slug}`"
          class="sidebar-link"
          :class="{
            'sidebar-active':
              ($route.path === '/' && guide.slug === 'introduction') ||
              $route.params.slug === guide.slug,
          }"
          @click="docs.mobileOpen = false"
          ><Icon :name="guide.icon" :size="15" />{{ guide.name
          }}<span v-if="guide.slug === 'introduction'" class="sidebar-link-dot"
        /></RouterLink>
      </nav>
      <nav aria-label="Component reference" class="sidebar-components">
        <RouterLink
          to="/components"
          class="sidebar-section-label sidebar-section-link"
          @click="docs.mobileOpen = false"
          >Components<span class="sidebar-count">{{
            components.length
          }}</span></RouterLink
        >
        <div
          v-for="group in componentGroups"
          :key="group.name"
          class="sidebar-group"
        >
          <button
            type="button"
            class="sidebar-group-trigger"
            :aria-expanded="expanded.has(group.name)"
            @click="toggle(group.name)"
          >
            {{ group.name
            }}<span
              >{{ group.items.length }}<Icon name="down" :size="12"
            /></span>
          </button>
          <div v-if="expanded.has(group.name)" class="sidebar-group-items">
            <RouterLink
              v-for="item in group.items"
              :key="item.slug"
              :to="`/components/${item.slug}`"
              class="sidebar-component-link"
              :class="{ 'sidebar-active': $route.params.slug === item.slug }"
              @click="docs.mobileOpen = false"
              >{{ item.name
              }}<span
                v-if="['button', 'input-group'].includes(item.slug)"
                class="component-new-dot"
            /></RouterLink>
          </div>
        </div>
      </nav>
      <a
        class="sidebar-github-card"
        href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon name="github" :size="19" /><span
          ><strong>A little love goes a long way.</strong
          ><small
            >Star us on GitHub <span aria-hidden="true">↗</span></small
          ></span
        ></a
      >
      <div class="sidebar-footer">
        <span class="small-green-dot" />Open source. Yours to build.
      </div>
    </div>
  </aside>
</template>
