export default {
  name: "IconButton",
  slug: "icon-button",
  category: "Actions",
  description: "Compact actions with an explicit accessible name.",
  props: [
    {
      name: "label",
      type: "string",
      default: "required",
    },
    {
      name: "icon",
      type: "string",
      default: "plus",
    },
    {
      name: "variant",
      type: "string",
      default: "outline",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Always provide a label that describes the action. The icon is decorative; the label is announced by assistive technology.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
