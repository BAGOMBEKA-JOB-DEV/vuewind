# Contributing

Use Node.js 22.13+ or a current LTS release and install with `npm ci`. Create a focused branch.

A public component has an implementation in `src/lib/components`, a runnable example in `src/docs/examples`, and a matching API record in `src/docs/content`. Update all three when changing a public contract. Export it through `src/lib/index.js`.

Prefer native HTML, explicit props and emits, semantic CSS tokens, and readable names. Keep backend calls and application-specific business rules out of the library. Document keyboard interactions and limitations.

```sh
npm run audit
npm run lint
npm test
npm run build
npm run build:lib
npm run test:package
npm run test:browser
```

Inspect changed examples in light and dark modes with keyboard navigation. Test narrow layouts and browser zoom. Describe the behavior, motivation, and relevant validation in the PR.

Publication is manual through the repository's **Publish Vuewind** workflow after merge. See [release instructions](docs/RELEASING.md). Documentation deploys through the existing Vercel integration.
