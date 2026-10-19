export default {
  name: "Kbd",
  slug: "kbd",
  category: "Data display",
  description: "Make keyboard shortcuts feel discoverable.",
  props: [
    {
      name: "keys",
      type: "array",
      default: "[]",
    },
  ],
  notes:
    "Kbd displays a shortcut but does not register it. Implement the shortcut in your application and account for the user’s operating system.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
