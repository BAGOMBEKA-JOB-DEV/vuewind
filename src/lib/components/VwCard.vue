<script setup>
defineProps({ title: String, description: String });
</script>

<template>
  <section class="vw-card">
    <header v-if="title || $slots.header" class="vw-card-header">
      <slot name="header"
        ><h3>{{ title }}</h3>
        <p v-if="description">{{ description }}</p></slot
      >
    </header>
    <div class="vw-card-body"><slot /></div>
    <footer v-if="$slots.footer" class="vw-card-footer">
      <slot name="footer" />
    </footer>
  </section>
</template>
