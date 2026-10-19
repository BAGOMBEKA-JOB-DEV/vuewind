export default {
  name: "Container",
  slug: "container",
  category: "Layout",
  description: "A little structure that gives your content room to breathe.",
  props: [
    {
      name: "size",
      type: "string",
      default: "md",
    },
    {
      name: "as",
      type: "string",
      default: "div",
    },
  ],
  notes:
    "Available sizes are sm, md, lg, and full. The as prop lets you choose a semantic element without changing the spacing.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
