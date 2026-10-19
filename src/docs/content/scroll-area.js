export default {
  name: "ScrollArea",
  slug: "scroll-area",
  category: "Layout",
  description: "Give growing content the room it needs.",
  props: [
    {
      name: "height",
      type: "string",
      default: "240px",
    },
    {
      name: "label",
      type: "string",
      default: "Scrollable content",
    },
  ],
  notes:
    "The scroll region is focusable and labeled, so keyboard users can reach and scroll its contents. Native scrollbar behavior is preserved.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
