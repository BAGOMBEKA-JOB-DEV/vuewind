<script setup>
import { onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";
import { useDocsStore } from "../stores/docs.js";
import { useThemeStore } from "../stores/theme.js";
import DocsHeader from "./components/DocsHeader.vue";
import DocsSidebar from "./components/DocsSidebar.vue";
import CommandPalette from "./components/CommandPalette.vue";
import VwDrawer from "../lib/components/VwDrawer.vue";
const docs = useDocsStore();
const theme = useThemeStore();
const route = useRoute();
const shortcut = (event) => {
  const input =
    event.target instanceof HTMLElement &&
    (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName) ||
      event.target.isContentEditable);
  if (
    (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
    (event.key === "/" && !input)
  ) {
    event.preventDefault();
    docs.searchOpen = !docs.searchOpen;
  }
};
onMounted(() => {
  theme.initialize();
  window.addEventListener("keydown", shortcut);
});
onBeforeUnmount(() => window.removeEventListener("keydown", shortcut));
watch(
  () => route.fullPath,
  () => {
    docs.mobileOpen = false;
  },
);
</script>
<template>
  <a href="#main-content" class="skip-link">Skip to content</a><DocsHeader />
  <div class="docs-body">
    <DocsSidebar />
    <main id="main-content" class="docs-main" tabindex="-1">
      <RouterView />
    </main>
  </div>
  <VwDrawer v-model="docs.mobileOpen" title="Navigation"
    ><div class="mobile-sidebar"><DocsSidebar /></div></VwDrawer
  ><CommandPalette />
</template>
