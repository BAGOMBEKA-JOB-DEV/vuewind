export default {
  name: "Breadcrumb",
  slug: "breadcrumb",
  category: "Navigation",
  description: "A clear path back to where you started.",
  props: [
    {
      name: "items",
      type: "array",
      default: "[]",
    },
    {
      name: "label",
      type: "string",
      default: "Breadcrumb",
    },
  ],
  notes:
    "The final item is always rendered as the current page. Earlier items can supply href values for navigation.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
