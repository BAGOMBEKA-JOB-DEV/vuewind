<script setup>
defineProps({
  name: { type: String, default: "box" },
  size: { type: [Number, String], default: 18 },
});
const paths = {
  arrow: "M7 17 17 7M7 7h10v10",
  right: "M5 12h14m-6-6 6 6-6 6",
  chevron: "m9 5 7 7-7 7",
  down: "m6 9 6 6 6-6",
  search: "m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
  check: "m5 12 4 4L19 6",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M12 5v14M5 12h14",
  copy: "M9 9h11v11H9zM5 15H3V3h12v2",
  code: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16",
  sun: "M12 3V1m0 22v-2M3 12H1m22 0h-2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  moon: "M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13",
  github:
    "M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 3.3-.4 6.5-1.6 6.5-7a5.5 5.5 0 0 0-1.5-3.8A5 5 0 0 0 19.4 3S18 2.6 15 4a13 13 0 0 0-6 0C6 2.6 4.6 3 4.6 3A5 5 0 0 0 4.5 6.7 5.5 5.5 0 0 0 3 10.5c0 5.4 3.2 6.6 6.5 7-.6.6-.6 1.2-.5 2V23",
  book: "M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2z",
  box: "m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5m-9 5v9M7.5 5.5l9 5",
  grid: "M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z",
  layers: "m12 3 10 5-10 5L2 8zm-10 9 10 5 10-5M2 16l10 5 10-5",
  palette:
    "M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1-3.7c-1.6-1-1-3.3 1-3.3h2a3 3 0 0 0 3-3c0-4.4-4-8-9-8M7 9h.01M10 6h.01M15 7h.01M6 14h.01",
  command:
    "M9 7V5a2 2 0 1 0-2 2h10a2 2 0 1 0-2-2v14a2 2 0 1 0 2-2H7a2 2 0 1 0 2 2z",
  menu: "M4 6h16M4 12h16M4 18h16",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
  mail: "M3 5h18v14H3zM3 5l9 7 9-7",
  user: "M20 21v-2a8 8 0 0 0-16 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  lock: "M5 10h14v11H5zm3 0V7a4 4 0 0 1 8 0v3",
  eye: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12m13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  upload: "M12 16V3m-5 5 5-5 5 5M3 16v5h18v-5",
  download: "M12 3v13m-5-5 5 5 5-5M3 17v4h18v-4",
  sparkles:
    "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5zM21 2v4m-2-2h4",
  shield: "m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6zm-5 10 3 3 7-7",
  bolt: "M13 2 3 14h8l-1 8L21 10h-8z",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8",
  star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2l-5-4.9 6.9-1z",
  settings:
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1z",
  chart: "M4 3v18h17M8 16v-5m5 5V7m5 9V4",
  terminal: "m4 6 6 6-6 6m9 0h7",
  info: "M12 11v6m0-10h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
  calendar: "M3 5h18v16H3zM7 2v6m10-6v6M3 11h18",
  minus: "M5 12h14",
  external: "M14 3h7v7m0-7L10 14M10 3H3v18h18v-7",
  history: "M3 12a9 9 0 1 0 3-7L3 8m0-5v5h5m4-1v5l3 2",
  wind: "M3 8h12a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h6a3 3 0 1 1-3 3",
  folder: "M3 5h6l2 3h10v13H3z",
  file: "M4 2h10l6 6v14H4zm10 0v6h6M8 13h8m-8 4h6",
};
</script>
<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.65"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.box" />
  </svg>
</template>
