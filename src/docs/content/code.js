export default {
  name: "Code",
  slug: "code",
  category: "Data display",
  description: "A small, readable home for technical details.",
  props: [
    {
      name: "inline",
      type: "boolean",
      default: "false",
    },
    {
      name: "language",
      type: "string",
      default: "text",
    },
  ],
  notes:
    "Code is rendered as plain text, never as HTML. Use the inline variant within prose and the block variant for commands or examples.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
