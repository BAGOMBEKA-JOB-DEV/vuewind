<script setup>
import { ref, useId } from "vue";
import Icon from "../Icon.vue";
defineOptions({ inheritAttrs: false });
defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "Password" },
  disabled: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const visible = ref(false);
const id = useId();
</script>

<template>
  <div class="vw-field">
    <label class="vw-label" :for="id">{{ label }}</label>
    <div class="vw-password">
      <input
        v-bind="$attrs"
        :id="id"
        class="vw-input"
        :type="visible ? 'text' : 'password'"
        :value="modelValue"
        :disabled="disabled"
        @input="emit('update:modelValue', $event.target.value)"
      /><button
        type="button"
        :disabled="disabled"
        :aria-label="visible ? 'Hide password' : 'Show password'"
        :aria-pressed="visible"
        @click="visible = !visible"
      >
        <Icon name="eye" :size="17" />
      </button>
    </div>
  </div>
</template>
