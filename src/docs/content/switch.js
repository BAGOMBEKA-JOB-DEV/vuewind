export default {
  name: "Switch",
  slug: "switch",
  category: "Forms",
  description: "An immediate on or off, without the ambiguity.",
  props: [
    {
      name: "modelValue",
      type: "boolean",
      default: "false",
    },
    {
      name: "label",
      type: "string",
      default: "—",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "Use a switch for a setting that takes effect immediately. Include a stable label that describes the setting rather than the current state.",
  keyboard: "Space or Enter toggles the switch.",
  events: [
    {
      name: "update:modelValue",
      payload: "boolean",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
