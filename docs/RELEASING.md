# Publish Vuewind manually

The public package is `@bagombeka/vuewind`. Consumers install it with `npm install @bagombeka/vuewind` and import components and CSS from that same scope. The Vuewind brand, repository, and existing Vercel documentation URL stay the same.

## Package name

npm rejected the unscoped name `vuewind` because it conflicts with the existing package `vue-wind`. The maintainer selected `@bagombeka/vuewind` for the first release. The earlier [name-review draft](npm-name-review-request.md) was not submitted and is retained only as historical context. Publication no longer depends on an exception for the unscoped name.

## Publish a release

1. Merge the scoped release PR into `main`. This also updates the documentation through the existing Vercel integration at https://vuewind-two.vercel.app/.
2. Publish using the npm account `bagombeka`, which owns the `@bagombeka` user scope.
3. Configure a granular npm token with **Read and write (publish and stage)** access to the package and **Bypass 2FA** enabled for direct CI publication. A stage-only token can create a package through staged publishing, which requires a maintainer's 2FA approval before installation is available.
4. Save the token as the repository Actions secret **NPM_TOKEN** in **BAGOMBEKA-JOB-DEV/vuewind → Settings → Secrets and variables → Actions**. Never commit it or include it in release notes. The publishing credential is already configured.
5. Open **Actions → Publish Vuewind → Run workflow**. Select **main**, keep version **1.0.1**, and leave both **publish** and **stage** off for a dry run.
6. Inspect the validation result and downloadable `bagombeka-vuewind-1.0.1` artifact. The workflow installs the actual scoped tarball into an isolated consumer and checks its imports, types, styles, and all 60 examples.
7. Run the workflow with **publish** enabled. It uploads `bagombeka-vuewind-1.0.1.tgz` publicly with `latest` and provenance, waits for the public version and matching downloadable tarball, then creates or finalizes GitHub release `v1.0.1` with the same tarball attached. npm scans uploads before they become installable; the workflow allows up to 15 minutes for availability.
8. Verify the public registry and a fresh application installation:

```sh
npm view @bagombeka/vuewind@1.0.1 version
npm view @bagombeka/vuewind dist-tags.latest
npm install @bagombeka/vuewind
```

```js
import { VwButton, VwInput } from "@bagombeka/vuewind";
import "@bagombeka/vuewind/style.css";
```

A successful merge or dry run is not an npm release. Confirm the registry version and installation before reporting publication complete.

## Staged releases

Staged publishing supports new and existing packages, including creation through stage-only tokens. The intended version requires a maintainer's 2FA approval. A new package's `0.0.0-stage` placeholder is not the usable library.

1. Run **Publish Vuewind** from **main** with the matching version, **stage** enabled, and **publish** off. The workflow uses npm 11.21.0 and saves the staging result as an artifact.
2. Sign in to npm, open **Staged Packages**, review the scoped package and version, and approve it with the account's 2FA. The staging output also identifies the package for `npm stage view <stage-id>` or `npm stage approve <stage-id>`.
3. Verify the published version, `latest` tag, and a fresh installation using the scoped package name.
4. Finalize the GitHub release with the approved tarball and version-specific release notes. Do not directly publish a version that is already staged or published.

## Workflow guarantees

- The requested version matches the public `@bagombeka/vuewind` manifest.
- Publishing runs only from this repository's `main` branch.
- Component contracts, examples, generated declarations, and documentation builds pass.
- The tarball contains only built modules, types, CSS, README, license, and manifest.
- All 60 examples compile against the installed scoped package, and ESM and CommonJS imports work.
- Vue is a peer dependency; documentation and legacy dashboard dependencies are development-only.

The workflow has only `workflow_dispatch`. Pushes, pull requests, and Vercel deployments never publish npm packages. The separate validation workflow runs on PRs and pushes to main without a publishing token.

## Later releases

Update `package.json` and the lockfile together, add `docs/releases/<version>.md`, and open a PR. Merge, enter the matching version in the manual workflow, dry-run, then publish. npm versions are immutable: never attempt to overwrite an existing version.

If npm accepts the upload but availability verification times out, check the public registry and the account's package status before taking another action. Scanning may take longer than 15 minutes. Do not rerun publication for an accepted version. If npm publication succeeds but GitHub release creation fails, finalize GitHub for the already-published version; do not republish it. The workflow log and npm registry are the source of truth.

After the first release, the package can use an npm trusted publisher for this repository and workflow through OIDC. The manual release uses the configured `NPM_TOKEN` to establish ownership under the npm account.

References: [scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/), [npm publishing](https://docs.npmjs.com/cli/v11/commands/npm-publish/), [staged publishing](https://docs.npmjs.com/staged-publishing/), [creating new staged packages](https://github.blog/changelog/2026-10-02-npm-staged-publishing-now-supports-creating-new-packages/), [publish-time scanning](https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata/), [trusted publishers](https://docs.npmjs.com/trusted-publishers/).
