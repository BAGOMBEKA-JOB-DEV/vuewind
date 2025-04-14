<script setup>
import { ref } from 'vue';
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue';
import SmsNotification from '@/components/Notifications/SmsNotification.vue';
import Checkbox from '@/components/Forms/Checkboxes/Checkbox.vue';
import InputGroup from '@/components/Forms/InputGroup.vue';

defineProps({
  show: {
    required: true,
  },
});

const MakeActive = ref(false);

const emit = defineEmits(['close']);
function handleClose() {
  emit('close');
}

// Show notification message
const showMessage = ref(false);
let notificationTimeout = null;

const showNotification = () => {
  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }

  showMessage.value = true;

  notificationTimeout = setTimeout(() => {
    showMessage.value = false;
    notificationTimeout = null;
  }, 2000);
};

const notificationMessage = 'Password has been changed successfully';
</script>

<template>
   <div v-if="show" class="fixed inset-0 bg-black bg-opacity-40 z-[1050] transition-transform duration-500 ease-out">
  </div>

  <transition v-bind="$attrs" name="slide-in-top" appear enter-active-class="transition-transform duration-500 ease-out "
    enter-from-class="transform -translate-y-1/4 opacity-0  " enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition-transform duration-500 ease-out"
    leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform -translate-y-1/2 opacity-0">

    <div v-if="show" class="fixed right-10 top-[0] mt-15 z-[1050]  transform  xl:lg:right-100 flex items-center justify-center
          -translate-y bg-white text-black justify-between p-4
          ml-0
           rounded shadow-2xl  xl:lg:w-[550px] w-[400px]  xl:lg:h-auto ">
      <!-- SMSNotification -->
      <SmsNotification :show="showMessage" :message="notificationMessage" @close="showMessage = false" />

      <!-- ====== Form Layout Section Start -->
      <div class="grid grid-cols-1 gap-9 sm:grid-cols-1 xl:lg:w-[550px] w-[400px] ">
        <div class="flex flex-col gap-9">
            <form action="#">
            <span class="ml-[26px] font-light text-[21px] text-black">
              Change Password
            </span>
          <div class="p-6.5">


            <div class="mb-3 flex flex-col gap-6 xl:flex-row">
                <InputGroup label="New API Password" type="text" placeholder="Enter Password."
                customClasses="w-full xl:lg:md:w-full rounded-none" />

            </div>

            <div class="mb-3 flex flex-col gap-6 xl:flex-row">
                <InputGroup label="Confirm New API Password" type="text" placeholder="Conform New API Password"
                customClasses="w-full xl:lg:md:w-full rounded-none" />

            </div>
        
      
             <ButtonDefault @click.prevent="showNotification" customClasses="
                  bg-secondary-400
                  w-full
                  hover:bg-secondary-600
                  text-white
                  xl:lg:mt-2
                  xl:lg:md:mb-4
                  mb-4
                  h-13
                  lg:xl:w-full
                  lg:xl:float-right
                  flex
                  items-center
                  justify-center
                  space-x-2
                  px-4
                  py-0
                ">
                <span class="p-0">Save Password</span>
              </ButtonDefault>

          </div>
        </form>


        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 absolute top-1 border font-bold rounded-xl
        transition-transform active:rotate-180 duration-500 ease-out
        border-secondary-900 right-4 top-4 text-secondary-900 hover:text-secondary-800 cursor-pointer"
        @click="handleClose">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </div>
  </transition>
</template>
