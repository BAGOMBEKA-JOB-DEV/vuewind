export default {
  name: "List",
  slug: "list",
  category: "Data display",
  description: "A comfortable rhythm for related information.",
  props: [
    {
      name: "items",
      type: "array",
      default: "[]",
    },
    {
      name: "ordered",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Choose ordered for sequential instructions. The scoped default slot receives item and index for richer content.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
