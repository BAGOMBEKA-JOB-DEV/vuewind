export default {
  name: "VisuallyHidden",
  slug: "visually-hidden",
  category: "Layout",
  description: "Helpful context for the people who hear your interface.",
  props: [
    {
      name: "as",
      type: "string",
      default: "span",
    },
  ],
  notes:
    "Content remains available to assistive technology while being visually clipped. Do not place focusable controls inside a visually hidden wrapper.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
