<script setup>
import { reactive, ref } from 'vue'
import SmsNotification from '@/components/Notifications/SmsNotification.vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])
function handleClose() {
  emit('close')
}

// Shared state for message details
const messageState = reactive({
  encoding: 'GSM_7BIT',
  length: 0,
  messages: 0,
  perMessage: 160,
  remaining: 160,
})

const saveAsTemplate = ref(false)

// Update logic for the counter
function updateMessageState(text) {
  const length = text.length
  const perMessage = 160
  const messages = Math.ceil(length / perMessage)
  const remaining = perMessage - (length % perMessage || perMessage)
  /*  */
  messageState.length = length
  messageState.messages = messages
  messageState.remaining = remaining
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

const notificationMessage = 'Your Password has been changed.';
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-40 z-[1050] transition-transform duration-500 ease-out">
  </div>

  <SmsNotification :show="showMessage" :message="notificationMessage" @close="showMessage = false" />

  <transition v-bind="$attrs" name="slide-in-right" appear
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="transform translate-x-full opacity-0" enter-to-class="transform translate-x-0 opacity-100"
    leave-active-class="transition-transform duration-300 ease-out"
    leave-from-class="transform translate-x-0 opacity-100" leave-to-class="transform translate-x-full opacity-0">
    <div v-if="show"
      class="fixed right-0 xl:lg:top-1/2 transform
        -translate-y-1/2 bg-white text-black  justify-between p-4
        ml-[300px] xl:lg:mr-10 mr-0 top-[300px]
         rounded shadow-2xl z-[1050] xl:lg:w-[600px] w-[500px] xl:lg:scroll-none overflow-y-auto  rounded-lg xl:lg:max-h-[600px] max-h-[400px]  notification-container">
      <!-- SMSNotification -->


      <div class="grid grid-cols-1 gap-9 sm:grid-cols-1 ">
        <div class="flex flex-col gap-9">
          <form action="#" class="pt-2 pb-6">
            <span class="ml-[26px] font-[700] text-[21px] text-black"> Change Password </span>
            <div class="p-6">
              <div class="mb-4.5 flex flex-col gap-3">
                <div class="pt-6 pb-3">
                  <InputGroup label="Enter Old Password" type="password" placeholder="Enter old password"
                    customClasses="w-full xl:lg:md:w-full rounded-none" />
                </div>
              </div>

              <div class="pb-3">
                <InputGroup label="Enter New Password" type="password" placeholder="Enter new password"
                  customClasses="w-full xl:lg:md:w-full rounded-none" />
              </div>

              <div class="pt-3 pb-6">
                <InputGroup label="Confirm New Password" type="password" placeholder="Confirm new password"
                  customClasses="w-full xl:lg:md:w-full rounded-none" />
              </div>


              <ButtonDefault @click.prevent="showNotification" customClasses="
                w-full
                bg-secondary-400
                hover:bg-primary-700
                text-white
                xl:lg:mt-0
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-5 h-5 absolute top-1 border font-bold rounded-xl border-secondary-900 right-4 
        top-4 text-secondary-900 hover:text-secondary-800 cursor-pointer transition-transform active:rotate-180 duration-500 ease-out"
        @click="handleClose">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </transition>
</template>
