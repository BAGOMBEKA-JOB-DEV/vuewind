<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/Forms/Checkboxes/Checkbox.vue'
const brandData = ref([
  {
    status: 'Active',
    name: 'MUSE',
    balance: 30000,
    currency: 'UGX',
    dateAdded: 'Thu, Jun 24 2024 <br> 10:05 AM',
  },
  {
    status: 'Active',
    name: 'QUOTA',
    balance: 3000,
    currency: 'UGX',
    dateAdded: 'Thu, Jun 24 2024 <br> 10:05 AM',
  },
  {
    status: 'Active',
    name: 'MUSE',
    balance: 30000,
    currency: 'UGX',
    dateAdded: 'Thu, Jun 24 2024 <br> 10:05 AM',
  },
  {
    status: 'Active',
    name: 'MUSE',
    balance: 30000,
    currency: 'UGX',
    dateAdded: 'Thu, Jun 24 2024 <br> 10:05 AM',
  },
  {
    status: 'Active',
    name: 'MUSE',
    balance: 30000,
    currency: 'UGX',
    dateAdded: 'Thu, Jun 24 2024 <br> 10:05 AM',
  },
])
</script>

<template>
  <div class="border px-5 dark:border-strokedark sm:px-7.5">
    <div class="overflow-x-auto">
      <h2 class="font-bold text-black py-6 whitespace-nowrap">New Customers</h2>
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-secondary-200 dark:bg-meta-4 border-b border-b-[#BDBDBD] text-black">
            <th class="py-6 text-sm font-bold xsm:text-base">Name</th>
            <th class="py-6 text-center text-sm font-bold xsm:text-base">Status</th>
            <th class="py-6 text-center text-sm font-bold xsm:text-base">Balance</th>
            <th class="hidden py-6 text-center sm:table-cell text-sm font-bold xsm:text-base">
              Currency
            </th>
            <th class="py-6  sm:table-cell text-center text-sm font-bold xsm:text-base">
              Date Added
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(brand, key) in brandData"
            :key="key"
            class="border-b border-[#BDBDBD]"
          >
            <td class="py-2">
              <p class="text-black text-center text-sm dark:text-white">{{ brand.name }}</p>
            </td>
            <td class="p-2 w-4">
              <p
                :class="{
                  'text-green-500 border w-[6rem] rounded bg-green-100 flex gap-2 justify-start':
                    brand.status === 'Active',
                  'text-red-500 border w-[6rem] border-red-500 bg-red-100 flex gap-2 justify-start':
                    brand.status === 'Rejected',
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
                    v-if="brand.status === 'Active'"
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
            <td class="py-3 text-center">
              <p class="text-black text-sm dark:text-white">{{ brand.balance }}</p>
            </td>
            <td class="hidden sm:table-cell py-3 text-center">
              <p class="text-black text-sm dark:text-white">{{ brand.currency }}</p>
            </td>
            <td class="sm:table-cell py-3">
              <p class="text-black dark:text-white text-sm text-center" v-html="brand.dateAdded"></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
