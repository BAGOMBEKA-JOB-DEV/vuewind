<script setup lang="js">
import { ref } from 'vue'
import DatePickerOne from '../Forms/DatePicker/DatePickerOne.vue'
import ButtonDefault from '../Buttons/ButtonDefault.vue'
const brandData = ref([
  {
    name: 'MUSE',
    amount: '30,000',
    date: '05-Dec-2024',
    currency: 'UGX',
  },
  {
    name: 'QUOTA',
    amount: '30,000',
    date: '05-Dec-2024',
    currency: 'UGX',
  },
  {
    name: 'AIRMAN',
    amount: '29000',
    date: '05-Dec-2024',
    currency: 'UGX',
  },
  {
    name: 'AIRMAN',
    amount: '29000',
    date: '05-Dec-2024',
    currency: 'UGX',
  },
  {
    name: 'AIRMAN',
    amount: '29000',
    date: '05-Dec-2024',
    currency: 'UGX',
  },

])
</script>

<template>
  <div
    class="border border-stroke bg-white px-5 pt-7.5 pb-5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
    <div class="flex flex-wrap w-full items-start justify-between gap-3 sm:flex-nowrap mb-4">
      <div class="items-start">
        <h2 class="py-1 text-lg font-bold text-black whitespace-nowrap">Recent Charges</h2>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-secondary-200 dark:bg-meta-4 text-black">
            <th class="text-center text-sm font-bold xsm:text-base py-6">Name</th>
            <th class="text-center text-sm font-bold xsm:text-base py-6">Amount</th>
            <th class="hidden text-center sm:table-cell text-sm font-bold xsm:text-base">
              Currency
            </th>
            <th class="hidden text-center sm:table-cell text-sm font-bold xsm:text-base">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(brand, key) in brandData" :key="key"
            :class="`border-b text-sm border-stroke dark:border-strokedark ${key === brandData.length - 1 ? '' : ''}`">
            <td class="py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.name }}</p>
            </td>

            <td class="py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.amount }}</p>
            </td>

            <td class="hidden sm:table-cell py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.currency }}</p>
            </td>

            <td class="hidden sm:table-cell py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.date }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
