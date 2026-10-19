export default {
  name: "Avatar",
  slug: "avatar",
  category: "Data display",
  description: "A familiar face, with a thoughtful fallback.",
  props: [
    {
      name: "src",
      type: "string",
      default: "—",
    },
    {
      name: "name",
      type: "string",
      default: "Anonymous",
    },
    {
      name: "size",
      type: "string",
      default: "md",
    },
  ],
  notes:
    "Initials are used when no image is supplied or an image fails to load. The name provides the accessible text for both states.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [],
};
