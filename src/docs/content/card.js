export default {
  name: "Card",
  slug: "card",
  category: "Layout",
  description: "A flexible surface for related content and actions.",
  props: [
    {
      name: "title",
      type: "string",
      default: "—",
    },
    {
      name: "description",
      type: "string",
      default: "—",
    },
  ],
  notes:
    "Use the default slot for content. The header and footer slots support custom composition without changing the card surface.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
