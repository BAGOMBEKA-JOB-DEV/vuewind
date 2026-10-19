export default {
  name: "Tabs",
  slug: "tabs",
  category: "Navigation",
  description: "Different perspectives, in one comfortable space.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "first item",
    },
    {
      name: "items",
      type: "array",
      default: "[]",
    },
    {
      name: "label",
      type: "string",
      default: "Sections",
    },
  ],
  notes:
    "Items use label and value. The default slot receives the active value. Tabs use automatic activation with a single tab stop.",
  keyboard:
    "Left/Right or Up/Down moves and activates a tab. Home and End jump to the first and last tabs.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
