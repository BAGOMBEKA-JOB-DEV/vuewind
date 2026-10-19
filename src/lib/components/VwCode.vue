<script setup>
defineProps({ inline: Boolean, language: { type: String, default: "text" } });
</script>

<template>
  <code v-if="inline" class="vw-inline-code"><slot /></code>
  <pre
    v-else
    class="vw-code"
    :aria-label="`${language} code`"
  ><code><slot /></code></pre>
</template>
