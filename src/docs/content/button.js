export default {
  name: "Button",
  slug: "button",
  category: "Actions",
  description: "A considered starting point for every action.",
  props: [
    {
      name: "variant",
      type: "string",
      default: "primary",
    },
    {
      name: "size",
      type: "string",
      default: "md",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
    {
      name: "type",
      type: "string",
      default: "button",
    },
  ],
  notes:
    "Use primary for the most important action, outline for a quieter alternative, and danger for destructive actions. Loading keeps the button disabled while preserving its label.",
  keyboard: "Tab to focus. Enter or Space activates the button.",
  events: [],
};
