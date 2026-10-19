export default {
  name: "Heading",
  slug: "heading",
  category: "Layout",
  description: "Give each idea a clear place in the story.",
  props: [
    {
      name: "level",
      type: "number",
      default: "2",
    },
    {
      name: "size",
      type: "string",
      default: "md",
    },
  ],
  notes:
    "Heading level controls semantic structure; size controls visual presentation. Choose the level that fits the document hierarchy, even when you need a different size.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
