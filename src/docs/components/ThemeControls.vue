<script setup>
import { useThemeStore } from "../../stores/theme.js";
import Icon from "../../lib/Icon.vue";
const theme = useThemeStore();
</script>
<template>
  <div class="theme-controls">
    <span class="theme-controls-label">Make it yours</span>
    <div class="accent-options" role="group" aria-label="Accent color">
      <button
        v-for="color in ['green', 'blue', 'violet']"
        :key="color"
        type="button"
        :class="color"
        :aria-label="`${color} accent`"
        :aria-pressed="theme.accent === color"
        @click="theme.accent = color"
      >
        <Icon v-if="theme.accent === color" name="check" :size="10" />
      </button>
    </div>
    <span class="theme-control-divider" /><button
      type="button"
      class="theme-toggle"
      :aria-label="
        theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'
      "
      @click="theme.toggle"
    >
      <Icon :name="theme.isDark ? 'sun' : 'moon'" :size="16" />
    </button>
  </div>
</template>
