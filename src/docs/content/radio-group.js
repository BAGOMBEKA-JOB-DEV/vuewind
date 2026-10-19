export default {
  name: "RadioGroup",
  slug: "radio-group",
  category: "Forms",
  description: "One choice from a clearly related set.",
  props: [
    {
      name: "modelValue",
      type: "string or number",
      default: "empty",
    },
    {
      name: "label",
      type: "string",
      default: "—",
    },
    {
      name: "options",
      type: "array",
      default: "[]",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Native radio inputs share a unique name. Use label and value objects when display text differs from stored data.",
  keyboard: "Tab enters the group. Arrow keys move between choices.",
  events: [
    {
      name: "update:modelValue",
      payload: "string or number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
