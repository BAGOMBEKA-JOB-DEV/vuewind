<script setup>
import { ref } from "vue";
import DocsToc from "../components/DocsToc.vue";
import ThemeControls from "../components/ThemeControls.vue";
import CodeBlock from "../components/CodeBlock.vue";
import Icon from "../../lib/Icon.vue";
import VwButton from "../../lib/components/VwButton.vue";
import VwAvatarGroup from "../../lib/components/VwAvatarGroup.vue";
import VwBadge from "../../lib/components/VwBadge.vue";
import VwSwitch from "../../lib/components/VwSwitch.vue";
import VwCheckbox from "../../lib/components/VwCheckbox.vue";
import VwInput from "../../lib/components/VwInput.vue";
import VwProgress from "../../lib/components/VwProgress.vue";
import { components } from "../registry.js";
const notifications = ref(true);
const updates = ref(false);
const email = ref("");
const subscribed = ref(false);
const emailError = ref("");
const people = [
  { name: "Alex Morgan" },
  { name: "Sarah Chen" },
  { name: "James Wilson" },
  { name: "Priya Patel" },
  { name: "Daniel Lee" },
];
const quickStartCode = "npm install @bagombeka/vuewind";
const toc = [
  { id: "overview", label: "Overview" },
  { id: "the-collection", label: "The collection" },
  { id: "why-vuewind", label: "Why Vuewind?" },
  { id: "quick-start", label: "Quick start" },
  { id: "next-steps", label: "Next steps" },
];
function subscribe() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = "Enter a valid email to try the demo.";
    return;
  }
  emailError.value = "";
  subscribed.value = true;
}
</script>
<template>
  <div class="docs-page-grid">
    <article class="docs-article intro-article">
      <div class="page-topline">
        <div class="page-breadcrumb">
          <Icon name="book" :size="13" /><span>Documentation</span><span>/</span
          ><span>Introduction</span>
        </div>
        <a
          href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          class="page-source"
          >View source <Icon name="arrow" :size="12"
        /></a>
      </div>
      <section id="overview" class="intro-hero section-anchor">
        <div class="hero-copy">
          <RouterLink to="/changelog" class="hero-release"
            ><span class="small-green-dot" /><span
              >A fresh chapter for Vuewind</span
            ><Icon name="right" :size="12"
          /></RouterLink>
          <h1>Good ideas deserve<br /><span>great components.</span></h1>
          <p>
            Thoughtfully crafted Vue components that feel right from the start.
            Beautiful defaults. Room to make them yours.
          </p>
          <div class="hero-actions">
            <RouterLink to="/docs/installation" class="vw-button" data-size="lg"
              >Start building <Icon name="right" :size="16" /></RouterLink
            ><RouterLink
              to="/components"
              class="vw-button"
              data-size="lg"
              data-variant="outline"
              ><Icon name="grid" :size="16" />Explore components</RouterLink
            >
          </div>
          <div class="hero-compatibility">
            <span
              ><svg
                viewBox="0 0 24 21"
                width="14"
                height="13"
                aria-hidden="true"
              >
                <path fill="#42b883" d="M0 0h5l7 12L19 0h5L12 21z" />
                <path fill="#35495e" d="M5 0h4l3 5 3-5h4l-7 12z" /></svg
              >Vue 3</span
            ><i /><span><Icon name="wind" :size="14" />CSS tokens</span
            ><i /><span><Icon name="shield" :size="13" />MIT licensed</span>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="hero-art-grid" />
          <div class="hero-art-window">
            <div class="mini-window-top">
              <span /><span /><span /><code>your-next-idea.vue</code>
            </div>
            <div class="hero-art-logo"><Icon name="wind" :size="48" /></div>
            <div class="hero-art-title">
              A little less setup.<br /><strong>A lot more possibility.</strong>
            </div>
            <div class="hero-art-tags">
              <span>Vue</span><span>You</span><span>Whatever comes next</span>
            </div>
          </div>
          <div class="hero-art-floating hero-art-floating-top">
            <span class="small-green-dot" />Made to feel like yours.
          </div>
          <div class="hero-art-floating hero-art-floating-bottom">
            <Icon name="check" :size="13" />Thoughtful by default.
          </div>
          <span class="art-corner art-corner-one">+</span
          ><span class="art-corner art-corner-two">+</span>
        </div>
      </section>
      <div class="intro-metrics">
        <div>
          <strong>{{ components.length }}<span> components</span></strong
          ><small>Small pieces. Big possibilities.</small>
        </div>
        <div>
          <strong>100%<span> open source</span></strong
          ><small>Read it. Change it. Make it yours.</small>
        </div>
        <div>
          <strong>Your<span> design language</span></strong
          ><small>A foundation, with room to grow.</small>
        </div>
      </div>
      <section id="the-collection" class="collection-section section-anchor">
        <div class="section-topline">
          <div>
            <div class="eyebrow">A FEW THINGS YOU CAN MAKE</div>
            <h2 class="section-heading">The details make the difference.</h2>
            <p class="section-description">
              Real components. Working together. Ready for your next idea.
            </p>
          </div>
          <ThemeControls />
        </div>
        <div class="showcase-grid">
          <div class="showcase-card revenue-card">
            <div class="vw-between">
              <span class="showcase-label">Overview</span
              ><span class="showcase-period"
                >This month <Icon name="down" :size="11"
              /></span>
            </div>
            <p class="revenue-label">Total revenue</p>
            <div class="revenue-number">$24,680<span>↗ 12.8%</span></div>
            <p class="revenue-context">A little better than last month.</p>
            <div
              class="revenue-chart"
              role="img"
              aria-label="Revenue chart showing an upward trend"
            >
              <div
                v-for="(height, i) in [
                  24, 36, 29, 47, 40, 58, 51, 68, 57, 79, 72, 94,
                ]"
                :key="i"
                :style="{ height: `${height}%` }"
                :class="{ 'is-highlight': i === 11 }"
              />
            </div>
            <div class="chart-labels">
              <span>Jun 1</span><span>Jun 15</span><span>Jun 30</span>
            </div>
            <div class="showcase-card-footer">
              <Icon name="chart" :size="12" />Stat, Badge & a little
              CSS<RouterLink
                to="/components/stat"
                aria-label="View Stat component"
                ><Icon name="arrow" :size="13"
              /></RouterLink>
            </div>
          </div>
          <div class="showcase-card team-card">
            <div class="vw-between">
              <span class="showcase-label">Better together</span
              ><span class="showcase-mini-icon"
                ><Icon name="user" :size="15"
              /></span>
            </div>
            <h3>A space for your team.</h3>
            <p>Good people. Great possibilities.</p>
            <div class="team-card-avatars">
              <VwAvatarGroup :items="people" :max="4" /><span
                >+ you, hopefully.</span
              >
            </div>
            <div class="team-divider" />
            <div class="team-member-row">
              <span class="team-project-icon"
                ><Icon name="layers" :size="16"
              /></span>
              <div>
                <strong>Website redesign</strong
                ><small>12 tasks · 4 people</small>
              </div>
              <VwBadge variant="success" dot>On track</VwBadge>
            </div>
            <VwProgress :value="68" label="Website redesign completion" />
            <div class="team-progress-caption">
              <span>A good start.</span><strong>68%</strong>
            </div>
            <RouterLink
              to="/components/avatar-group"
              class="vw-button team-card-button"
              data-variant="outline"
              >Meet the components <Icon name="right" :size="13"
            /></RouterLink>
          </div>
          <div class="showcase-card preferences-card">
            <div class="vw-between">
              <span class="showcase-label">Just your style</span
              ><Icon name="settings" :size="15" />
            </div>
            <h3>Make yourself at home.</h3>
            <p>The little things that make it yours.</p>
            <div class="preference-row">
              <div>
                <strong>Notifications</strong><small>Stay in the loop.</small>
              </div>
              <VwSwitch v-model="notifications" aria-label="Notifications" />
            </div>
            <div class="preference-row">
              <div>
                <strong>Product updates</strong
                ><small>Only the good stuff.</small>
              </div>
              <VwSwitch v-model="updates" aria-label="Product updates" />
            </div>
            <div class="team-divider" />
            <div class="preference-bottom">
              <VwCheckbox
                v-model="updates"
                label="A little inspiration in my inbox"
              />
            </div>
            <div class="showcase-card-footer">
              <Icon name="settings" :size="12" />Switch, Checkbox & your
              preferences<RouterLink
                to="/components/switch"
                aria-label="View Switch component"
                ><Icon name="arrow" :size="13"
              /></RouterLink>
            </div>
          </div>
          <div class="showcase-card subscribe-card">
            <span class="subscribe-icon"><Icon name="mail" :size="22" /></span>
            <div class="subscribe-copy">
              <h3>A little inspiration. Occasionally.</h3>
              <p v-if="!subscribed">A form demo that feels good to fill in.</p>
              <p v-else role="status">
                Looking good! This demo keeps your email local.
              </p>
            </div>
            <form
              v-if="!subscribed"
              @submit.prevent="subscribe"
              class="subscribe-form"
              novalidate
            >
              <VwInput
                v-model="email"
                type="email"
                aria-label="Email for the local form demo"
                placeholder="you@company.com"
                :error="emailError"
              /><VwButton type="submit"
                >Try it out <Icon name="right" :size="13"
              /></VwButton>
            </form>
            <VwBadge v-else variant="success" dot>All set</VwBadge>
          </div>
        </div>
        <div class="collection-bottom">
          <span>A few possibilities. A whole collection to explore.</span
          ><RouterLink to="/components" class="text-link"
            >Browse all {{ components.length }} components
            <Icon name="right" :size="14"
          /></RouterLink>
        </div>
      </section>
      <section id="why-vuewind" class="why-section section-anchor">
        <div class="eyebrow">BUILT WITH A LITTLE MORE CARE</div>
        <h2 class="section-heading">A good foundation changes everything.</h2>
        <div class="feature-grid">
          <div
            v-for="feature in [
              {
                icon: 'palette',
                title: 'Yours, from the start.',
                text: 'Semantic tokens and considered defaults. Change the feel without fighting the framework.',
              },
              {
                icon: 'code',
                title: 'Simple where it matters.',
                text: 'Clear props. Familiar v-model. Slots that let you compose instead of work around.',
              },
              {
                icon: 'shield',
                title: 'Thoughtful interactions.',
                text: 'Native controls, visible focus, and reduced motion. A considered place to start.',
              },
            ]"
            :key="feature.title"
            class="feature-item"
          >
            <span><Icon :name="feature.icon" :size="19" /></span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </div>
        </div>
      </section>
      <section id="quick-start" class="quick-start-section section-anchor">
        <div class="quick-start-copy">
          <div class="eyebrow">FROM IDEA TO INTERFACE</div>
          <h2 class="section-heading">Your next chapter starts here.</h2>
          <p class="section-description">
            Install Vuewind, import @bagombeka/vuewind/style.css in your app
            entry, and start composing.
          </p>
          <RouterLink to="/docs/installation" class="text-link"
            >Read the installation guide <Icon name="right" :size="14"
          /></RouterLink>
        </div>
        <CodeBlock :code="quickStartCode" language="shell" title="Terminal" />
      </section>
      <section id="next-steps" class="next-steps section-anchor">
        <RouterLink to="/docs/installation"
          ><span class="next-step-icon"><Icon name="terminal" /></span>
          <div>
            <small>YOUR NEXT STEP</small><strong>Up and running.</strong>
            <p>From a fresh clone to your first component.</p>
          </div>
          <Icon name="right" :size="17" /></RouterLink
        ><RouterLink to="/docs/theming"
          ><span class="next-step-icon"><Icon name="palette" /></span>
          <div>
            <small>MAKE IT YOURS</small
            ><strong>A familiar feel. Your style.</strong>
            <p>Give your interface its own point of view.</p>
          </div>
          <Icon name="right" :size="17"
        /></RouterLink>
      </section>
      <footer class="docs-footer">
        <span>Made with care. Built with Vue.</span
        ><span
          >Open source under MIT <span class="footer-dot">·</span
          ><a
            href="https://github.com/BAGOMBEKA-JOB-DEV/vuewind"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub <Icon name="arrow" :size="11" /></a
        ></span>
      </footer>
    </article>
    <DocsToc :items="toc" />
  </div>
</template>
