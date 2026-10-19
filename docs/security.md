# Dependency security

## Audit scope

`npm audit` examines the complete dependency tree of the project where it runs, including existing development tools. Installing a package does not mean every finding in the resulting application audit belongs to that package.

On October 19, 2026, a fresh consumer containing only `@bagombeka/vuewind@1.0.0` and its automatically installed Vue peer reported zero npm audit findings. The nine reported findings in an existing consumer came from its Mocha 10 development dependency tree. Upgrading that consumer to Mocha 12.0.3 cleared all nine, and all 21 existing tests passed.

The Vuewind repository's original development lockfile reported 41 affected packages: 2 critical, 32 high, 5 moderate, and 2 low. The security update replaces the vulnerable development versions, removes unused dependency chains, and uses the official patched SheetJS release. The updated complete repository tree reports zero npm audit findings.

## Supported Vue versions

Version 1.0.1 requires Vue `^3.5.42`. Vue is a peer dependency and is not bundled. This minimum includes the fix for [GHSA-g2v6-rqmx-r4w6](https://github.com/advisories/GHSA-g2v6-rqmx-r4w6), an SSR attribute-name injection issue. The repository uses Vue 3.5.44 and includes a regression check for carriage-return attribute injection and escaped labels.

Existing applications using an older Vue version should update Vue explicitly. Package managers may otherwise keep an existing peer version or report a peer conflict.

```sh
npm install vue@^3.5.42 @bagombeka/vuewind
npm audit
```

## Maintenance checks

```sh
npm ci --ignore-scripts
npm run audit
npm run lint
npm run release:check
npm run build:docs
npm run test:browser
```

CI and manual publication run the full audit, including development dependencies, and fail on findings at low severity or above. Dependabot proposes weekly updates for review. Installed dependencies are excluded from Git; the lockfile records exact versions and integrity values.

The repository's preview command uses Vite on `127.0.0.1:8080`. The existing Vercel integration handles production documentation deployment.

Known audit findings are checked against npm's advisory database at the time of the audit. A clean audit does not replace application-level validation of data, URLs, authentication, or authorization.

References: [npm audit](https://docs.npmjs.com/cli/v10/commands/npm-audit/), [Vue SSR advisory](https://github.com/advisories/GHSA-g2v6-rqmx-r4w6), [official SheetJS installation](https://docs.sheetjs.com/docs/getting-started/installation/nodejs/), [Tailwind migration](https://tailwindcss.com/docs/upgrade-guide).
