export default {
  name: "Table",
  slug: "table",
  category: "Data display",
  description: "Make a collection feel clear, organized, and useful.",
  props: [
    {
      name: "columns",
      type: "array",
      default: "[]",
    },
    {
      name: "rows",
      type: "array",
      default: "[]",
    },
    {
      name: "caption",
      type: "string",
      default: "Data table",
    },
    {
      name: "rowKey",
      type: "string",
      default: "id",
    },
  ],
  notes:
    "Columns use key and label. Named cell-key slots receive row and value. Sorting and filtering are application concerns; the table does not mutate data.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
