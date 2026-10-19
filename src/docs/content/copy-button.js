export default {
  name: "CopyButton",
  slug: "copy-button",
  category: "Actions",
  description: "A useful little shortcut for the things worth keeping.",
  props: [
    {
      name: "text",
      type: "string",
      default: "required",
    },
    {
      name: "label",
      type: "string",
      default: "Copy",
    },
  ],
  notes:
    "Copies using the Clipboard API with a browser fallback. Success and failure messages are announced, and timers are cleaned up on unmount.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
