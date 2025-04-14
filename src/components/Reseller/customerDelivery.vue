<script setup lang="js">
import { ref } from 'vue'
const brandData = ref([
  {
    status: 'Delivered',
    smsCount: 2000,
    amount: '30,000',
  },
  {
    status: 'Failed',
    smsCount: 100,
    amount: '30,000',
    date: 'Fri, Jun 25 2024 <br> 09:30 AM',
  },
  {
    status: 'Pending',
    smsCount: 900,
    amount: '29,000',
    date: 'Sat, Jun 26 2024 <br> 08:15 AM',
  },
  {
    status: 'Rejected',
    smsCount: 900,
    amount: '29,000',
    date: 'Sat, Jun 26 2024 <br> 08:15 AM',
  },
  {
    status: 'Expired',
    smsCount: 900,
    amount: '29,000',
    date: 'Sat, Jun 26 2024 <br> 08:15 AM',
  },
])
</script>

<template>
  <div
    class="overflow-x-auto bg-white border border-stroke px-4.5 pb-13 pt-6 dark:border-strokedark dark:bg-boxdark w-full"
  >
    <h2 class="font-bold text-black pb-7">Customer Delivery Stats</h2>
    <table class="min-w-full table-auto">
      <thead>
        <tr class="bg-secondary-200 dark:bg-meta-4 border-b border-[#BDBDBD] text-black">
          <th class="text-center text-sm font-bold xsm:text-base py-6">SMS status</th>
          <th class="text-center text-sm font-bold xsm:text-base py-6">SMS count</th>
          <th class="text-center sm:table-cell text-sm font-bold xsm:text-base py-6"> Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(brand, key) in brandData"
          :key="key"
          :class="`border-b border-stroke dark:border-strokedark ${key === brandData.length - 1 ? '' : ''}`"
        >
        <td class="p-2 w-4 py-3">
              <p
                :class="{
                  'text-green-500 border w-[6rem] rounded bg-green-100 flex gap-2 justify-start':
                    brand.status === 'Delivered',
                  'text-red-500 border w-[6rem] border-red-500 bg-red-100 flex gap-2 justify-start':
                    brand.status === 'Rejected' || brand.status === 'Expired' || brand.status === 'Failed',
                  'text-gray-500 border w-[6rem] border-gray-500 bg-gray-100 flex gap-2 justify-start':
                    brand.status === 'Pending',
                  'text-black': true,
                  'dark:text-white': true,
                  'sm:block': true,
                  'rounded-full': true,
                  'px-2': true,
                  'py-1': true,
                }"
              >
                <span class="flex items-center gap-2">
                  <svg
                    v-if="brand.status === 'Delivered'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#38a169" />
                  </svg>
                  <svg
                    v-if="brand.status === 'Rejected'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e" />
                  </svg>
                  <svg
                    v-if="brand.status === 'Expired'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e" />
                  </svg>
                  <svg
                    v-if="brand.status === 'Failed'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e" />
                  </svg>
                  <svg
                    v-if="brand.status === 'Pending'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#a0aec0" />
                  </svg>
                  <span class="text-sm">{{ brand.status }}</span>
                </span>
              </p>
            </td>
          <td class=" text-center py-3">
            <p class="text-black text-sm dark:text-white">{{ brand.smsCount }}</p>
          </td>

          <td class="text-center py-3">
            <p class="text-black text-sm dark:text-white">{{ brand.amount }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
