export default {
  name: "Badge",
  slug: "badge",
  category: "Data display",
  description: "Small labels that give information a little context.",
  props: [
    {
      name: "variant",
      type: "string",
      default: "neutral",
    },
    {
      name: "dot",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Pair color with clear text so status remains understandable without color vision. Badges are informational and do not receive keyboard focus.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
