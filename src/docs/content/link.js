export default {
  name: "Link",
  slug: "link",
  category: "Navigation",
  description: "A natural way to see where an idea takes you.",
  props: [
    {
      name: "href",
      type: "string",
      default: "required",
    },
    {
      name: "external",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "External links add safe rel attributes and announce the new tab. Use descriptive link text that makes sense on its own.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
