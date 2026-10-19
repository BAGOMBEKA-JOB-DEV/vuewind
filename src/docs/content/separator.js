export default {
  name: "Separator",
  slug: "separator",
  category: "Layout",
  description: "Just enough separation to bring a little structure.",
  props: [
    {
      name: "label",
      type: "string",
      default: "—",
    },
    {
      name: "vertical",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Use an optional label for alternative action groups. Vertical separators work inside a flex row with a defined height.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
