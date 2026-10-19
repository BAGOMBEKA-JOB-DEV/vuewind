<script setup>
import { computed } from "vue";
import { highlight } from "../utils/highlight.js";
import VwCopyButton from "../../lib/components/VwCopyButton.vue";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  code: { type: String, default: "" },
  language: { type: String, default: "vue" },
  title: String,
});
const tokens = computed(() => highlight(props.code));
</script>
<template>
  <div class="docs-code-block" v-bind="$attrs">
    <div class="code-toolbar">
      <span><span class="code-file-dot" />{{ title || language }}</span
      ><VwCopyButton :text="code" label="Copy" />
    </div>
    <pre
      :aria-label="`${language} code`"
    ><code><span v-for="(token,i) in tokens" :key="i" :class="token.type ? `code-token-${token.type}` : undefined">{{ token.text }}</span></code></pre>
  </div>
</template>
