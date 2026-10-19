export default {
  name: "FormField",
  slug: "form-field",
  category: "Forms",
  description: "A clear label, a helpful hint, and room for your control.",
  props: [
    {
      name: "label",
      type: "string",
      default: "—",
    },
    {
      name: "hint",
      type: "string",
      default: "—",
    },
    {
      name: "error",
      type: "string",
      default: "—",
    },
    {
      name: "required",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "The scoped slot exposes id, describedby, invalid, and required. Bind them to your native control to connect labels and validation feedback.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
