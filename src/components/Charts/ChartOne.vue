<script setup lang="js">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import DatePickerOne from '../Forms/DatePicker/DatePickerOne.vue'
import ButtonDefault from '../Buttons/ButtonDefault.vue'

const chart = ref(null)

const chartData = {
  series: [
    {
      name: 'TEAM A',
      type: 'area',
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 80, 27, 60, 50],
    },
  ],
}

const apexOptions = {
  chart: {
    height: 350,
    type: 'area',
  },

  stroke: {
    curve: 'smooth',
    width: 3,
    colors: ['#20AC92'],
  },
  fill: {
    type: 'solid',
    opacity: [0.35, 1],
    colors: ['#20AC92'],
  },
  markers: {
    size: 6,
    colors: ['#20AC92'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: {
      size: 8,
    },
  },
  labels: [
    'Dec 01',
    'Dec 02',
    'Dec 03',
    'Dec 04',
    'Dec 05',
    'Dec 06',
    'Dec 07',
    'Dec 08',
    'Dec 09',
    'Dec 10',
    'Dec 11',
  ],
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: false,
  },
}
</script>

<template>
  <div
    class="border border-stroke bg-white px-5 pt-7.5 pb-5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8"
  >
    <div class="flex flex-wrap w-full items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full justify-between flex-nowrap">
        <div class="items-start flex flex-nowrap w-full">
          <h2 class="py-1 text-lg font-medium text-black whitespace-nowrap">SMS Sent</h2>
        </div>
      </div>
    </div>
    <div>
      <div id="chartOne" class="-ml-5">
        <VueApexCharts
          type="area"
          height="350"
          :options="apexOptions"
          :series="chartData.series"
          ref="chart"
        />
      </div>
    </div>
    <li class="list-disc list-disc-custom">SMS sent</li>
  </div>
</template>
