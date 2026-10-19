export default {
  name: "Skeleton",
  slug: "skeleton",
  category: "Feedback",
  description: "A quiet preview of the content on its way.",
  props: [
    {
      name: "width",
      type: "string",
      default: "100%",
    },
    {
      name: "height",
      type: "string",
      default: "1rem",
    },
    {
      name: "rounded",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Skeletons are decorative. Place them inside a container with role=status and an appropriate loading label.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
