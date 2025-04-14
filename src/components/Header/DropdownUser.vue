<script setup lang="js">
import { onClickOutside } from '@vueuse/core'
import { onMounted, ref, computed } from 'vue'


const target = ref(null)
const dropdownOpen = ref(false)

onClickOutside(target, () => {
  dropdownOpen.value = false
})

</script>

<template>
  <div class="relative" ref="target">
    <router-link class="flex items-center gap-4 cursor-pointer" to="#" @click.prevent="dropdownOpen = !dropdownOpen">


      <span class="h-12 w-12">
        <img class="h-full w-full rounded-full" src="@/assets/images/user/user-01.png" alt="User" />
      </span>

    </router-link>

  
    <!-- Dropdown Start -->
    <transition name="dropdown" @after-leave="dropdownOpen = false"
      enter-active-class="transition duration-300 ease-out" leave-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-x-full" enter-to-class="transform opacity-100 translate-x-0"
      leave-from-class="transform opacity-100 translate-y-0" leave-to-class="transform opacity-0 translate-x-full">
      <div v-show="dropdownOpen"
        class="absolute right-0 mt-4 w-[250px] rounded border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">

        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-2">
            <span class="text-sm font-medium text-secondary-800 dark:text-gray-100">ALFRED SMSIN -</span>
            <div >
              <span class="text-xs font-medium text-black-800 dark:text-gray-400">[EndUser Mode]</span>
            </div>
           
          </div>
        </div>

        <ul
          class="flex flex-col gap-5 border-b border-gray-200 px-6 py-4 dark:border-gray-700 hover:bg-secondary-600 rounded-lg">
          <li>
            <router-link to="/user-profile"
              class="flex items-center gap-3.5 text-secondary-800 text-sm font-medium duration-300 ease-in-out hover:text-secondary-900 lg:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Profile
            </router-link>
          </li>
        </ul>

        <ul
          class="flex flex-col gap-5 border-b border-gray-200 px-6 py-4 dark:border-gray-700 hover:bg-secondary-600 rounded-lg">
          <router-link to="/your-api" class="flex items-center gap-3.5 text-secondary-800 text-sm 
              font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <li class="flex gap-4 ">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
              My API
            </li>
          </router-link>
        </ul>


        <div
          class="flex flex-col gap-5 border-b border-gray-200 dark:border-gray-700 hover:bg-secondary-600 rounded-lg">
          <button
            class="flex items-center gap-3.5 py-4 px-6 text-secondary-800 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            @click.prevent="ChangePasswordNow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <path d="M16 10V7a4 4 0 0 0-8 0v3" />
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <circle cx="12" cy="15" r="1" />
              <path d="M12 16v2" />
            </svg>

            Change Password
          </button>
        </div>

        <div
          class="flex flex-col gap-5 border-b border-gray-200 dark:border-gray-700 hover:bg-secondary-600 rounded-lg">
          <button
            class="flex items-center gap-3.5 py-4 px-6 text-secondary-800 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
            <img class="size-6" src="../../assets/images/icon/logout.svg" alt="icon" />
            Log Out
          </button>
        </div>
      </div>
    </transition>
    <!-- Dropdown End -->
  </div>
</template>
