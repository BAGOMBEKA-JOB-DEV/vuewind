<template>
    <transition
      name="slide-in-right"
      appear
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="transform translate-x-full opacity-0"
      enter-to-class="transform translate-x-0 opacity-100"
      leave-active-class="transition-transform duration-300 ease-out"
      leave-from-class="transform translate-x-0 opacity-100"
      leave-to-class="transform translate-x-full opacity-0"
    >
      <div
        v-if="show"
        class="fixed right-0 top-0 mt-8 mr-8 bg-green-500 text-white flex items-center justify-between p-4 rounded shadow-lg 
        z-[1050] w-[500px] h-[59px] notification-container"
      >
        <p class="text-sm font-medium">
            {{ message }}
        </p>
        <button @click.prevent="handleClose" class="text-white text-lg focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
          stroke="currentColor" class="size-6 transition-transform active:rotate-180 duration-500 ease-out">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </button>
      </div>
    </transition>
  </template>

  <script setup>
  defineProps({
    show: {
      type: Boolean,
      required: true,
    },
    message: {
    type: String,
    required: true,
  },
  });

  const emit = defineEmits(['close']);
function handleClose() {
  emit('close');
}
  </script>
