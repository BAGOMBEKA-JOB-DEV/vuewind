export default {
  name: "Select",
  slug: "select",
  category: "Forms",
  description: "A native choice, made to fit right in.",
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
      name: "placeholder",
      type: "string",
      default: "Select an option",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Accepts strings or objects with label and value. Native select semantics provide familiar keyboard and mobile interactions.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string or number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
