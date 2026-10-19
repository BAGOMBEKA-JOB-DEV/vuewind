export default {
  name: "DropdownMenu",
  slug: "dropdown-menu",
  category: "Overlays",
  description: "A tidy home for secondary actions.",
  props: [
    {
      name: "label",
      type: "string",
      default: "Options",
    },
    {
      name: "items",
      type: "array",
      default: "[]",
    },
  ],
  notes:
    "Items have label, value, optional icon and disabled fields. A select event receives the chosen item. Uses disclosure semantics rather than claiming the full ARIA menu pattern.",
  keyboard:
    "Enter opens the disclosure. Arrow keys move between actions; Home and End jump. Escape closes it.",
  events: [
    {
      name: "select",
      payload: "Record<string, unknown>",
      description: "The selected item.",
    },
  ],
};
