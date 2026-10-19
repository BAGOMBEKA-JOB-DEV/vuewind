# Vuewind

60 thoughtful Vue 3 components with typed APIs, semantic themes, and native browser foundations.

[Documentation](https://vuewind-two.vercel.app/) · [Components](https://vuewind-two.vercel.app/components) · [GitHub](https://github.com/BAGOMBEKA-JOB-DEV/vuewind)

## Install

In an existing Vue 3.5+ application:

```sh
npm install vuewind
```

Load the stylesheet once in your app entry:

```js
import "vuewind/style.css";
```

Then import only the components you need:

```vue
<script setup>
import { ref } from "vue";
import { VwButton, VwInput } from "vuewind";
const name = ref("");
</script>

<template>
  <VwInput v-model="name" label="Workspace name" />
  <VwButton @click="name = ''">Reset</VwButton>
</template>
```

Vue is a peer dependency. Tailwind and the documentation dependencies are not required in consuming apps. ESM, CommonJS, TypeScript declarations, and `vuewind/style.css` are included. CSS is marked as a side effect so production bundlers preserve it.

Version 1.0.0 is prepared for its first manual npm release. The install command becomes available after publication. See [the release guide](docs/RELEASING.md) for the maintainer steps.

## Components and theming

The collection covers actions, forms, data display, navigation, feedback, overlays, and layout. A `VwIcon` helper is also exported for use in composed examples.

Components use standard Vue slots, props, and v-model events. Override semantic `--vw-*` CSS variables to customize colors and radius. Add the `dark` class to your document root for the dark palette. No global plugin registration is required.

```css
:root {
  --vw-primary: #3566bd;
  --vw-primary-hover: #28539e;
  --vw-primary-soft: #ecf1fc;
}
```

Controls prefer native browser elements. Modal overlays use native dialog focus containment. Calendar and DropdownMenu use native button/disclosure semantics rather than claiming full ARIA grid/menu implementations. Verify accessibility in your application.

## Work on the repository

Use Node.js 20.19+ and npm. This runs the documentation app, separate from installing the package in another app:

```sh
git clone https://github.com/BAGOMBEKA-JOB-DEV/vuewind.git
cd vuewind
npm ci
npm run dev
```

| Path               | Purpose                                                 |
| ------------------ | ------------------------------------------------------- |
| `src/lib`          | Public components, exports, semantic tokens, and styles |
| `src/docs`         | Documentation workspace, guides, and live examples      |
| `src/docs/content` | Component API and interaction records                   |
| `src/components`   | Original dashboard source, retained for migration       |
| `scripts`          | Type generation and installed-package verification      |
| `tests`            | Contract, compilation, SSR, and browser checks          |

```sh
npm test                 # Component contracts, imports, SSR, and helpers
npm run build            # Documentation app → dist/ (existing Vercel build)
npm run build:lib        # ESM, CommonJS, CSS, and declarations → lib-dist/
npm run test:package     # Install the built tarball and compile all examples
npm run test:browser     # Keyboard, forms, themes, responsive layouts
npm run release:check    # Full package release validation
npm pack                 # Build and create the publishable tarball
```

`test:package` builds an isolated consumer from the actual npm tarball and uses the checkout's installed Vue peer without network access. It verifies ESM and CommonJS imports, SSR, styles, and all 60 examples using public package imports.

The browser check uses a local Chrome or Chromium executable. Set `BROWSER_BIN` if needed. Screenshots are saved to `test-results/`.

## Manual releases and documentation deployment

Maintainers publish manually through **Actions → Publish Vuewind → Run workflow** after merging into `main`. The first publication needs the repository Actions secret `NPM_TOKEN`. The default workflow run validates and uploads an artifact; enabling `publish` sends that verified tarball to npm and creates the GitHub release. Pushes and PRs never publish packages.

The existing Vercel integration deploys https://vuewind-two.vercel.app/ after merge. No separate deployment workflow or hosting migration is introduced.

See [release instructions](docs/RELEASING.md), [1.0.0 release notes](docs/releases/1.0.0.md), [contribution guidance](CONTRIBUTING.md), and [redesign research](docs/redesign-research.md).

## License

MIT. Created by Bagombeka Job and contributors.
