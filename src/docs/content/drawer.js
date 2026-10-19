export default {
  name: "Drawer",
  slug: "drawer",
  category: "Overlays",
  description: "Keep the context. Make room for the details.",
  props: [
    {
      name: "modelValue",
      type: "boolean",
      default: "false",
    },
    {
      name: "title",
      type: "string",
      default: "required",
    },
    {
      name: "description",
      type: "string",
      default: "—",
    },
  ],
  notes:
    "Built on the native dialog element. The browser makes the background inert, traps focus, and restores focus to the opener. Escape and backdrop clicks close the overlay.",
  keyboard:
    "Tab stays inside the open dialog. Escape closes it and returns focus to the opener.",
  events: [
    {
      name: "update:modelValue",
      payload: "boolean",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
