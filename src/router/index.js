import { createRouter, createWebHistory } from "vue-router";
import DocsLayout from "../docs/DocsLayout.vue";
import IntroductionView from "../docs/views/IntroductionView.vue";
import { findComponent } from "../docs/registry.js";
import { guides } from "../docs/navigation.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DocsLayout,
      children: [
        {
          path: "",
          name: "home",
          component: IntroductionView,
          meta: { title: "Introduction" },
        },
        {
          path: "docs/introduction",
          name: "introduction",
          component: IntroductionView,
          meta: { title: "Introduction" },
        },
        {
          path: "docs/:slug",
          name: "guide",
          component: () => import("../docs/views/GuideView.vue"),
        },
        {
          path: "components",
          name: "components",
          component: () => import("../docs/views/ComponentsView.vue"),
          meta: { title: "Components" },
        },
        {
          path: "components/:slug",
          name: "component",
          component: () => import("../docs/views/ComponentView.vue"),
        },
        {
          path: "blocks",
          name: "blocks",
          component: () => import("../docs/views/BlocksView.vue"),
          meta: { title: "Blocks" },
        },
        {
          path: "changelog",
          name: "changelog",
          component: () => import("../docs/views/ChangelogView.vue"),
          meta: { title: "Changelog" },
        },
        {
          path: ":pathMatch(.*)*",
          name: "not-found",
          component: () => import("../docs/views/NotFoundView.vue"),
          meta: { title: "Page not found" },
        },
      ],
    },
  ],
  scrollBehavior(to, from, saved) {
    return saved || (to.hash ? { el: to.hash, top: 96 } : { top: 0 });
  },
});
router.afterEach((to) => {
  const title =
    to.name === "component"
      ? findComponent(to.params.slug)?.name
      : to.name === "guide"
        ? guides.find((g) => g.slug === to.params.slug)?.name
        : to.meta.title;
  if (typeof document !== "undefined") {
    document.title = `${title || "Page not found"} — Vuewind`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.href = new URL(to.path, "https://vuewind-two.vercel.app/").href;
  }
});
export default router;
