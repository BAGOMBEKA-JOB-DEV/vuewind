<script setup>
defineProps({ current: { type: Number, default: 0 }, steps: { type: Array, default: () => [] } })
</script>

<template>
<ol class="vw-stepper" aria-label="Progress steps"><li v-for="(step,i) in steps" :key="i" :class="{'is-active':i===current,'is-complete':i<current}" :aria-current="i===current?'step':undefined"><span class="vw-step-number" aria-hidden="true">{{ i<current?'✓':i+1 }}</span><span>{{ step }}<span v-if="i<current" class="vw-sr-only">, completed</span></span></li></ol>
</template>
