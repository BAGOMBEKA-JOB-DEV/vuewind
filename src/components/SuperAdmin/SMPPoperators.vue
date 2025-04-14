<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/Forms/Checkboxes/Checkbox.vue'
const brandData = ref([
  {
    status: 'Connected',
    vendorAccount: 'advanta',
    SMPPmode: 'Transceiver',
  },
  {
    status: 'Connected',
    vendorAccount: 'QUOTA Inc',
    SMPPmode: 'Transceiver',
  },
  {
    status: 'Disconnected',
    vendorAccount: 'MUSE',
    SMPPmode: 'Transceiver',
  },
  {
    status: 'Connected',
    vendorAccount: 'QUOTA Inc',
    SMPPmode: 'Transceiver',
  },
  {
    status: 'Disconnected',
    vendorAccount: 'MUSE',
    SMPPmode: 'Transceiver',
  },
])
</script>

<template>
  <div class="border px-5 dark:border-strokedark sm:px-7.5">
    <div class="overflow-x-auto">
      <h2 class="font-bold text-black py-6 whitespace-nowrap">SMPP Operators</h2>
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-secondary-200 dark:bg-meta-4 border-b border-b-[#BDBDBD] text-black">
            <th class="py-6 text-sm font-bold xsm:text-base">Vendor Account</th>
            <th class="py-6 text-center text-sm font-bold xsm:text-base">Status</th>
            <th class="py-6 text-center text-sm font-bold xsm:text-base">SMPP Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(brand, key) in brandData"
            :key="key"
            class="border-b border-[#BDBDBD]"
          >
            <td class="py-5">
              <p class="text-black text-start pl-[5rem] text-sm dark:text-white">{{ brand.vendorAccount }}</p>
            </td>
            <td class="p-2 w-4">
              <p
                :class="{
                  'text-green-500 border w-[8rem] rounded bg-green-100 flex gap-2 justify-start text-xs':
                    brand.status === 'Connected',
                  'text-red-500 border w-[8rem] border-red-500 bg-red-100 flex gap-2 justify-start text-xs':
                    brand.status === 'Disconnected',
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
                    v-if="brand.status === 'Connected'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#38a169" />
                  </svg>
                  <svg
                    v-if="brand.status === 'Disconnected'"
                    width="10"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e" />
                  </svg>
                  <span class="text-sm">{{ brand.status }}</span>
                </span>
              </p>
            </td>
            <td class="py-5 text-center">
              <p class="text-black text-sm dark:text-white">{{ brand.SMPPmode }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
