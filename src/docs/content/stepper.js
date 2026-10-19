export default {
  name: "Stepper",
  slug: "stepper",
  category: "Navigation",
  description: "Make the journey feel as clear as the destination.",
  props: [
    {
      name: "current",
      type: "number",
      default: "0",
    },
    {
      name: "steps",
      type: "array",
      default: "[]",
    },
  ],
  notes:
    "current is a zero-based index. This is a progress indicator; use separate buttons for changing steps.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
