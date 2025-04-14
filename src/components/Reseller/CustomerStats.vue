<script setup lang="js">
import { ref } from 'vue'
import DatePickerOne from '../Forms/DatePicker/DatePickerOne.vue'
import ButtonDefault from '../Buttons/ButtonDefault.vue'
const brandData = ref([
  {
    name: 'MUSE',
    balance: '30,000',
    sent: 800,
    cost: 400,
    currency: 'UGX',
  },
  {
    name: 'QUOTA',
    balance: '30,000',
    sent: 20,
    cost: 300,
    currency: 'UGX',
  },
  {
    name: 'AIRMAN',
    balance: '29000',
    sent: 400,
    cost: 300,
    currency: 'UGX',
  },
  {
    name: 'AIRMAN',
    balance: '29000',
    sent: 400,
    cost: 300,
    currency: 'UGX',
  },
  {
    name: 'AIRMAN',
    balance: '29000',
    sent: 400,
    cost: 300,
    currency: 'UGX',
  },

])
</script>

<template>
  <div
    class="border border-stroke bg-white px-5 pt-7.5 pb-5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
    <div class="flex flex-wrap w-full items-start justify-between gap-3 sm:flex-nowrap mb-4">
      <div class="flex w-full justify-between">
        <div class="items-start">
          <h2 class="py-1 text-lg font-bold text-black whitespace-nowrap">Customer Stats</h2>
        </div>
        <div class="flex justify-between">
          <div class="flex justify-evenly gap-2">
            <DatePickerOne placeholder="From" class="w-full border-r-2 border-r-white" />
            <DatePickerOne placeholder="To" class="w-full border-l-2 border-l-white" />
          </div>
          <div>
            <ButtonDefault route="/" label="Change" customClasses="text-white"
              class="bg-primary-300 w-full hover:bg-secondary-400 md:ml-2 py-[9px]" />
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-secondary-200 dark:bg-meta-4 text-black">
            <th class="text-center text-sm font-bold xsm:text-base py-6">Name</th>
            <th class="text-center text-sm font-bold xsm:text-base py-6">Balance</th>
            <th class="hidden text-center sm:table-cell text-sm font-bold xsm:text-base">Sent</th>
            <th class="hidden text-center sm:table-cell text-sm font-bold xsm:text-base">Cost</th>
            <th class="hidden text-center sm:table-cell text-sm font-bold xsm:text-base">
              Currency
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(brand, key) in brandData" :key="key"
            :class="`border-b text-sm border-stroke dark:border-strokedark ${key === brandData.length - 1 ? '' : ''}`">
            <td class="py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.name }}</p>
            </td>

            <td class="py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.balance }}</p>
            </td>

            <td class="hidden sm:table-cell py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.sent }}</p>
            </td>

            <td class="hidden sm:table-cell py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.cost }}</p>
            </td>

            <td class="hidden sm:table-cell py-4 text-center">
              <p class="text-black dark:text-white">{{ brand.currency }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
