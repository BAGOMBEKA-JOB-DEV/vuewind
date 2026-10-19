export default {
  name: "Meter",
  slug: "meter",
  category: "Data display",
  description: "A useful measure of where things stand.",
  props: [
    {
      name: "value",
      type: "number",
      default: "0",
    },
    {
      name: "max",
      type: "number",
      default: "100",
    },
    {
      name: "label",
      type: "string",
      default: "Usage",
    },
  ],
  notes:
    "Use Meter for a measurement within a known range. Use Progress for the completion of an ongoing task.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
