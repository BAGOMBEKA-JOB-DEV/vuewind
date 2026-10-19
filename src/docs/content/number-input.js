export default {
  name: "NumberInput",
  slug: "number-input",
  category: "Forms",
  description: "Exact values, with a little help on either side.",
  props: [
    {
      name: "modelValue",
      type: "number",
      default: "0",
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
      default: "Quantity",
    },
  ],
  notes:
    "Values entered manually or through buttons are bounded by min and max. Native number input keyboard behavior remains available.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
