<script setup>
import { useId } from "vue";
defineProps({ label: String, hint: String, error: String, required: Boolean });
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label v-if="label" :for="id" class="vw-label"
      >{{ label }}<span v-if="required" aria-hidden="true"> *</span></label
    ><slot
      :id="id"
      :describedby="error || hint ? `${id}-help` : undefined"
      :invalid="!!error"
      :required="required"
    />
    <p
      v-if="hint || error"
      :id="`${id}-help`"
      class="vw-field-hint"
      :class="{ 'vw-error': error }"
    >
      {{ error || hint }}
    </p>
  </div>
</template>
