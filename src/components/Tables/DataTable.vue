<template>
  <div class="overflow-x-auto">
    <table class="min-w-full">
      <thead>
        <tr class="bg-secondary-200 dark:bg-meta-4">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="p-4 text-center text-sm font-bold xsm:text-sm text-black whitespace-nowrap"
          >
            <div v-if="header.selectable">
              <Checkbox v-model="selectAllChecked" />
            </div>
            <div v-else>
              {{ header.label }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in paginatedData"
          :key="rowIndex"
          class="border-b text-black font-normal border-stroke dark:border-strokedark"
        >
          <td
            v-for="(header, index) in headers"
            :key="index"
            class="p-4 text-center text-sm h-[60px] whitespace-nowrap"
          >
            <template v-if="header.key === 'dlrstatusreseller'">
              <p :class="{
                    'text-green-500 border rounded bg-green-200 flex gap-2 justify-start': row.dlrstatusreseller === 'Accepted',
                    'text-red-500 border border-red-200 bg-red-100 flex gap-2 justify-start': row.dlrstatusreseller === 'Failed',
                    'text-blue-500 border border-green-200 bg-blue-100 flex gap-2 justify-start': row.dlrstatusreseller === 'Completed',
                    'text-black-500 border border-black-500 bg-gray-300 flex gap-2 justify-start': row.dlrstatusreseller === 'Pending',
                    'text-black': true,
                    'dark:text-white': true,
                    'sm:block': true,
                    'rounded-full': true,
                    'px-2': true,
                    'py-1': true,
                  }">
                <span class="flex items-center gap-2">
                  <svg v-if="row.dlrstatusreseller === 'Accepted'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#28D7B7" />
                  </svg>
                  <svg v-if="row.dlrstatusreseller === 'Completed'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" class="fill-blue-500"/>
                  </svg>
                  <svg v-if="row.dlrstatusreseller === 'Failed'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e"/>
                  </svg>
                  <svg v-if="row.dlrstatusreseller === 'Pending'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#a0aec0"/>
                  </svg>
                  <span>{{ row.dlrstatusreseller }}</span>
                </span>
              </p>
            </template>

            <template v-else-if="header.key === 'status'">
              <p :class="{
                    'text-blue-500 border rounded bg-blue-200 flex gap-2 justify-start': row.status === 'Paused',
                    'text-red-500 border border-red-200 bg-red-100 flex gap-2 justify-start': row.status === 'Failed',
                    'text-blue-500 border border-green-200 bg-blue-100 flex gap-2 justify-start': row.status === 'Completed',
                    'text-black-500 border border-black-500 bg-gray-300 flex gap-2 justify-start': row.status === 'Pending',
                    'text-black': true,
                    'dark:text-white': true,
                    'sm:block': true,
                    'rounded-full': true,
                    'px-2': true,
                    'py-1': true,
                  }">
                <span class="flex items-center gap-2">
                  <svg v-if="row.status === 'Paused'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468"  class="fill-blue-500" />
                  </svg>
                  <svg v-if="row.status === 'Completed'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#28D7B7"/>
                  </svg>
                  <svg v-if="row.status === 'Failed'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e"/>
                  </svg>
                  <svg v-if="row.status === 'Pending'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#a0aec0"/>
                  </svg>
                  <span>{{ row.status }}</span>
                </span>
              </p>
            </template>


            <template v-else-if="header.key === 'senderstatus'">
              <p :class="{
                    'text-green-500 border rounded bg-green-200 flex gap-2 justify-start': row.senderstatus === 'Approved',
                    'text-red-500 border border-red-200 bg-red-100 flex gap-2 justify-start': row.senderstatus === 'Rejected',
                    'text-gray-500 border border-gray-200 bg-gray-100 flex gap-2 justify-start': row.senderstatus === 'Pending',

                    'text-black': true,
                    'dark:text-white': true,
                    'sm:block': true,
                    'rounded-full': true,
                    'px-2': true,
                    'py-1': true,
                  }">
                <span class="flex items-center gap-2">
                  <svg v-if="row.senderstatus === 'Approved'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468"  fill="#38a169" />
                  </svg>
                  <svg v-if="row.senderstatus === 'Rejected'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#e53e3e"/>
                  </svg>
                  <svg v-if="row.senderstatus === 'Pending'" width="10" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.21125" cy="3.99982" r="3.98468" fill="#a0aec0"/>
                  </svg>

                  <span>{{ row.senderstatus }}</span>
                </span>
              </p>
            </template>

            <template v-else-if="header.key === 'selectable'">
              <Checkbox v-model="row.checked" />
            </template>

            <template v-else-if="header.key === 'action'">
              <div class="flex justify-end">
                  <button @click="togglePlay(row)">
                    <svg v-if="row.playing" width="55" height="40" viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.999999C0 0.447714 0.447715 0 1 0H54.45V40H1C0.447717 40 0 39.5523 0 39V0.999999Z" fill="#42445A"/>
                      <path d="M22 10L40 20L22 30V10Z" fill="#1FF3CD"/>
                    </svg>
                    <svg v-else width="55" height="40" viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0.999999C0 0.447714 0.447715 0 1 0H54.45V40H1C0.447717 40 0 39.5523 0 39V0.999999Z" fill="#42445A"/>
                      <path d="M19.7266 13.5C19.7266 12.9477 20.1743 12.5 20.7266 12.5H24.3516C24.9038 12.5 25.3516 12.9477 25.3516 13.5V26.5C25.3516 27.0523 24.9038 27.5 24.3516 27.5H20.7266C20.1743 27.5 19.7266 27.0523 19.7266 26.5V13.5Z" fill="#1FF3CD"/>
                      <path d="M29.1016 13.5C29.1016 12.9477 29.5493 12.5 30.1016 12.5H33.7266C34.2788 12.5 34.7266 12.9477 34.7266 13.5V26.5C34.7266 27.0523 34.2788 27.5 33.7266 27.5H30.1016C29.5493 27.5 29.1016 27.0523 29.1016 26.5V13.5Z" fill="#1FF3CD"/>
                    </svg>
                  </button>
                  <button class="hover:fill-secondary-300" aria-label="Delete" @click="toggleDropdown(row)">
                    <svg width="55" height="40" viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="54.45" height="40" rx="1.65" fill="#24C2A5" class="hover:fill-secondary-600" />
                      <path
                        d="M24.75 24.9503L29.7 20.0003L24.75 15.0503"
                        stroke="#2A2A45"
                        stroke-width="1.65"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div v-if="showDropdown === row" class="absolute mt-12 w-[300px] h-25 p-4 bg-white shadow-2xl bg-black">
                    <ul>
                      <li class="flex px-4 py-2 text-gray-500 hover:bg-primary-400 cursor-pointer">
                        <button>
                          <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            Delete Job
                          </div>
                        </button>
                      </li>
                      <li class="flex px-4 py-2 text-gray-500 hover:bg-primary-400 cursor-pointer">
                        <button @click.prevent="showJobDetailsModal">
                          <div class="flex gap-2">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.25 2.5C5.00736 2.5 4 3.50736 4 4.75V20.25C4 21.4926 5.00736 22.5 6.25 22.5H17.75C18.9926 22.5 20 21.4926 20 20.25V4.75C20 3.50736 18.9926 2.5 17.75 2.5H6.25ZM7.75 6.5H16.25C16.6642 6.5 17 6.83579 17 7.25C17 7.66421 16.6642 8 16.25 8H7.75C7.33579 8 7 7.66421 7 7.25C7 6.83579 7.33579 6.5 7.75 6.5ZM7 17.25C7 16.8358 7.33579 16.5 7.75 16.5H16.25C16.6642 16.5 17 16.8358 17 17.25C17 17.6642 16.6642 18 16.25 18H7.75C7.33579 18 7 17.6642 7 17.25ZM7.75 11.5H16.25C16.6642 11.5 17 11.8358 17 12.25C17 12.6642 16.6642 13 16.25 13H7.75C7.33579 13 7 12.6642 7 12.25C7 11.8358 7.33579 11.5 7.75 11.5Z" fill="#636363"/>
                            </svg>
                            Job details
                          </div>
                        </button>
                      </li>
                    </ul>
                    <JobDetailsModal
                      :show="showPopup"
                      @close="showPopup = false"
                    />
                  </div>
                </div>
             </template>

            <template v-else>
              {{ row[header.key] }}
            </template>

          </td>

        </tr>
      </tbody>

    </table>
    <p v-if="paginatedData.length === 0" class="text-center mt-4 text-red-500">
      No data available.
    </p>

    <!-- Pagination Controls -->
    <div class="flex justify-center items-center gap-2 mt-4 text-sm">
        <!-- Go to First Page -->
        <button
          @click="goToFirstPage"
          class="flex items-center justify-center bg-gray-2 text-white w-6 h-6 rounded-full border-2 border-black"
          :disabled="currentPage === 1"
        >
          <svg
            width="24"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="['transition-transform', currentPage === 1 ? 'rotate-180' : 'rotate-0']"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Go to Previous Page -->
        <button
          @click="goToPreviousPage"
          class="flex items-center justify-center bg-gray-2 text-white w-6 h-6 rounded-full"
          :disabled="currentPage === 1"
        >
          <svg
            width="24"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="['transition-transform', currentPage === 1 ? 'rotate-180' : 'rotate-0']"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Current Page Label -->
        <span class="text-black dark:text-white bg-gray-3 p-2 rounded-xl">
          Page {{ currentPage }} of {{ totalPages }}
        </span>

        <!-- Go to Next Page -->
        <button
          @click="goToNextPage"
          class="flex items-center justify-center bg-gray-3 text-black w-6 h-6 rounded-full"
          :disabled="currentPage === totalPages"
        >
          <svg
            width="22"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="['transition-transform', currentPage === totalPages ? 'rotate-180' : 'rotate-0']"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Go to Last Page -->
        <button
          @click="goToLastPage"
          class="flex items-center justify-center bg-gray-2 text-white w-6 h-6 rounded-full border-2 border-black"
          :disabled="currentPage === totalPages"
        >
          <svg
            width="22"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="['transition-transform', currentPage === totalPages ? 'rotate-180' : 'rotate-0']"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="black"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Checkbox from '@/components/Forms/Checkboxes/Checkbox.vue'
