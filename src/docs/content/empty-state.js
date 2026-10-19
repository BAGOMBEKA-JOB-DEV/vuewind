export default {
  name: "EmptyState",
  slug: "empty-state",
  category: "Feedback",
  description: "An empty space can still feel like a helpful place.",
  props: [
    {
      name: "title",
      type: "string",
      default: "A fresh canvas",
    },
    {
      name: "description",
      type: "string",
      default: "Your next great idea belongs here.",
    },
    {
      name: "icon",
      type: "string",
      default: "folder",
    },
  ],
  notes:
    "Explain why a space is empty and offer a clear next step in the default slot.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
