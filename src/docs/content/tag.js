export default {
  name: "Tag",
  slug: "tag",
  category: "Data display",
  description: "A small label that is easy to organize around.",
  props: [
    {
      name: "removable",
      type: "boolean",
      default: "false",
    },
    {
      name: "label",
      type: "string",
      default: "required",
    },
  ],
  notes:
    "The remove event lets the parent decide how to update the collection. Each remove control has a tag-specific accessible name.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "remove",
      payload: "none",
      description: "Removal was requested.",
    },
  ],
};
