# Publish Vuewind manually

The public package is named `vuewind`. `npm install vuewind` resolves to this library after successful npm publication; pushing or merging a PR does not publish it. A staged package is not a completed release.

## First release

1. Merge the release PR into `main`. This also updates the documentation through the existing Vercel integration at https://vuewind-two.vercel.app/.
2. Sign in to the npm account that will own `vuewind`. The name was unregistered when checked on October 19, 2026; npm confirms availability only when publication succeeds.
3. Create an npm granular token with permission to publish or stage the new package. Direct CI publication requires a token allowed to publish with **Bypass 2FA** enabled when npm requires it. A token without this permission can use the staged release path below; approval then requires the account owner's 2FA.
4. In **BAGOMBEKA-JOB-DEV/vuewind → Settings → Secrets and variables → Actions**, add the token as the repository secret **NPM_TOKEN**. Never commit it to the repository.
5. Open **Actions → Publish Vuewind → Run workflow**. Select **main**, keep version **1.0.0**, and leave both **publish** and **stage** off for an initial dry run.
6. Inspect the validation result and downloadable `vuewind-1.0.0` artifact. The workflow validates the package installed into an isolated consumer, not just its source tree.
7. Run the same workflow with **publish** enabled. This publishes the verified tarball to the public npm registry with `latest` and provenance, then creates GitHub release `v1.0.0` with the tarball attached.
8. Verify the release:

```sh
npm view vuewind@1.0.0 version
npm view vuewind dist-tags.latest
npm install vuewind
```

## Staged release when npm requires account approval

The first direct publication attempt was rejected by npm with HTTP 403 because its token did not satisfy npm's 2FA requirement. Staging preserves that requirement while preparing the exact package for approval:

1. Run **Publish Vuewind** from **main** with the matching version, **stage** enabled, and **publish** off. The workflow uses npm 11.21.0, validates the package, uploads it with provenance, and saves the staging result as an artifact.
2. Sign in to npm, open **Staged Packages**, review `vuewind@1.0.0`, and approve it with your account's 2FA. The staging output also identifies the staged package for `npm stage view <stage-id>` or `npm stage approve <stage-id>`.
3. Confirm `npm view vuewind@1.0.0 version` and `npm view vuewind dist-tags.latest` both report `1.0.0`, then verify a fresh `npm install vuewind`.
4. Finalize the existing GitHub prerelease using the approved npm tarball and version-specific release notes. Do not run direct publication for a version already staged or published.

For a new package, npm creates a public `0.0.0-stage` placeholder. This is not the usable library. The `1.0.0` version is unavailable until approval. Staging reserves that version; avoid submitting it twice.

## What the workflow checks

- The requested version matches the public package manifest.
- Publishing runs only from this repository's `main` branch.
- Component contracts, examples, generated declarations, and documentation builds pass.
- The tarball contains only the built modules, types, CSS, README, license, and manifest.
- All 60 public examples compile against the installed tarball, and both ESM and CommonJS imports work.
- Vue is a peer dependency; documentation and legacy dashboard dependencies are development-only.

The workflow has only `workflow_dispatch`. Pushes, pull requests, and Vercel deployments never publish npm packages. The separate validation workflow runs on PRs and pushes to main without a publishing token.

## Later releases

Update `package.json` and the lockfile together, add `docs/releases/<version>.md`, and open a PR. Merge, enter the matching version in the manual workflow, dry-run, then manually publish. npm versions are immutable: never attempt to overwrite an existing version.

If npm publication succeeds but GitHub release creation fails, create the GitHub release for the already-published version; do not republish it. A failed publication does not count as a release. The workflow log and npm registry are the source of truth.

## Optional token-free follow-up

After the package exists, you can configure an npm trusted publisher for this repository and workflow and migrate the publication step to OIDC. The first release in this PR uses the explicitly configured `NPM_TOKEN` so ownership is established by your npm account.

References: [npm publishing](https://docs.npmjs.com/cli/v11/commands/npm-publish/), [npm staged publishing](https://docs.npmjs.com/staged-publishing/), [npm trusted publishers](https://docs.npmjs.com/trusted-publishers/), [GitHub manual workflows](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow).
