<script setup lang="js">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
const dropdownOpen = ref(false)
const notifying = ref(true)

onClickOutside(target, () => {
  dropdownOpen.value = false
})

const alerts = ref([
  {
    title: 'A credit of 50,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
  {
    title: 'A credit of 50,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
  {
    title: 'A credit of 40,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
  {
    title: 'A credit of 10,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
  {
    title: 'A credit of 80,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
  {
    title: 'A credit of 90,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
  {
    title: 'A credit of 60,000 UGX was added to your account on 15-07-2024',
    time: '15-07-2024',
  },
])
</script>

<template>

  <div v-if="dropdownOpen" class="fixed inset-0 bg-black bg-opacity-40 transition-transform duration-500 ease-out">
  </div>
  <li class="relative" ref="target">
    <button
      class="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      @click.prevent="(dropdownOpen = !dropdownOpen), (notifying = false)">
      <span :class="!notifying && 'hidden'" class="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
        <span class="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
      </span>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 
      text-black animate-pulse">
        <path fill-rule="evenodd"
          d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
          clip-rule="evenodd" />
      </svg>
    </button>




    <!-- Dropdown Start -->
    <transition name="dropdown" @after-leave="dropdownOpen = false"
      enter-active-class="transition duration-300 ease-out" leave-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-x-full" enter-to-class="transform opacity-100 translate-x-0"
      leave-from-class="transform opacity-100 translate-y-0" leave-to-class="transform opacity-0 translate-x-full">
      <div v-show="dropdownOpen" class="absolute -xl:lg:right-[5px] -right-25 -mt-12  flex xl:lg:md:max-h-[600px] max-h-[500px] xl:lg:w-[550px] w-[500px]
         flex-col rounded-lg  z-[1050]  pb-5
        border border-stroke bg-white shadow-2xl dark:border-strokedark dark:bg-boxdark">

        <div class="pb-2">
          <!-- Close Button -->
          <button class="absolute  top-3  right-2 flex items-center justify-center w-6 h-6 rounded-full border-2
           border-secondary-500 text-secondary-900 bg-gray-3 dark:bg-gray-2 dark:text-gray-400 
           dark:hover:text-secondary-800 shadow-lg " aria-label="Close" @click="dropdownOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="size-4 transition-transform active:rotate-180 duration-500 ease-out" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="px-4.5 py-2 flex space-x-2 ">
            <h5 class="text-black text-lg font-medium ml-1">Alerts!</h5>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-5 mt-1 text-secondary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>

          </div>
        </div>

        <ul class="flex h-auto flex-col overflow-y-auto p-5 ">
          <li v-for="(alert, index) in alerts" :key="index">
            <div class="flex flex-col gap-2.5 border border-stroke px-4.5 py-3 dark:border-strokedark">
              <table>
                <tbody>
                  <tr class="border-gray-300 dark:border-gray-700">
                    <td class="font-medium text-sm text-black dark:text-white px-2 py-1">
                      • {{ alert.title }} ({{ alert.time }})
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>

    </transition>
    <!-- Dropdown End -->
  </li>
</template>
