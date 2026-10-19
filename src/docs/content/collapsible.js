export default {
  name: "Collapsible",
  slug: "collapsible",
  category: "Layout",
  description: "Keep the essentials visible and the details nearby.",
  props: [
    {
      name: "label",
      type: "string",
      default: "Show more",
    },
    {
      name: "open",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "A native details element for a single expandable section. The toggle event reports the current open state.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "toggle",
      payload: "boolean",
      description: "The disclosure state changed.",
    },
  ],
};
