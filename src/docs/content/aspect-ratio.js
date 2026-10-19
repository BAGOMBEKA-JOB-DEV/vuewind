export default {
  name: "AspectRatio",
  slug: "aspect-ratio",
  category: "Layout",
  description: "A consistent frame for your visual ideas.",
  props: [
    {
      name: "ratio",
      type: "number",
      default: "1.777…",
    },
  ],
  notes:
    "Uses the CSS aspect-ratio property. Supply meaningful alt text on any image inside the frame.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
