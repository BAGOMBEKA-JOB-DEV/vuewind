<script setup>
defineProps({
  columns: { type: Array, default: () => [] },
  rows: { type: Array, default: () => [] },
  caption: { type: String, default: "Data table" },
  rowKey: { type: String, default: "id" },
});
</script>

<template>
  <div class="vw-table-wrap">
    <table class="vw-table">
      <caption class="vw-sr-only">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" scope="col">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="row[rowKey] ?? i">
          <td v-for="col in columns" :key="col.key">
            <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">{{
              row[col.key]
            }}</slot>
          </td>
        </tr>
        <tr v-if="!rows.length">
          <td :colspan="Math.max(1, columns.length)" class="vw-empty-cell">
            No results to display.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
