<script setup lang="js">
import { useSidebarStore } from '@/stores/sidebar'
import DarkModeSwitcher from './DarkModeSwitcher.vue'
// import DropdownMessage from './DropdownMessage.vue'
import DropdownNotification from './DropdownNotification.vue'
import DropdownUser from './DropdownUser.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const props = defineProps(['pageTitle'])
const { toggleSidebar } = useSidebarStore()
const sidebarStore = useSidebarStore()
const route = useRoute()

const getPageLabel = (routeName) => {
  const labels = {
    'dashboard': ' Dashboard',
    'quicksms': '/ Quick SMS',
    'to-contactlists': '/ To Contact List',
    'upload files': '/ Upload Files',
    'campaigns': '/ DB Campaigns',
    'SENDER ID': '/ Sender ID',
    'inbox': '/ Incoming',
    'channel-manager': '/ Channel Manager',
    'templates': '/ Templates',
    'contactlists': '/ Contact Lists',
    'jobs': '/ Job Management',
    'transactions': '/ Transactions',
    'DLR REPORTS': '/ DLReports',
    'routes': 'Route Management',
    'Rate plans': 'Manage Rate Plans',
    'rate plan manager': 'Rate Plan Manager',
    'customers': '/ Manage Customers',
    'SMPP': 'SMPP Connections',
    'Jobs': 'Job Management',
    'Admin vendor stats': '/ Vendor Stats',
    'reseller stats': '/ Reseller Stats',
    'Customer Traffic': '/ Customer Traffic',
    'customer payments': '/ Customer Payments',
    'manage roles': 'Manage Roles ',
    'Admin users': '/ Users ',
    'customer alerts': '/ Customer Alerts ',
    'system logs': '/ System Logs ',
    'customer account logs': '/ Customer Account Logs ',
    'vendor account logs': '/ SMPP Client Status ',
    'push dlr': '/ Push LDR ',
    'countries': '/ Country ',
    'network operators': '/ Network Operator ',
    'Admin sender ID': '/ Sender ID ',
    'Admin settings': '/ System Settings ',
    'Black list': '/ Phone Number ',
    'Gateway Settings': '/ Gateway Settings ',
    'sender id settings': '/ Sender ID ',
    'system settings': '/ System Settings ',
    'keyword': '/ Keyword ',
    'admin DLR': '/ DLR / AllUsers ',
    'admin reseller reports': '/ DLR / Reseller ',
    'admin disapproved reports': '/ DLR / Disapproved ',
    'Admin reports': '/Test',
    'default': '',
  }

  const sections = {
    'quicksms': 'Messaging ',
    'to-contactlists': 'Messaging ',
    'upload files': 'Messaging ',
    'campaigns': 'Messaging ',
    'SENDER ID': 'Manage ',
    'inbox': 'Manage ',
    'channel-manager': 'Manage ',
    'templates': 'Manage ',
    'contactlists': 'Manage ',
    'transactions': 'Reports ',
    'DLR REPORTS': 'Reports ',
    'routes': '',
    'Rate plans': '',
    'customers': 'Settings ',
    'SMPP': '',
    'Jobs': '',
    'jobs': 'Manage ',
    'Admin vendor stats': 'Reports ',
    'reseller stats': 'Reports ',
    'Customer Traffic': 'Reports ',
    'manage roles': '',
    'Admin users': 'Administration  ',
    'customer alerts': 'Administration ',
    'customer payments': 'Customer Payments ',
    'system logs': 'Administration ',
    'customer account logs': 'Administration ',
    'vendor account logs': 'Vendor Account Logs ',
    'push dlr': 'Vendor Account Logs ',
    'countries': 'Settings ',
    'network operators': 'Settings ',
    'Admin sender ID': 'Settings ',
    'Admin settings': 'Settings ',
    'Black list': 'Black List ',
    'Gateway Settings': 'Settings ',
    'dashboard': '',
    'sender id settings': 'Settings ',
    'system settings': 'Settings ',
    'keyword': 'Black List ',
    'admin reseller reports': 'Reports ',
    'admin DLR': 'Reports ',
    'admin disapproved reports': 'Reports ',
    'Admin reports': 'Reports ',
    'default': '',
  }

  return {
    pageLabel: labels[routeName] || labels['default'],
    section: sections[routeName] || sections['default']
  }
}

const pageLabel = ref('')
const section = ref('')

watch(
  () => route.name,
  (newRouteName) => {
    const { pageLabel: newPageLabel, section: newSection } = getPageLabel(newRouteName)
    pageLabel.value = newPageLabel
    section.value = newSection
  },
  { immediate: true }
)
</script>


<template>
  <header
    class="rounded-sm mt-5 ml-5  mr-5 w-auto  sticky top-0 z-999 flex  bg-white dark:bg-boxdark dark:drop-shadow-none border-b mb-1"
  >
    <div class="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11">

      <nav>
      <ol class="flex items-center gap-2">

        <li class="font-medium text text-sm md:text-lg lg:text-xl xl:text-2xl truncate">
          <span class="text-primary-500">{{ section }}</span>
            <!-- Page name (e.g., Dashboard) with a fixed or dynamic color -->
            <span class="text-black-500">{{ pageLabel }}</span>
        </li>

      </ol>
    </nav>

      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN -->
        <button
          class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          @click="
            () => {
              console.log('Toggling Sidebar')
              toggleSidebar()
            }
          "
        >
          <span class="relative block h-5.5 w-5.5 cursor-pointer">
            <span class="block absolute right-0 h-full w-full">
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-300': !sidebarStore.isSidebarOpen }"
              ></span>
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-400': !sidebarStore.isSidebarOpen }"
              ></span>
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-500': !sidebarStore.isSidebarOpen }"
              ></span>
            </span>
            <span class="block absolute right-0 h-full w-full rotate-45">
              <span
                class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-[0]': !sidebarStore.isSidebarOpen }"
              ></span>
              <span
                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-200': !sidebarStore.isSidebarOpen }"
              ></span>
            </span>
          </span>
        </button>
      </div>
      <div class="hidden sm:block">
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <li>
            <!-- Dark Mode Toggler -->
            <!-- <DarkModeSwitcher /> -->
            <!-- Dark Mode Toggler -->
          </li>

          <!-- Notification Menu Area -->
          <DropdownNotification />
          <!-- Notification Menu Area -->

          <!-- Chat Notification Area -->
          <!-- <DropdownMessage /> -->
          <!-- Chat Notification Area -->
        </ul>

        <!-- User Area -->
        <DropdownUser />
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>
