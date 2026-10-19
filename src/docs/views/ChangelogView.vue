<script setup>
import Icon from "../../lib/Icon.vue";
import VwBadge from "../../lib/components/VwBadge.vue";
</script>
<template>
  <article class="docs-article catalog-article">
    <div class="page-breadcrumb">
      <span>A work in progress, in the best way</span><span>/</span
      ><span>Changelog</span>
    </div>
    <div class="blocks-header">
      <div class="eyebrow">THE NEXT CHAPTER</div>
      <h1 class="page-heading">
        A little better.<br /><span class="component-title-period"
          >With every change.</span
        >
      </h1>
      <p class="page-description">
        A clear record of what is new, what has changed, and where this
        foundation is going.
      </p>
    </div>
    <section class="changelog-entry">
      <div>
        <strong>v1.0.1</strong><small>Security maintenance</small>
        <VwBadge style="margin-top: 12px">Prepared</VwBadge>
      </div>
      <div>
        <h2>A safer foundation.</h2>
        <p>
          Requires Vue 3.5.42 or newer with the SSR attribute-name fix. Updates
          the development toolchain and adds dependency audit checks to
          validation and publishing.
        </p>
        <ul>
          <li>
            Zero known npm audit findings in the updated repository dependency
            tree.
          </li>
          <li>
            Patched spreadsheet tooling and a compatible Tailwind 4 stylesheet
            for the retained dashboard.
          </li>
          <li>
            Existing component APIs, scoped imports, and the shared stylesheet
            path stay the same.
          </li>
        </ul>
        <RouterLink to="/docs/installation" class="text-link"
          >Check the installation requirements <Icon name="right" :size="13"
        /></RouterLink>
      </div>
    </section>
    <section class="changelog-entry">
      <div>
        <strong>v1.0.0</strong><small>October 19, 2026</small
        ><VwBadge variant="success" style="margin-top: 12px">Stable</VwBadge>
      </div>
      <div>
        <h2>A fresh foundation.</h2>
        <p>
          A complete redesign of the documentation experience, paired with a new
          library of 60 Vue components. The public package is
          @bagombeka/vuewind, with manual publication from the repository.
        </p>
        <ul>
          <li>
            A new documentation workspace with searchable navigation and
            keyboard shortcuts.
          </li>
          <li>
            60 components with live examples, source previews, API tables, and
            interaction notes.
          </li>
          <li>
            A semantic token system with light and dark palettes and three
            accent choices.
          </li>
          <li>
            Practical guides for installation, theming, accessibility,
            composition, and migration.
          </li>
          <li>Composed workspace, form, and settings blocks.</li>
          <li>
            Separate documentation and library builds, with automated
            validation.
          </li>
          <li>
            Install with npm install @bagombeka/vuewind. ESM, CommonJS, types,
            and the shared stylesheet are included.
          </li>
          <li>
            A manual GitHub Actions release workflow publishes the verified
            package. Documentation deploys through the existing Vercel
            integration after merge.
          </li>
        </ul>
        <RouterLink to="/docs/migration" class="text-link"
          >Read the migration guide <Icon name="right" :size="13"
        /></RouterLink>
      </div>
    </section>
    <section class="changelog-entry">
      <div><strong>v0.1</strong><small>The original foundation</small></div>
      <div>
        <h2>A place to begin.</h2>
        <p>
          The first Vue 3 and Tailwind showcase grew out of a dashboard project.
          It introduced reusable buttons, forms, tables, layouts, charts, and
          browser-persisted sidebar and dark-mode state. The original source is
          retained for reference.
        </p>
      </div>
    </section>
    <footer class="docs-footer">
      <span>Built in the open. Made to keep getting better.</span
      ><a
        href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind/commits/main"
        target="_blank"
        rel="noopener noreferrer"
        >Follow the commits <Icon name="arrow" :size="12"
      /></a>
    </footer>
  </article>
</template>
