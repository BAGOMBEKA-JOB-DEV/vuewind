export default {
  name: "Timeline",
  slug: "timeline",
  category: "Data display",
  description: "A clear story of the things that happened along the way.",
  props: [
    {
      name: "items",
      type: "array",
      default: "[]",
    },
  ],
  notes:
    "Items accept title, description, time and an optional ISO datetime. An ordered list preserves the sequence for assistive technology.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
