<script setup>
import { useDocsStore } from "../../stores/docs.js";
import { useThemeStore } from "../../stores/theme.js";
import Logo from "./Logo.vue";
import Icon from "../../lib/Icon.vue";
const docs = useDocsStore();
const theme = useThemeStore();
</script>
<template>
  <header class="docs-header">
    <div class="header-brand">
      <button
        type="button"
        class="mobile-menu-button"
        aria-label="Open navigation"
        :aria-expanded="docs.mobileOpen"
        @click="docs.mobileOpen = !docs.mobileOpen"
      >
        <Icon name="menu" /></button
      ><Logo /><span class="version-tag">v0.2</span>
    </div>
    <nav class="header-nav" aria-label="Primary navigation">
      <RouterLink
        to="/docs/introduction"
        :class="{
          'is-active': $route.path === '/' || $route.path.startsWith('/docs'),
        }"
        >Documentation</RouterLink
      ><RouterLink
        to="/components"
        :class="{ 'is-active': $route.path.startsWith('/components') }"
        >Components</RouterLink
      ><RouterLink
        to="/blocks"
        :class="{ 'is-active': $route.path.startsWith('/blocks') }"
        >Blocks<span class="tiny-new">NEW</span></RouterLink
      ><RouterLink
        to="/changelog"
        :class="{ 'is-active': $route.path === '/changelog' }"
        >Changelog</RouterLink
      >
    </nav>
    <div class="header-actions">
      <button
        type="button"
        class="header-search"
        @click="docs.searchOpen = true"
      >
        <Icon name="search" :size="15" /><span>Search documentation…</span
        ><kbd>⌘ K</kbd></button
      ><a
        href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind"
        target="_blank"
        rel="noopener noreferrer"
        class="header-icon"
        aria-label="Vuewind on GitHub (opens in a new tab)"
        ><Icon name="github" :size="19" /></a
      ><span class="header-divider" /><button
        type="button"
        class="header-icon"
        :aria-label="
          theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'
        "
        @click="theme.toggle"
      >
        <Icon :name="theme.isDark ? 'moon' : 'sun'" :size="19" />
      </button>
    </div>
  </header>
</template>
