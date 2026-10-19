export default {
  name: "Progress",
  slug: "progress",
  category: "Feedback",
  description: "Keep people informed about what is happening.",
  props: [
    {
      name: "value",
      type: "number",
      default: "0",
    },
    {
      name: "max",
      type: "number",
      default: "100",
    },
    {
      name: "label",
      type: "string",
      default: "Progress",
    },
    {
      name: "showValue",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Values are clamped to a valid percentage. Set max to the total amount when value is a raw completed count.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