import JobDetailsModal from '@/views/Manage/JobDetailsModal.vue';


const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 5,
  },
})

const emit = defineEmits(['update:selected'])

const currentPage = ref(1)
const selectAllChecked = ref(false)

const showDropdown = ref(null)

function toggleDropdown(index) {
  showDropdown.value = showDropdown.value === index ? null : index
}

const showPopup = ref(false);
const showJobDetailsModal = () => {
  showPopup.value = true;
};

const playing = ref(true);

function togglePlay(row) {
  row.playing = !row.playing;
};

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  return props.data.slice(start, start + props.itemsPerPage)
})

const totalPages = computed(() => Math.ceil(props.data.length / props.itemsPerPage))

//Checkbox handler
watch(
  () => selectAllChecked.value,
  (newValue) => {
    props.data.forEach((item) => (item.checked = newValue))
    emit('update:selected', props.data.filter((item) => item.checked))
  }
)


watch(
  () => props.data,
  () => {
    selectAllChecked.value = props.data.length > 0 && props.data.every((item) => item.checked)
  },
  { deep: true }
)

// Pagination
function goToFirstPage() {
  currentPage.value = 1
}

function goToPreviousPage() {
  if (currentPage.value > 1) currentPage.value--
}

function goToNextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function goToLastPage() {
  currentPage.value = totalPages.value
}
</script>
