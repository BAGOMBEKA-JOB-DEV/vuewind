export default {
  name: "SearchInput",
  slug: "search-input",
  category: "Forms",
  description: "A familiar invitation to find what matters.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "empty",
    },
    {
      name: "label",
      type: "string",
      default: "Search",
    },
    {
      name: "placeholder",
      type: "string",
      default: "Search anything…",
    },
  ],
  notes:
    "Emits updates as you type and a search event on submit. Clearing the field emits an empty string; filtering belongs to the parent application.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
    {
      name: "search",
      payload: "string",
      description: "The submitted search query.",
    },
  ],
};
