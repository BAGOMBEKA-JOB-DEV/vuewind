<script setup>
import VwTimeline from "../../lib/components/VwTimeline.vue";
const items = [
  {
    title: "A new beginning",
    description: "Project created and ready for ideas.",
    time: "9:00 AM",
  },
  {
    title: "Finding our direction",
    description: "Design tokens and components are in place.",
    time: "10:30 AM",
  },
  {
    title: "Something worth sharing",
    description: "First preview shared with the team.",
    time: "11:45 AM",
  },
];
</script>
<template><VwTimeline :items="items" /></template>
