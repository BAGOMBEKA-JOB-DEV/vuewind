export default {
  name: "Slider",
  slug: "slider",
  category: "Forms",
  description: "A small movement that makes a meaningful adjustment.",
  props: [
    {
      name: "modelValue",
      type: "number",
      default: "50",
    },
    {
      name: "min",
      type: "number",
      default: "0",
    },
    {
      name: "max",
      type: "number",
      default: "100",
    },
    {
      name: "step",
      type: "number",
      default: "1",
    },
    {
      name: "label",
      type: "string",
      default: "Value",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Use a slider for approximate numeric adjustments. Use NumberInput when an exact value is important.",
  keyboard: "Arrow keys adjust by step. Home and End jump to the bounds.",
  events: [
    {
      name: "update:modelValue",
      payload: "number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
