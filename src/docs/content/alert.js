export default {
  name: "Alert",
  slug: "alert",
  category: "Feedback",
  description: "Important information, delivered with clarity.",
  props: [
    {
      name: "title",
      type: "string",
      default: "—",
    },
    {
      name: "variant",
      type: "string",
      default: "info",
    },
  ],
  notes:
    "Use danger only for urgent errors; it uses role=alert. Other variants use a polite status announcement.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
