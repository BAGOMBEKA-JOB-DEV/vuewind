<script setup lang="js">
import { computed, ref } from 'vue'
const allNotifications = [
  'A credit of 50,000 Ugx was added to your account on 15-7-2024',
  'A debit of 30,000 Ugx was withdrawn from your account on 14-7-2024',
  'A credit of 70,000 Ugx was added to your account on 13-7-2024',
  'A debit of 10,000 Ugx was withdrawn from your account on 12-7-2024',
  'A credit of 50,000 Ugx was added to your account on 11-7-2024',
  'A debit of 5,000 Ugx was withdrawn from your account on 10-7-2024',
  'A debit of 5,000 Ugx was withdrawn from your account on 10-7-2024',
  'A debit of 5,000 Ugx was withdrawn from your account on 10-7-2024',
  'A debit of 5,000 Ugx was withdrawn from your account on 10-7-2024',
]
const transactionCount = ref(5)
const notifications = computed(() => allNotifications.slice(0, transactionCount.value))
</script>
<template>
  <div class="bg-white border border-stroke p-4.5 dark:border-strokedark dark:bg-boxdark">
    <h2 class="text-left text-xl font-semibold mb-4">
      Last {{ transactionCount }} Transactions
    </h2>
    <ul class="relative px-3">
      <li
        v-for="(item, index) in notifications"
        :key="index"
        class="py-2.5 relative list-disc"
      >
        <div class="text-left mb-4">{{ item }}</div>
        <hr class="absolute left-0 w-[calc(100%+2rem)] border-t-2 -ml-4 px-0">
      </li>
    </ul>
  </div>
</template>
