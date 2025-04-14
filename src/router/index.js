import { createRouter, createWebHistory } from 'vue-router'

import ContactListsView from '@/views/Manage/ContactListsView.vue'

const routes = [
  //use the login component
  {
    path: '/',
    name: 'contact',
    component: ContactListsView,
    meta: {
      title: 'contacts',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
})


export default router
