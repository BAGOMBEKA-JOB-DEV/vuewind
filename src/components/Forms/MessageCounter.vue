
<script setup lang="js">
import { defineProps } from 'vue';


const props = defineProps({
  messageState: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full gap-4 h-18 sm:w-auto m lg:w-auto h-15 xl:lg:md:pr-20 xl:lg:md:pl-20
     sm:pr-2 sm:pl-2  xl:lg:md:mt-4 xl:lg:md:mb-4 dark:text-black dark:bg-secondary-200
      bg-teal-50 rounded-md px-4 py-2 flex flex-wrap justify-between items-center
       text-sm font-medium text-gray-800"
  >
    <span><strong>Encoding:</strong> {{ messageState.encoding }}</span>
    <span><strong>Length:</strong> {{ messageState.length }}</span>
    <span><strong>Messages:</strong> {{ messageState.messages }}</span>
    <span><strong>Per Message:</strong> {{ messageState.perMessage }}</span>
    <span><strong>Remaining:</strong> {{ messageState.remaining }}</span>
  </div>
</template>
