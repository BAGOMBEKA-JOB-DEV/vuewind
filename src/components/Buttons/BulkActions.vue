<script setup lang="js">
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
  dropdownOpen.value = false;
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
</script>


<template>
  <div class="flex items-center justify-center">
    <form class="flex items-center">
      <label for="bulk-actions" class="sr-only">{{ label }}</label>

      <div class="relative" ref="dropdownRef">
        <button
          type="button"
          :class="[
            'flex items-center justify-center py-4 px-12 h-13 text-white bg-primary-400',
            {'hover:bg-black': !props.disabled},
            customClasses]"
            @click="toggleDropdown"
            :disabled="props.disabled"
        >
          {{ label }}
          <svg width="24" height="24" class="ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.21967 8.46967C4.51256 8.17678 4.98744 8.17678 5.28033 8.46967L12 15.1893L18.7197 8.46967C19.0126 8.17678 19.4874 8.17678 19.7803 8.46967C20.0732 8.76256 20.0732 9.23744 19.7803 9.53033L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967Z" fill="white"/>
          </svg>
        </button>
        <!-- Dropdown Menu -->
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-48 h-32 bg-white border border-white shadow-lg mr-16"
          role="menu"
          aria-labelledby="bulk-actions-button"
        >
          <div class="flex space-x-4">
            <button
              @click.prevent="handleAction('Action 1')"
              class="hover:bg-secondary-500 flex items-center space-x-2 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 11V17" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 11V17" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Delete Selected</span>
            </button>
          </div>

          <div class="flex space-x-4">
            <button
              @click.prevent="handleAction('Action 2')"
              class="hover:bg-secondary-500 flex items-center space-x-2 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Other action</span>
            </button>
          </div>

          <div class="flex space-x-4">
            <button
              @click.prevent="handleAction('Action 2')"
              class="hover:bg-secondary-500 flex items-center space-x-2 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#127160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Other action</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>



<style scoped>
/* Add any additional custom styles here if needed */
</style>
