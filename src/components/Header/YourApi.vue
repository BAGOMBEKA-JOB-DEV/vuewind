<script setup lang="js">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ButtonDefault from '@/components/Buttons/ButtonDefault.vue'
import SmsNotification from '../Notifications/SmsNotification.vue';
import ChangeApiPasswordModal from './Modals/ChangeApiPasswordModal.vue';


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

const notificationMessage = 'Copied to Clipboard!!.';

const apiId = ref("API124790960378");
const encryptionKey = ref("API124790960378");


const copyToClipboard = (text, buttonRef) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopiedFeedback(buttonRef);
        }).catch(err => {
            console.error("Clipboard write failed:", err);
        });
    } else {
        // Fallback for unsupported browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
            // document.execCommand("copy");
            showCopiedFeedback(buttonRef);
        } catch (err) {
            console.error("Fallback copy failed:", err);
        }
        document.body.removeChild(textArea);
    }
};

const showCopiedFeedback = (buttonRef) => {
    if (buttonRef) {
        const originalContent = buttonRef.innerHTML;
        buttonRef.innerHTML = "Copied";
        showNotification();
        setTimeout(() => {
            buttonRef.innerHTML = originalContent;
        }, 2000);
    }
};


//display the change api password modal
const ChangePassword = ref(false);
const ChangePasswordNow = () => {
    ChangePassword.value = true;
}
</script>

<template>
    <ChangeApiPasswordModal :show="ChangePassword" @close="ChangePassword = false" />
    <SmsNotification :show="showMessage" :message="notificationMessage" @close="showMessage = false" />
    <DefaultLayout>
        <!-- ====== Form Layout Section Start -->
        <div class="grid grid-cols-1 gap-9 sm:grid-cols-1">
            <div class="flex flex-col gap-9">
                <div class="p-3">
                    <div class="xl:lg:py-6 xl:lg:w-[700px] w-full space-y-4">
                        <!-- API ID -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Your API ID</label>
                            <div class="relative mt-1 flex items-center">
                                <input type="text"
                                    class="w-full p-3 text-gray-900 bg-green-100 border rounded-md outline-none"
                                    v-model="apiId" readonly />

                                <button
                                    class="absolute xl:lg:w-40 right-2 px-4 flex gap-6 py-2 text-white bg-teal-400 rounded-md hover:bg-teal-500"
                                    @click="copyToClipboard(apiId, $event.target)">
                                    copy
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Encryption Key -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Encryption Key</label>
                            <div class="relative mt-1 flex items-center">
                                <input type="text"
                                    class="w-full p-3 pr-16 text-gray-900 bg-green-100 border rounded-md outline-none"
                                    v-model="encryptionKey" readonly />

                                <button
                                    class="absolute xl:lg:w-40 gap-6 flex right-2 px-4 py-2 text-white bg-teal-400 rounded-md hover:bg-teal-500"
                                    @click="copyToClipboard(encryptionKey, $event.target)">
                                    copy
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Send SMS Button -->
                    <ButtonDefault route="#" @click.prevent="ChangePasswordNow" customClasses="
                        bg-primary-400
                        hover:bg-primary-900
                        text-white
                        h-13
                        mt-4
                        w-full
                        xl:lg:mt-4
                        lg:xl:w-[700px]
                        flex
                        px-4
                        py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <span>Change API Password</span>
                    </ButtonDefault>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
