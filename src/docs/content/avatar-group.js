export default {
  name: "AvatarGroup",
  slug: "avatar-group",
  category: "Data display",
  description: "A compact introduction to everyone involved.",
  props: [
    {
      name: "items",
      type: "array",
      default: "[]",
    },
    {
      name: "max",
      type: "number",
      default: "4",
    },
  ],
  notes:
    "Provide each person with a name and an optional src and id. Extra members collapse into a readable count.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
