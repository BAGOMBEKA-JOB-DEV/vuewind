<script setup>
import { ref } from "vue";
import VwTabs from "../../lib/components/VwTabs.vue";
const selected = ref("overview");
const items = [
  { label: "Overview", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Settings", value: "settings" },
];
</script>
<template>
  <VwTabs
    v-model="selected"
    :items="items"
    style="width: 400px; max-width: 100%"
    ><template #default="{ value }"
      ><p class="vw-muted">
        {{
          value === "overview"
            ? "A clear view of everything you are building."
            : value === "activity"
              ? "Your latest updates will appear right here."
              : "Make this workspace feel a little more like you."
        }}
      </p></template
    ></VwTabs
  >
</template>
