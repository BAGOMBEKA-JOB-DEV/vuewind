export default {
  name: "ToggleGroup",
  slug: "toggle-group",
  category: "Actions",
  description: "Related choices, neatly kept together.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "empty",
    },
    {
      name: "items",
      type: "array",
      default: "[]",
    },
    {
      name: "label",
      type: "string",
      default: "Options",
    },
  ],
  notes:
    "Items use label and value. Buttons expose their pressed state. Use Tabs when choices switch between content panels.",
  keyboard:
    "Tab reaches each action. Arrow keys, Home, and End also move focus.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
