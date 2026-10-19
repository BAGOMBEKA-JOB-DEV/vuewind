export default {
  name: "FileUpload",
  slug: "file-upload",
  category: "Forms",
  description: "A friendly first step for files and attachments.",
  props: [
    {
      name: "accept",
      type: "string",
      default: "—",
    },
    {
      name: "multiple",
      type: "boolean",
      default: "false",
    },
    {
      name: "label",
      type: "string",
      default: "Choose files",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Emits a File array on change. This is a local file picker, not an upload service. Enforce file limits and validation in your application.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "change",
      payload: "File[]",
      description: "The selected local files.",
    },
  ],
};
