<script setup lang="js">
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue';

// Props for dynamic configuration
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  heading: {
    type: String, // Heading text passed from the parent
    default: 'Do you want to delete this?',
    required: true,
  },
  buttons: {
    type: Array,
    default: () => [
      {
        text: 'NO',
        classes: `
          bg-primary-300
          hover:bg-primary-700
          text-white
          xl:lg:md:w-1/2
          h-13
          flex
          items-center
          justify-center
          space-x-2
          px-4
          py-0
        `,
        onClick: null
      },
      {
        text: 'YES',
        classes: `
          bg-red-500
          xl:lg:md:w-1/2
          hover:bg-red-700
          text-white
          h-13
          flex
          items-center
          justify-center
          space-x-2
          px-4
          py-0
        `,
        onClick: null,
      },
    ],
  },
});

// Emits for closing the modal
const emit = defineEmits(['close']);
const handleClose = () => {
  emit('close');
};
</script>

<template>

<div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-40 z-[1050] transition-transform duration-500 ease-out"
    >
  </div>
  <transition v-bind="$attrs" name="slide-in-top" appear enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="transform -translate-y-1/4 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition-transform duration-500 ease-out"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-1/2 opacity-0">
    <div v-if="show" class="fixed right-10 top-[0] mt-60 z-[1050] transform xl:lg:right-100 flex items-center justify-center bg-white text-black justify-between p-4 ml-0 rounded shadow-2xl xl:lg:w-[500px] w-[400px]">

      <!-- Modal Content -->
      <div class="grid grid-cols-1 gap-9 sm:grid-cols-1 xl:lg:w-[500px] w-[400px]">
        <div class="flex flex-col gap-9">
          <form action="#">
            <!-- Dynamic Heading -->
            <div class="ml-[26px] font-light text-[21px] mt-3 text-black">
              {{ heading }}
            </div>
            <div class="p-6.5">
              <div class="mb-0 flex flex-col gap-6 xl:flex-row">
                <!-- Buttons -->
                <ButtonDefault
                  v-for="(button, index) in buttons"
                  :key="index"
                  :customClasses="button.classes"
                  @click.prevent="button.onClick ? button.onClick() : handleClose"
                >
                  <span class="p-0">{{ button.text }}</span>
                </ButtonDefault>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Close Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-5 h-5 absolute top-1 border font-bold rounded-xl border-secondary-900 right-4 top-4 text-secondary-900 transition-transform active:rotate-180 duration-500 ease-out hover:text-secondary-800 cursor-pointer" @click="handleClose">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </transition>
</template>
