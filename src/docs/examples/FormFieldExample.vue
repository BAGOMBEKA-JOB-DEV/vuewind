<script setup>
import { ref } from "vue";
import VwFormField from "../../lib/components/VwFormField.vue";
const name = ref("");
</script>
<template>
  <VwFormField
    label="Workspace name"
    hint="Something your team will recognize."
    required
    style="width: 320px; max-width: 100%"
    ><template #default="{ id, describedby, invalid, required }"
      ><input
        :id="id"
        v-model="name"
        class="vw-input"
        :aria-describedby="describedby"
        :aria-invalid="invalid || undefined"
        :required="required"
        placeholder="Acme Studio" /></template
  ></VwFormField>
</template>
