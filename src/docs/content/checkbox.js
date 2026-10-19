export default {
  name: "Checkbox",
  slug: "checkbox",
  category: "Forms",
  description: "A clear yes for independent choices.",
  props: [
    {
      name: "modelValue",
      type: "boolean",
      default: "false",
    },
    {
      name: "label",
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
    "Uses a real checkbox and a wrapping label. Use v-model for a boolean choice; use RadioGroup for mutually exclusive options.",
  keyboard: "Tab focuses the checkbox. Space toggles the selection.",
  events: [
    {
      name: "update:modelValue",
      payload: "boolean",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
