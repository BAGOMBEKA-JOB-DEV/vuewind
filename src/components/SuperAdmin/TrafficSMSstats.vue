<script setup lang="js">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const chart = ref(null)

// Chart Data
const chartData = {
  series: [
    {
      name: 'TEAM A',
      type: 'area',
      data: [5000, 7000, 10000, 4000, 6000, 4000, 7000, 8000, 2000, 10000, 11000, 12000],
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
    opacity: [0.35],
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
    '12AM - 2AM',
    '2AM - 4AM',
    '4AM - 6AM',
    '6AM - 8AM',
    '8AM - 10AM',
    '10AM - 12AM',
    '12AM - 2PM',
    '2PM - 4PM',
    '4PM - 6PM',
    '6PM - 8PM',
    '8PM - 10PM',
    '10PM - 12AM',
  ],
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    min: 0,
  },
}

</script>

<template>
  <div
    class="border border-stroke bg-white px-5 pt-7.5 pb-5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8"
  >
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full justify-between">
        <h1 class="py-1 text-lg font-bold text-black whitespace-nowrap">
          Last 24 Hour SMS Traffic Stats
        </h1>
        <h2 class="font-semibold whitespace-nowrap">SMS Sent</h2>
      </div>
    </div>

    <div id="chartOne" class="-ml-5">
      <VueApexCharts
        type="area"
        height="400"
        :options="apexOptions"
        :series="chartData.series"
        ref="chart"
      />
    </div>
  </div>
</template>
