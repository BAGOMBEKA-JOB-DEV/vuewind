<script setup lang="js">
import { useSidebarStore } from '@/stores/sidebar'
import { useRoute } from 'vue-router'
import SidebarDropdown from './SidebarDropdown.vue'

const sidebarStore = useSidebarStore()

const props = defineProps(['item', 'index'])
const currentPage = useRoute().name

const handleItemClick = () => {
  const pageName = sidebarStore.page === props.item.label ? '' : props.item.label
  sidebarStore.page = pageName

  if (props.item.children) {
    return props.item.children.some((child) => sidebarStore.selected === child.label)
  }
}
</script>


<template>
  <li>
    <router-link
      :to="item.route"
      class="group mt-4  w-auto text-[20px] relative flex items-center gap-2.5 rounded-sm py-2 px-4  font-semibold  text-bodydark1 duration-300 ease-in-out active:bg-graydark dark:hover:bg-meta-4"
      @click.prevent="handleItemClick"
      :class="{
        'bg-graydark dark:bg-meta-4 ': sidebarStore.page === item.label
      }"
    >
      <span v-html="item.icon"></span>

      {{ item.label }}
<svg
  v-if="item.children"
  class="absolute right-8 font-bold  top-1/2 -translate-y-1/2 text-secondary-400 transition-transform duration-300 ease-in-out"
  :class="{ 'rotate-90 ': sidebarStore.page === item.label }"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.25 4.5L15.75 12L8.25 19.5"
    stroke="currentColor"
    stroke-width="1"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

    </router-link>

    <!-- Dropdown Menu Start -->
    <div class="translate  overflow-hidden" v-show="sidebarStore.page === item.label">
      <SidebarDropdown
        v-if="item.children"
        :items="item.children"
        :currentPage="currentPage"
        :page="item.label"
      />
      <!-- Dropdown Menu End -->
    </div>
  </li>
</template>
