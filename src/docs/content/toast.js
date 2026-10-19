export default {
  name: "Toast",
  slug: "toast",
  category: "Feedback",
  description: "A brief update that respects the moment.",
  props: [
    {
      name: "title",
      type: "string",
      default: "All done",
    },
    {
      name: "description",
      type: "string",
      default: "—",
    },
    {
      name: "dismissible",
      type: "boolean",
      default: "true",
    },
  ],
  notes:
    "A polite status announcement with a dismiss control. Visibility and timing are controlled by the parent; important information should not vanish automatically.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "close",
      payload: "none",
      description: "A dismissal was requested.",
    },
  ],
};
