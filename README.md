# Vuewind

A thoughtful foundation for your next Vue project. 60 source components, runnable examples, and a documentation workspace built with Vue 3.5 and Vite.

## Get started

Use Node.js 20.19+ and npm.

```sh
git clone https://github.com/BAGOMBEKA-JOB-DEV/vuewind.git
cd vuewind
git checkout redesign/vuewind-docs-v2
npm install
npm run dev
```

The development server normally runs at http://localhost:5173.

## Structure

| Path                 | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| `src/lib/components` | The 60 new Vw components                              |
| `src/lib/styles`     | Semantic tokens and shared component styles           |
| `src/lib/index.js`   | Named component exports                               |
| `src/docs`           | Documentation shell, guides, search, and previews     |
| `src/docs/examples`  | Runnable Vue examples, also shown in the Code tab     |
| `src/docs/content`   | Component API and interaction documentation           |
| `src/components`     | Original dashboard components, retained for reference |
| `tests`              | Catalog, rendering, logic, and browser checks         |

## Use a component

Within this checkout:

```vue
<script setup>
import { ref } from "vue";
import { VwButton, VwInput } from "@/lib";
const name = ref("");
</script>

<template>
  <VwInput v-model="name" label="Workspace name" />
  <VwButton @click="name = ''">Reset</VwButton>
</template>
```

For another Vue 3.5 project, copy `src/lib` and load `styles/tokens.css` and `styles/components.css` once in the app entry. There is no published npm package yet.

## Commands

```sh
npm test                 # Logic, catalog, SFC, imports, and SSR checks
npm run test:browser     # Browser interactions, layouts, and screenshots
npm run build            # Documentation app to dist/
npm run build:lib        # Standalone ES module + CSS to lib-dist/
npm run preview          # Preview the production documentation build
npm run format:new       # Format the redesigned source
```

The browser check uses a local Chrome or Chromium executable. Set `BROWSER_BIN` if auto-detection cannot find yours. It starts and cleans up its own local server and browser. Screenshots are saved to `test-results/`.

## Design and behavior

Components use semantic `--vw-*` CSS properties, `vw-` class names, Vue slots, and controlled v-model bindings. Documentation includes three accents, persistent light/dark/system mode, Command/Ctrl K search, and a mobile drawer.

Controls prefer native browser elements. Modal overlays use native dialog focus containment. Calendar and DropdownMenu use simpler native semantics rather than claiming full ARIA grid/menu implementations. Validate accessibility in your own application.

The original Tailwind 3 configuration and dashboard source remain for gradual migration. They are excluded from the new library entry. See the in-app migration guide and [redesign decisions](docs/redesign-research.md).

## Deployment

Serve `dist/` with SPA history fallback. The Dockerfile builds with Node 22 and serves through Nginx. The documentation app needs no environment file or backend.

## License

MIT. Created by Bagombeka Job and contributors.
