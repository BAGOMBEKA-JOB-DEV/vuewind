<script setup lang="js">
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref, computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
import ButtonDefault from '../Buttons/ButtonDefault.vue'

const target = ref(null)

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false
})

const menuGroups = ref([
  {
    menuItems: [
      {
        icon: `<svg
                  class="fill-current text-secondary-400"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                    fill=""
                  />
                  <path
                    d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                    fill=""
                  />
                  <path
                    d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                    fill=""
                  />
                  <path
                    d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                    fill=""
                  />
                </svg>`,
        label: 'Dashboard',
         visible: true,
        route: '/',
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Forms',
        route: '#',
        children: [
          { label: 'Buttons', route: '' },
          { label: 'Email Input', route: '' },
          { label: 'Check Boxes', route: '' },
          { label: 'Number Input', route: '' },
          { label: 'Select Dropdown', route: '' },
          { label: 'Phone Input', route: '' },
          { label: 'Radio Buttons', route: '' },
          { label: 'Time Picker', route: '' },
          { label: 'File Upload', route: '' },
          { label: 'AutoComplete / Typehead', route: '' },
          { label: 'Form Validation Messages', route: '' },
          { label: 'Form Steps / Wizard', route: '' },
          { label: 'Range', route: '' },
          { label: 'Date', route: '/' },
          { label: 'Search', route: '' },
          { label: 'Form Examples', route: '' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Navigation',
        route: '#',
        children: [
          { label: 'Navbar (Top Navigation)', route: '' },
          { label: 'Sidebar (Collapsible, Static)', route: '' },
          { label: 'Breadcrumbs', route: '' },
          { label: 'Tabs', route: '' },
          { label: 'Pagination', route: '/' },
          { label: 'Drawer / Slide Menu', route: '' },
          { label: 'Dropdown Menu', route: '' },
          { label: 'Mega Menu', route: '/' },
          { label: 'Footer Navigation', route: '' },
          { label: 'Stepper / Progress Tracker', route: '' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Modals & Overlays',
        route: '#',
        children: [
          { label: 'Modal Dialog', route: '' },
          { label: 'Alert Dialog', route: '' },
          { label: 'Confirmation Dialog', route: '' },
          { label: 'Drawer / Offcanvas Panel', route: '' },
          { label: 'Fullscreen Overlay', route: '/' },
          { label: 'Lightbox / Image Preview', route: '' },
          { label: 'Tooltip', route: '' },
          { label: 'Popover', route: '/' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Layouts',
        route: '#',
        children: [
          { label: 'Grid System', route: '' },
          { label: 'Flexbox Wrappers', route: '' },
          { label: 'Cards', route: '' },
          { label: 'Accordion', route: '' },
          { label: 'Collapse Panels', route: '/' },
          { label: 'Split View / Resizable Panes', route: '' },
          { label: 'Masonry Layout', route: '' },
          { label: 'Container / Wrapper', route: '/' },
          { label: 'Spacers & Dividers', route: '/' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Data & Display',
        route: '#',
        children: [
          { label: 'Table / Data Grid', route: '' },
          { label: 'List / Virtual List', route: '' },
          { label: 'Timeline', route: '' },
          { label: 'Calendar', route: '' },
          { label: 'Avatar', route: '/' },
          { label: 'Badge', route: '' },
          { label: 'Tag / Chip', route: '' },
          { label: 'ToolTip', route: '/' },
          { label: 'JSON Viewer / Code Viewer', route: '/' },
          { label: 'Profile Card', route: '/' },
          { label: 'Statistic Widget / Metric Card', route: '' },
      
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Feedback',
        route: '#',
        children: [
          { label: 'Toast / Snackbar', route: '' },
          { label: 'Alerts (Success, Error, Warning, Info)', route: '' },
          { label: 'Loading Spinner', route: '' },
          { label: 'Skeleton Loader', route: '' },
          { label: 'Progress Bar / Circular Progress', route: '/' },
          { label: 'Error Boundary UI', route: '' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Charts & Visualizations',
        route: '#',
        children: [
          { label: 'Line Chart', route: '' },
          { label: 'Bar Chart', route: '' },
          { label: 'Donut Chart', route: '' },
          { label: 'Area Chart', route: '' },
          { label: 'Radar Chart', route: '/' },
          { label: 'Heat Map', route: '' },
          { label: 'Map / Geo Chart', route: '' },
          { label: 'Guege / Meter', route: '/' },
          { label: 'Custom SVG / Canvas Drawings', route: '' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Aunthentication & Security',
        route: '#',
        children: [
          { label: 'Login Forms', route: '' },
          { label: 'Registration Form', route: '' },
          { label: 'Password Reset', route: '' },
          { label: '2FA Input', route: '' },
          { label: 'CATPCHA', route: '/' },
          { label: 'Role-Based UI Components', route: '' },
          { label: 'Session Timeout Modal', route: '' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: 'Utilities / Miscellaneous',
        route: '#',
        children: [
          { label: 'Search Input', route: '' },
          { label: 'Sort Button / Toggle', route: '' },
          { label: 'Filter Panel', route: '' },
          { label: 'Theme Switcher (Dark/Light Mode)', route: '' },
          { label: 'Language Switcher', route: '/' },
          { label: 'Clipboard Button', route: '' },
          { label: 'QR Generator', route: '' },
          { label: 'File Previewer', route: '' },
          { label: 'Custom Icons', route: '/' },
          { label: 'Rating Stars', route: '' },
          { label: 'Share Buttons', route: '' },
          { label: 'Print View Button', route: '' },
        ],
        visible: true,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6 text-secondary-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
</svg>

`,
        label: ' AI / Smart UX',
        route: '#',
        children: [
          { label: 'AI Chatbot UI', route: '' },
          { label: 'Voice Command Button', route: '' },
          { label: 'Smart Suggestions', route: '' },
          { label: 'Speech-to-Text Field', route: '' },
          { label: 'Image Recognition Uploader', route: '/' },
          { label: 'AI Summary Box / Rewriter', route: '' },
          { label: 'Smart Calendar', route: '' },
          { label: 'AI-Powered Search', route: '/' },
          { label: 'Smart Form Filler', route: '' },
          { label: 'AI-Powered Analytics', route: '' },
        ],
        visible: true,
      },
    ],
  },
])

// Filter menu groups based on visibility
const filteredMenuGroups = computed(() =>
  menuGroups.value
    .map((group) => ({
      ...group,
      menuItems: group.menuItems.filter((item) => item.visible),
    }))
    .filter((group) => group.menuItems.length > 0),
)

console.log(menuGroups.value);  // Log the structure of the menu data

</script>

<template>
 


  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-[269px] flex-col overflow-y-hidden bg-primary-300 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen,
    }" ref="target">

    <div class="w-[269px] flex items-center justify-between gap-2 mt-[30px] px-6 py-3 lg:py-3">
      <router-link to="/">
        <h1 class="text-[25px] ml-5 font-bold">
          <span class="text-white"> Vue</span><span class="text-secondary-400">wind</span>
        </h1>
      </router-link>

      <button class="block" @click="sidebarStore.isSidebarOpen = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
    </div>


    <div class="w-[269px] top-0 flex flex-col overflow-y-auto duration-300 ease-linear">
      <!-- Sidebar Menu -->
      <nav class="mt-0 py-1 px-1 lg:px-6 top-0">
        <template v-for="menuGroup in filteredMenuGroups" :key="menuGroup.name">
          <div>
            <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{{ menuGroup.name }}</h3>

            <ul class="mb-6 flex flex-col gap-1.5">
              <SidebarItem v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="index"
                :index="index" />
            </ul>
          </div>
        </template>
      </nav>

    </div>
  </aside>
</template>