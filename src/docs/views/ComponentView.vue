<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { components, findComponent } from "../registry.js";
import Icon from "../../lib/Icon.vue";
import DemoFrame from "../components/DemoFrame.vue";
import CodeBlock from "../components/CodeBlock.vue";
import DocsToc from "../components/DocsToc.vue";
import VwAlert from "../../lib/components/VwAlert.vue";
import NotFoundView from "./NotFoundView.vue";
const route = useRoute();
const component = computed(() => findComponent(route.params.slug));
const related = computed(() =>
  components
    .filter(
      (c) =>
        c.category === component.value?.category &&
        c.slug !== component.value?.slug,
    )
    .slice(0, 3),
);
const index = computed(() =>
  components.findIndex((c) => c.slug === component.value?.slug),
);
const previous = computed(() => components[index.value - 1]);
const next = computed(() => components[index.value + 1]);
const toc = [
  { id: "preview", label: "Preview" },
  { id: "installation", label: "Usage" },
  { id: "api", label: "API reference" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related components" },
];
</script>
<template>
  <NotFoundView v-if="!component" />
  <div v-else class="docs-page-grid" :key="component.slug">
    <article class="docs-article component-article">
      <div class="page-topline">
        <div class="page-breadcrumb">
          <RouterLink to="/components">Components</RouterLink><span>/</span
          ><span>{{ component.category }}</span
          ><span>/</span><span>{{ component.name }}</span>
        </div>
        <a
          :href="`https://github.com/BAGOMBEKA-JOB-DEV/vuewind/blob/redesign/vuewind-docs-v2/src/lib/components/Vw${component.name}.vue`"
          target="_blank"
          rel="noopener noreferrer"
          class="page-source"
          >Source <Icon name="arrow" :size="12"
        /></a>
      </div>
      <div class="component-heading-row">
        <div>
          <div class="eyebrow">{{ component.category }}</div>
          <h1 class="page-heading">
            {{ component.name }}<span class="component-title-period">.</span>
          </h1>
        </div>
        <span class="component-vue-tag"
          ><span class="small-green-dot" />Vue 3</span
        >
      </div>
      <p class="page-description">{{ component.description }}</p>
      <div class="component-meta">
        <span><Icon name="code" :size="13" />Composition API</span
        ><span><Icon name="palette" :size="13" />Themeable</span
        ><span><Icon name="box" :size="13" />Source included</span>
      </div>
      <section id="preview" class="component-section section-anchor">
        <div class="section-label-line">
          <h2>See it in action.</h2>
          <span>Go ahead. Make yourself at home.</span>
        </div>
        <DemoFrame :name="component.name" />
      </section>
      <section id="installation" class="component-section section-anchor">
        <h2 class="section-heading">Make it yours.</h2>
        <p class="section-description">{{ component.notes }}</p>
        <CodeBlock
          :code="`import { Vw${component.name} } from '@/lib'\nimport '@/lib/styles/tokens.css'\nimport '@/lib/styles/components.css'`"
          language="js"
          title="Import into your project"
        />
        <p class="component-usage-note">
          Open the <strong>Code</strong> tab above for the full working example,
          including state and event handling.
        </p>
      </section>
      <section id="api" class="component-section section-anchor">
        <h2 class="section-heading">A clear little API.</h2>
        <p class="section-description">
          Props stay close to familiar Vue conventions. Unspecified native
          attributes fall through to the component root unless the component
          forwards them to its input.
        </p>
        <div v-if="component.props.length" class="api-table-wrap">
          <table class="api-table">
            <thead>
              <tr>
                <th scope="col">Prop</th>
                <th scope="col">Type</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in component.props" :key="prop.name">
                <td>
                  <code>{{ prop.name }}</code
                  ><span
                    v-if="prop.default === 'required'"
                    class="required-star"
                    >*</span
                  >
                </td>
                <td>{{ prop.type }}</td>
                <td>
                  <code>{{ prop.default }}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else class="section-description">
          This component uses its default slot and standard HTML attributes. No
          additional props are required.
        </p>
      </section>
      <section v-if="component.events?.length" class="component-section">
        <h2 class="section-heading">Events, kept familiar.</h2>
        <p class="section-description">
          The component reports changes. Your application stays in control.
        </p>
        <div class="api-table-wrap">
          <table class="api-table">
            <thead>
              <tr>
                <th scope="col">Event</th>
                <th scope="col">Payload</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in component.events" :key="event.name">
                <td>
                  <code>{{ event.name }}</code>
                </td>
                <td>{{ event.payload }}</td>
                <td>{{ event.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="accessibility" class="component-section section-anchor">
        <h2 class="section-heading">The details matter.</h2>
        <VwAlert title="Keyboard & interaction" variant="info">{{
          component.keyboard
        }}</VwAlert>
        <p class="section-description">
          Provide meaningful labels and test the component in the context of
          your application. See the
          <RouterLink to="/docs/accessibility" class="text-link"
            >accessibility guide</RouterLink
          >
          for focus, validation, and motion guidelines.
        </p>
      </section>
      <section id="related" class="component-section section-anchor">
        <h2 class="section-heading">Better together.</h2>
        <div class="related-grid">
          <RouterLink
            v-for="item in related"
            :key="item.slug"
            :to="`/components/${item.slug}`"
            ><Icon name="box" :size="19" /><strong>{{ item.name }}</strong>
            <p>{{ item.description }}</p>
            <Icon name="arrow" :size="13"
          /></RouterLink>
        </div>
      </section>
      <div class="page-pagination">
        <RouterLink v-if="previous" :to="`/components/${previous.slug}`"
          ><small>PREVIOUS</small
          ><strong>← {{ previous.name }}</strong></RouterLink
        ><RouterLink v-if="next" :to="`/components/${next.slug}`"
          ><small>NEXT COMPONENT</small
          ><strong>{{ next.name }} →</strong></RouterLink
        >
      </div>
      <footer class="docs-footer">
        <span>A little less friction. A little more creation.</span
        ><RouterLink to="/components"
          >All components <Icon name="right" :size="12"
        /></RouterLink>
      </footer>
    </article>
    <DocsToc :items="toc" />
  </div>
</template>
