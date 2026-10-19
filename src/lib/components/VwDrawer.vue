<script setup>
import { ref, useId } from "vue";
import { useNativeDialog } from "../utils/dialog.js";
import Icon from "../Icon.vue";
const props = defineProps({
  modelValue: Boolean,
  title: { type: String, required: true },
  description: String,
});
const emit = defineEmits(["update:modelValue"]);
const element = ref(null);
const id = useId();
useNativeDialog(element, () => props.modelValue);
const close = () => emit("update:modelValue", false);
</script>

<template>
  <dialog
    ref="element"
    class="vw-dialog vw-drawer"
    :aria-labelledby="id"
    :aria-describedby="description ? `${id}-description` : undefined"
    @cancel.prevent="close"
    @close="close"
    @click="$event.target === element && close()"
  >
    <div class="vw-dialog-inner">
      <header class="vw-between">
        <h2 :id="id">{{ title }}</h2>
        <button
          type="button"
          class="vw-button vw-icon-button"
          data-variant="ghost"
          aria-label="Close dialog"
          @click="close"
        >
          <Icon name="close" />
        </button>
      </header>
      <p v-if="description" :id="`${id}-description`" class="vw-muted">
        {{ description }}
      </p>
      <div class="vw-dialog-body"><slot :close="close" /></div>
      <footer v-if="$slots.footer" class="vw-dialog-footer">
        <slot name="footer" :close="close" />
      </footer>
    </div>
  </dialog>
</template>
