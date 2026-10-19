<script setup>
import { ref, useId } from "vue";
import Icon from "../Icon.vue";
defineProps({
  accept: String,
  multiple: Boolean,
  label: { type: String, default: "Choose files" },
  disabled: Boolean,
});
const emit = defineEmits(["change"]);
const names = ref([]);
const id = useId();
function change(event) {
  const files = [...event.target.files];
  names.value = files.map((f) => f.name);
  emit("change", files);
}
</script>

<template>
  <div class="vw-upload">
    <Icon name="upload" :size="26" /><label :for="id">{{ label }}</label>
    <p>
      {{
        names.length
          ? names.join(", ")
          : "Select from your device. Files stay local."
      }}
    </p>
    <input
      :id="id"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="change"
    />
  </div>
</template>
