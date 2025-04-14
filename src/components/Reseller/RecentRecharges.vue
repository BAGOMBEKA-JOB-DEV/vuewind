<script setup lang="js">
import { ref } from 'vue'
const brandData = ref([
  {
    name: 'MUSE',
    amount: '30,000',
    date: 'Thu, Jun 24 2024 <br> 10:05 AM',
  },
  {
    name: 'QUOTA',
    amount: '30,000',
    date: 'Fri, Jun 25 2024 <br> 09:30 AM',
  },
  {
    name: 'AIRMAN',
    amount: '29,000',
    date: 'Sat, Jun 26 2024 <br> 08:15 AM',
  },
  {
    name: 'AIRMAN',
    amount: '29,000',
    date: 'Sat, Jun 26 2024 <br> 08:15 AM',
  },
  {
    name: 'AIRMAN',
    amount: '29,000',
    date: 'Sat, Jun 26 2024 <br> 08:15 AM',
  },
])
</script>

<template>
  <div
    class="overflow-x-auto bg-white border border-stroke p-4.5 pb-15 dark:border-strokedark dark:bg-boxdark w-full"
  >
    <h2 class="lg:mt-5 font-bold text-black pb-5">Recent Recharges</h2>
    <table class="min-w-full table-auto lg:mt-">
      <thead>
        <tr class="bg-secondary-200 dark:bg-meta-4 text-black">
          <th class="text-center text-sm font-bold xsm:text-base py-6">Name</th>
          <th class="text-center text-sm font-bold xsm:text-base py-6">Amount</th>
          <th class="hidden text-center sm:table-cell text-sm font-bold xsm:text-base py-6">
            Date & Time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(brand, key) in brandData"
          :key="key"
          :class="`border-b border-stroke dark:border-strokedark ${key === brandData.length - 1 ? '' : ''}`"
        >
          <td class="py-2 text-center text-sm">
            <p class="text-black dark:text-white">{{ brand.name }}</p>
          </td>

          <td class="py-2 text-center text-sm">
            <p class="text-black dark:text-white">{{ brand.amount }}</p>
          </td>

          <td class="sm:table-cell py-2 text-center text-sm">
            <p class="text-black dark:text-white text-start" v-html="brand.date"></p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
