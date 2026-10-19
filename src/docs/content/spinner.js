export default {
  name: "Spinner",
  slug: "spinner",
  category: "Feedback",
  description: "A gentle signal that work is in progress.",
  props: [
    {
      name: "label",
      type: "string",
      default: "Loading",
    },
  ],
  notes:
    "A status label communicates the operation to screen readers. Reduced motion preferences disable rotation.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
