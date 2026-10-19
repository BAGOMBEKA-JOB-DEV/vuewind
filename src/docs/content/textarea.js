export default {
  name: "Textarea",
  slug: "textarea",
  category: "Forms",
  description: "Give longer thoughts a comfortable place to land.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "empty",
    },
    {
      name: "label",
      type: "string",
      default: "—",
    },
    {
      name: "rows",
      type: "number",
      default: "4",
    },
    {
      name: "error",
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
    "The native textarea remains resizable. Use a clear label and a suitable row count rather than relying on placeholder text alone.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
