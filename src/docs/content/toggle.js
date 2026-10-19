export default {
  name: "Toggle",
  slug: "toggle",
  category: "Actions",
  description: "A pressable choice that remembers its state.",
  props: [
    {
      name: "modelValue",
      type: "boolean",
      default: "false",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
    {
      name: "label",
      type: "string",
      default: "—",
    },
  ],
  notes:
    "Use a toggle for a persistent pressed state. For one-time actions, use Button instead.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "boolean",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
