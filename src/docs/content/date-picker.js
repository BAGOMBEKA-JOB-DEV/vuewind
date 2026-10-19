export default {
  name: "DatePicker",
  slug: "date-picker",
  category: "Forms",
  description: "A date, without the unnecessary complication.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "empty",
    },
    {
      name: "label",
      type: "string",
      default: "Date",
    },
    {
      name: "min",
      type: "string",
      default: "—",
    },
    {
      name: "max",
      type: "string",
      default: "—",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Uses the browser’s native date picker and emits YYYY-MM-DD. Native mobile pickers and keyboard entry remain available.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
