export default {
  name: "Stat",
  slug: "stat",
  category: "Data display",
  description: "Give your important numbers a little perspective.",
  props: [
    {
      name: "label",
      type: "string",
      default: "required",
    },
    {
      name: "value",
      type: "string or number",
      default: "required",
    },
    {
      name: "change",
      type: "string",
      default: "—",
    },
    {
      name: "trend",
      type: "string",
      default: "up",
    },
  ],
  notes:
    "Include a time frame or comparison context. Trend direction is shown with both an arrow and color.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
