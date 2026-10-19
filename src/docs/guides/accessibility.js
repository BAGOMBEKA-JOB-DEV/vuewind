export default {
  title: "Accessibility",
  description: "Good design makes room for more people.",
  sections: [
    {
      id: "foundation",
      title: "A thoughtful place to start.",
      body: "Vuewind prefers native HTML controls wherever possible. Buttons, checkboxes, radios, selects, date inputs, details, and dialogs bring familiar semantics and browser behavior. These choices are a foundation, not a claim of independent accessibility certification.",
    },
    {
      id: "keyboard",
      title: "Every action needs a way in.",
      body: "All controls must be reachable and operable with a keyboard. The documentation includes a skip link, visible focus indicators, and a search palette available with Command/Ctrl K or the slash key.",
      list: [
        "Use Tab and Shift Tab to follow the page in a useful order.",
        "Use native buttons for actions and links for navigation.",
        "Tabs support arrows, Home, and End with automatic activation.",
        "Dialog and Drawer use native modal focus containment and Escape handling.",
      ],
    },
    {
      id: "labels",
      title: "Make the purpose clear.",
      body: "Always provide meaningful labels. IconButton requires label. Inputs connect their visible labels and errors through unique IDs. The FormField scoped slot exposes the attributes needed to associate a custom control.",
      code: '<VwInput\n  v-model="email"\n  label="Email address"\n  type="email"\n  autocomplete="email"\n  :error="emailError"\n/>',
      language: "vue",
    },
    {
      id: "focus",
      title: "Keep the person oriented.",
      body: "Native modal dialogs make background content inert and restore focus to the opener. Avoid closing a dialog while an important result is still being read. Non-modal disclosures close on Escape or outside clicks.",
      note: "Calendar uses a labeled group of date buttons. DropdownMenu uses disclosure semantics. Neither claims a complete ARIA grid or menu implementation.",
    },
    {
      id: "motion",
      title: "A little less motion when it helps.",
      body: "The shared stylesheet honors prefers-reduced-motion. Spinners remain understandable through status text, and animation is never required to understand a result.",
      code: "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation: none !important;\n    transition: none !important;\n    scroll-behavior: auto !important;\n  }\n}",
      language: "css",
    },
    {
      id: "verify",
      title: "Test the whole experience.",
      body: "Check the final app with keyboard navigation, browser zoom, different color modes, and the assistive technology your audience uses. Component defaults cannot validate your content, labels, or application flow.",
    },
  ],
};
