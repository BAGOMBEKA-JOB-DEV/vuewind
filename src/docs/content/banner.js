export default {
  name: "Banner",
  slug: "banner",
  category: "Feedback",
  description: "An announcement with a little more presence.",
  props: [
    {
      name: "dismissible",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Use for site-level announcements. Handle the close event to remove the banner and optionally persist the preference.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "close",
      payload: "none",
      description: "A dismissal was requested.",
    },
  ],
};
