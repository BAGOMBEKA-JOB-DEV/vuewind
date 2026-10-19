export default {
  name: "PasswordInput",
  slug: "password-input",
  category: "Forms",
  description: "A little reassurance for sensitive information.",
  props: [
    {
      name: "modelValue",
      type: "string",
      default: "empty",
    },
    {
      name: "label",
      type: "string",
      default: "Password",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
    },
  ],
  notes:
    "The reveal control is a real button with an accessible name and pressed state. No password is stored or sent by this component.",
  keyboard: "Uses standard browser keyboard behavior.",
  events: [
    {
      name: "update:modelValue",
      payload: "string",
      description: "The next controlled value. Used by v-model.",
    },
  ],
};
