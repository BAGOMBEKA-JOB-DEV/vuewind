export default {
  name: "InputGroup",
  slug: "input-group",
  category: "Forms",
  description: "Useful context, right next to the value.",
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
      name: "prefix",
      type: "string",
      default: "—",
    },
    {
      name: "suffix",
      type: "string",
      default: "—",
    },
  ],
  notes:
    "Prefixes and suffixes are associated through aria-describedby. Native input attributes such as placeholder and type are forwarded to the input.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
