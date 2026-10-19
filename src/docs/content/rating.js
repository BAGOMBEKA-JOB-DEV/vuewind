export default {
  name: "Rating",
  slug: "rating",
  category: "Forms",
  description: "A small way to say how something feels.",
  props: [
    {
      name: "modelValue",
      type: "number",
      default: "0",
    },
    {
      name: "max",
      type: "number",
      default: "5",
    },
    {
      name: "label",
      type: "string",
      default: "Rating",
    },
    {
      name: "readonly",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Each rating is a native radio choice. The selected value remains understandable without relying on the star color.",
  keyboard: "Arrow keys choose a rating. Tab enters or leaves the group.",
  events: [
    {
      name: "update:modelValue",
      payload: "number",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
