export default {
  name: "Tooltip",
  slug: "tooltip",
  category: "Overlays",
  description: "A little extra context, right where it is needed.",
  props: [
    {
      name: "text",
      type: "string",
      default: "required",
    },
  ],
  notes:
    "Use for supplementary text, never for essential instructions. The trigger is focusable and the tooltip stays available while the pointer is over it.",
  keyboard: "Tab focuses the trigger. Escape dismisses the tooltip.",
  events: [],
};
