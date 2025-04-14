<script setup lang="js">
import { useRoute } from "vue-router";

const props = defineProps({
  title: String, // Navbar title
  navLinks: Array, // Navigation links with labels and routes
});

const route = useRoute(); // To detect the active route
</script>


<template>
  <nav class="flex items-center h-25  border-b border-b-primary-200 pt-7  px-2 relative ">
    <!-- Navbar Title -->
   

    <!-- Navigation Links -->
    <div class="flex space-x-20 text-xl p-4  xl:lg:ml-20  ml-8">
      <!-- Using router-link for each navigation link -->
      <router-link v-for="(link, index) in navLinks" :key="index" :to="link.route"
        class="text-black transition text-[20px] pb-10 px-20" :class="[
          route.path === link.route ? ' pb-10 px-20  text-secondary-400 transition  border-b-[3px] border-b-secondary-400 ' : ''
        ]">
        {{ link.label }}
      </router-link>
    </div>
  </nav>
</template>
