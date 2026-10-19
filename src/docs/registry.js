import { defineAsyncComponent } from "vue";

const records = import.meta.glob("./content/*.js", {
  eager: true,
  import: "default",
});
const examples = import.meta.glob("./examples/*Example.vue");
const sources = import.meta.glob("./examples/*Example.vue", {
  query: "?raw",
  import: "default",
});

export const components = Object.values(records).sort((a, b) =>
  a.name.localeCompare(b.name),
);
export const categories = [
  "Actions",
  "Forms",
  "Data display",
  "Navigation",
  "Feedback",
  "Overlays",
  "Layout",
];
export const componentGroups = categories.map((name) => ({
  name,
  items: components.filter((item) => item.category === name),
}));
export const findComponent = (slug) =>
  components.find((item) => item.slug === slug);
const cache = new Map();
export function loadExample(name) {
  if (!cache.has(name))
    cache.set(
      name,
      defineAsyncComponent(examples[`./examples/${name}Example.vue`]),
    );
  return cache.get(name);
}
export async function loadExampleSource(name) {
  return sources[`./examples/${name}Example.vue`]?.() || "";
}
