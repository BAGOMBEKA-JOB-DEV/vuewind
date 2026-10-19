export default {
  name: "Pagination",
  slug: "pagination",
  category: "Navigation",
  description: "A simple way to explore a little at a time.",
  props: [
    {
      name: "modelValue",
      type: "number",
      default: "1",
    },
    {
      name: "total",
      type: "number",
      default: "1",
    },
  ],
  notes:
    "total is the number of pages rather than the number of records. Navigation is bounded, and the current page is announced with aria-current.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
