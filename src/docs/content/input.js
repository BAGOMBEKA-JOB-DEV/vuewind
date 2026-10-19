export default {
  name: "Input",
  slug: "input",
  category: "Forms",
  description: "Simple text entry, with all the right details.",
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
      name: "hint",
      type: "string",
      default: "—",
    },
    {
      name: "error",
      type: "string",
      default: "—",
    },
    {
      name: "type",
      type: "string",
      default: "text",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Attributes such as placeholder, required, autocomplete and name are forwarded to the native input. Error and hint text are linked with aria-describedby.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string or number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
