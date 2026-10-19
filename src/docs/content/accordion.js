export default {
  name: "Accordion",
  slug: "accordion",
  category: "Layout",
  description: "A little less information, until you need a little more.",
  props: [
    {
      name: "items",
      type: "array",
      default: "[]",
    },
  ],
  notes:
    "Items have title and content fields. Each section uses native details and summary elements, so multiple sections can remain open.",
  keyboard: "Tab moves between summaries. Enter or Space toggles a section.",
  events: [],
};
