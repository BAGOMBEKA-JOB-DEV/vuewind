<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useDocsStore } from "../../stores/docs.js";
import { components } from "../registry.js";
import { guides } from "../navigation.js";
import { useNativeDialog } from "../../lib/utils/dialog.js";
import Icon from "../../lib/Icon.vue";
const docs = useDocsStore();
const router = useRouter();
const dialog = ref(null);
const query = ref("");
const selected = ref(0);
const entries = [
  ...guides.map((g) => ({ ...g, type: "Guide", href: `/docs/${g.slug}` })),
  ...components.map((c) => ({
    ...c,
    type: c.category,
    href: `/components/${c.slug}`,
  })),
];
const results = computed(() => {
  const term = query.value.trim().toLowerCase();
  return entries
    .filter((e) =>
      `${e.name} ${e.description} ${e.type}`.toLowerCase().includes(term),
    )
    .slice(0, 12);
});
watch(query, () => (selected.value = 0));
watch(
  () => docs.searchOpen,
  (open) => {
    if (open) {
      query.value = "";
      selected.value = 0;
    }
  },
);
useNativeDialog(dialog, () => docs.searchOpen);
function choose(item) {
  if (!item) return;
  docs.searchOpen = false;
  router.push(item.href);
}
function keyboard(event) {
  if (["ArrowDown", "ArrowUp"].includes(event.key)) {
    event.preventDefault();
    selected.value =
      (selected.value +
        (event.key === "ArrowDown" ? 1 : -1) +
        results.value.length) %
      Math.max(1, results.value.length);
    document
      .getElementById(`search-result-${selected.value}`)
      ?.scrollIntoView({ block: "nearest" });
  }
  if (event.key === "Enter") {
    event.preventDefault();
    choose(results.value[selected.value]);
  }
}
</script>
<template>
  <dialog
    ref="dialog"
    class="command-dialog"
    aria-label="Search documentation"
    @cancel.prevent="docs.searchOpen = false"
    @close="docs.searchOpen = false"
    @click="$event.target === dialog && (docs.searchOpen = false)"
  >
    <div class="command-input">
      <Icon name="search" :size="20" /><input
        v-model="query"
        autofocus
        placeholder="What would you like to build?"
        role="combobox"
        aria-label="Search documentation"
        aria-controls="search-results"
        :aria-expanded="true"
        :aria-activedescendant="
          results.length ? `search-result-${selected}` : undefined
        "
        autocomplete="off"
        @keydown="keyboard"
      /><button
        type="button"
        aria-label="Close search"
        @click="docs.searchOpen = false"
      >
        <kbd>esc</kbd>
      </button>
    </div>
    <div class="command-results-label">
      {{ query ? "SEARCH RESULTS" : "JUMP RIGHT IN"
      }}<span>{{ results.length }} results</span>
    </div>
    <div
      id="search-results"
      class="command-results"
      role="listbox"
      aria-label="Search results"
    >
      <div
        v-for="(item, i) in results"
        :id="`search-result-${i}`"
        :key="item.href"
        role="option"
        :aria-selected="selected === i"
        class="command-result"
        @mouseenter="selected = i"
        @click="choose(item)"
      >
        <span class="command-result-icon"
          ><Icon
            :name="item.type === 'Guide' ? 'book' : 'box'"
            :size="17" /></span
        ><span
          ><strong>{{ item.name }}</strong
          ><small>{{ item.description }}</small></span
        ><span class="command-result-type">{{ item.type }}</span
        ><Icon name="right" :size="15" />
      </div>
      <p v-if="!results.length" class="command-empty">
        No results for “{{ query }}”. Try a component name or a shorter search.
      </p>
    </div>
    <footer>
      <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span
      ><span><kbd>↵</kbd> to open</span><span><kbd>esc</kbd> to close</span>
    </footer>
  </dialog>
</template>
