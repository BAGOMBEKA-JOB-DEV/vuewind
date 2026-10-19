<script setup>
import { ref, watch } from "vue";
import { loadExample, loadExampleSource } from "../registry.js";
import Icon from "../../lib/Icon.vue";
import CodeBlock from "./CodeBlock.vue";
const props = defineProps({ name: { type: String, required: true } });
const tab = ref("preview");
const source = ref("");
const previewKey = ref(0);
watch(
  () => props.name,
  async (name) => {
    tab.value = "preview";
    source.value = await loadExampleSource(name);
  },
  { immediate: true },
);
</script>
<template>
  <div class="demo-frame">
    <div class="demo-toolbar">
      <div class="demo-view-tabs" role="group" aria-label="Example display">
        <button
          type="button"
          :aria-pressed="tab === 'preview'"
          @click="tab = 'preview'"
        >
          <Icon name="eye" :size="14" />Preview</button
        ><button
          type="button"
          :aria-pressed="tab === 'code'"
          @click="tab = 'code'"
        >
          <Icon name="code" :size="14" />Code
        </button>
      </div>
      <div class="demo-toolbar-end">
        <span class="demo-live-label"><span />Live example</span
        ><button
          type="button"
          class="reset-demo"
          aria-label="Reset example"
          @click="previewKey++"
        >
          <Icon name="history" :size="14" />
        </button>
      </div>
    </div>
    <div v-if="tab === 'preview'" class="demo-preview">
      <component :is="loadExample(name)" :key="`${name}-${previewKey}`" />
    </div>
    <CodeBlock v-else :code="source" :title="`${name}Example.vue`" />
  </div>
</template>
