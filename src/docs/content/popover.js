export default {
  name: "Popover",
  slug: "popover",
  category: "Overlays",
  description: "Useful details, close to the action.",
  props: [
    {
      name: "label",
      type: "string",
      default: "More information",
    },
  ],
  notes:
    "A non-modal disclosure for short contextual content. Clicking outside or pressing Escape closes it. For blocking interactions, use Dialog.",
  keyboard:
    "Enter or Space opens the disclosure. Tab reaches its content. Escape closes it.",
  events: [],
};
