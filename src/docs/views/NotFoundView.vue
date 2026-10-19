<script setup>
import Icon from "../../lib/Icon.vue";
</script>
<template>
  <article class="not-found">
    <span class="not-found-mark"><Icon name="wind" :size="40" /></span
    ><span class="eyebrow">A LITTLE OFF THE BEATEN PATH</span>
    <h1 class="page-heading">Nothing here. Yet.</h1>
    <p class="page-description">
      This page may have moved, or the link took a wrong turn. Let’s find you a
      better starting point.
    </p>
    <div class="demo-row">
      <RouterLink to="/" class="vw-button"
        >Back to the beginning <Icon name="right" :size="15" /></RouterLink
      ><RouterLink to="/components" class="vw-button" data-variant="outline"
        >Explore components</RouterLink
      >
    </div>
  </article>
</template>
