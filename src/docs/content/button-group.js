export default {
  name: "ButtonGroup",
  slug: "button-group",
  category: "Actions",
  description: "Separate actions that work better together.",
  props: [
    {
      name: "label",
      type: "string",
      default: "Related actions",
    },
    {
      name: "vertical",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Groups buttons visually while preserving each button’s independent keyboard focus. Use ToggleGroup for a selected value.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
