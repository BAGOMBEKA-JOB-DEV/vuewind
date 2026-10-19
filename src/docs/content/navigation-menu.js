export default {
  name: "NavigationMenu",
  slug: "navigation-menu",
  category: "Navigation",
  description: "A quiet, dependable way to move around.",
  props: [
    {
      name: "items",
      type: "array",
      default: "[]",
    },
    {
      name: "active",
      type: "string",
      default: "—",
    },
    {
      name: "label",
      type: "string",
      default: "Main navigation",
    },
  ],
  notes:
    "Each item needs a label and href. The active link is identified with aria-current. Native links preserve browser navigation behavior.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
