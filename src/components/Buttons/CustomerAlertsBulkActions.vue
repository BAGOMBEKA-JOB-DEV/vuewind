<script setup lang="js">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SmsNotification from '../Notifications/SmsNotification.vue';

const props = defineProps({
    label: {
        default: 'Bulk Actions',
    },
    customClasses: {
        default: '',
    },
    disabled: {
        default: false,
    },
});

const emit = defineEmits(['action']);

const dropdownOpen = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = () => {
    if (!props.disabled) {
        dropdownOpen.value = !dropdownOpen.value;
    }
};

const handleAction = (action) => {
    emit('action', action);
    dropdownOpen.value = true;
};

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        dropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

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

// Show notification message
const showMessage1 = ref(false);
let notificationTimeout1 = null;

const showNotification1 = () => {
    if (notificationTimeout1) {
        clearTimeout(notificationTimeout1);
    }

    showMessage1.value = true;

    notificationTimeout1 = setTimeout(() => {
        showMessage1.value = false;
        notificationTimeout1 = null;
    }, 2000);
};

// Show notification message
const showMessage2 = ref(false);
let notificationTimeout2 = null;

const showNotification2 = () => {
    if (notificationTimeout2) {
        clearTimeout(notificationTimeout2);
    }

    showMessage2.value = true;

    notificationTimeout2 = setTimeout(() => {
        showMessage2.value = false;
        notificationTimeout2 = null;
    }, 2000);
};

const Activate = 'Notification(s) activated Successfully!.';
const Deactivate = 'Notification(s) Deactivated Successfully!.';
const Delete = 'Notification(s) Deleted Successfully!.';
</script>


<template>

    <!-- SMSNotification -->
    <SmsNotification :show="showMessage" :message="Activate" @close="showMessage = false" />
    <SmsNotification class="bg-red-600" :show="showMessage1" :message="Deactivate" @close="showMessage1 = false" />
    <SmsNotification class="bg-red-600" :show="showMessage2" :message="Delete" @close="showMessage2 = false" />
    <div v-bind="$attrs" class="flex items-center justify-center">
        <form class="flex items-center">
            <label for="bulk-actions" class="sr-only">{{ label }}</label>

            <div class="relative" ref="dropdownRef">
                <button type="button" :class="[
                    'flex items-center justify-center py-4 px-12 h-13 text-white bg-primary-600',
                    { 'hover:bg-primary-300': !props.disabled },
                    customClasses]" @click="toggleDropdown" :disabled="props.disabled">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 border border-secondary-500 rounded-sm mr-3 text-secondary-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                    {{ label }}
                </button>
                <!-- Dropdown Menu -->
                <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-100 h-32
                 bg-white border border-white shadow-2xl mr-0 
          
          " role="menu" aria-labelledby="bulk-actions-button">
                    <div class="flex space-x-4">
                        <button @click.prevent="showNotification"
                            class="hover:bg-gray-700 hover:text-gray-300 flex items-center space-x-2 block w-full text-left px-4 py-2 text-sm text-gray-700"
                            role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span>Activate Selected Notification</span>
                        </button>
                    </div>

                    <div class="flex space-x-4">
                        <button @click.prevent="showNotification1"
                            class="hover:bg-gray-700 hover:text-gray-300 flex items-center space-x-2 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>

                            <span>Deactivate Selected Notifications</span>
                        </button>
                    </div>

                    <div class="flex space-x-4">
                        <button @click.prevent="showNotification2"
                            class="hover:bg-gray-700 hover:text-gray-300 flex items-center space-x-2 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                            <span>Delete Selected Notifications</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
