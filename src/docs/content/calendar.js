export default {
  name: "Calendar",
  slug: "calendar",
  category: "Forms",
  description: "A familiar month, with a date to look forward to.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "empty",
    },
    {
      name: "label",
      type: "string",
      default: "Choose a date",
    },
  ],
  notes:
    "Emits a local YYYY-MM-DD date without converting it to UTC. Uses a labeled group of native buttons; it does not claim the complete ARIA date-grid pattern.",
  keyboard:
    "Tab moves through the month controls and available dates. Enter or Space selects a date.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
