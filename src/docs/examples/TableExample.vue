<script setup>
import VwTable from "../../lib/components/VwTable.vue";
import VwBadge from "../../lib/components/VwBadge.vue";
const columns = [
  { key: "name", label: "Project" },
  { key: "status", label: "Status" },
  { key: "updated", label: "Last updated" },
];
const rows = [
  {
    id: 1,
    name: "Website redesign",
    status: "In progress",
    updated: "2 hours ago",
  },
  { id: 2, name: "Design system", status: "Completed", updated: "Yesterday" },
  {
    id: 3,
    name: "Mobile experience",
    status: "Planning",
    updated: "3 days ago",
  },
];
</script>
<template>
  <VwTable :columns="columns" :rows="rows" caption="Project overview"
    ><template #cell-status="{ value }"
      ><VwBadge :variant="value === 'Completed' ? 'success' : 'neutral'" dot>{{
        value
      }}</VwBadge></template
    ></VwTable
  >
</template>
