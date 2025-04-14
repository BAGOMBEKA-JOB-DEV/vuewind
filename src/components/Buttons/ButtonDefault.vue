<script setup lang="js">
const props = defineProps({
  label: String,
  route: {
    type: String,
    default: null,
  },
  customClasses: String,
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <component
    :is="route ? 'router-link' : 'button'"
    :to="route"
    :type="route ? null : type"
    class="inline-flex items-center justify-center gap-2.5 py-4 px-10 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
    :class="customClasses"
  >
    <slot></slot>
    {{ label }}
  </component>
</template>
