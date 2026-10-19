export default {
  title: "Migration",
  description: "A new chapter, built on the work that came before.",
  sections: [
    {
      id: "structure",
      title: "The new places to look.",
      body: "The original dashboard components remain in src/components. New reusable components live in src/lib/components with a Vw prefix. The documentation app lives in src/docs, and the active router now serves real documentation routes.",
    },
    {
      id: "buttons",
      title: "From utility bundles to intent.",
      body: "The original ButtonDefault accepts label, route, and customClasses. VwButton uses slots and a small variant API. Use RouterLink directly for navigation and VwButton for actions.",
      code: '<!-- Original -->\n<ButtonDefault label="Save" customClasses="bg-green-500 text-white" />\n\n<!-- New -->\n<VwButton variant="primary">Save</VwButton>',
      language: "vue",
    },
    {
      id: "forms",
      title: "Keep familiar Vue bindings.",
      body: "The new Input, Textarea, Select, Checkbox, and Switch use v-model. Form validation stays with your application. Input and Textarea accept error text and associate it with the underlying native control.",
    },
    {
      id: "styles",
      title: "Bring the new tokens with you.",
      body: "Import the library token and component styles once. Legacy dashboard styles remain available at src/assets/css/style.css, but are no longer loaded by the documentation app.",
      code: "import '@bagombeka/vuewind/style.css'",
      language: "js",
    },
    {
      id: "tables",
      title: "Separate data from presentation.",
      body: "VwTable accepts columns and rows. Replace hardcoded SMS-specific cell branches with scoped cell slots. The new table has no dependency on the missing legacy JobDetailsModal.",
    },
    {
      id: "compatibility",
      title: "Migrate at a comfortable pace.",
      body: "Old files are retained for reference. They are not part of the new library exports and should not be treated as supported release components. Move one screen at a time and check behavior after each change.",
    },
  ],
};
