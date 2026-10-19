import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("docs-theme", () => {
  const mode = ref("dark");
  const accent = ref("green");
  const systemDark = ref(false);
  const isDark = computed(
    () =>
      mode.value === "dark" || (mode.value === "system" && systemDark.value),
  );
  let cleanup = () => {};
  function initialize() {
    if (typeof window === "undefined") return;
    cleanup();
    try {
      const saved = localStorage.getItem("vuewind-theme");
      const color = localStorage.getItem("vuewind-accent");
      if (["light", "dark", "system"].includes(saved)) mode.value = saved;
      if (["green", "blue", "violet"].includes(color)) accent.value = color;
    } catch {
      /* Settings remain usable when browser storage is unavailable. */
    }
    const media = matchMedia("(prefers-color-scheme: dark)");
    systemDark.value = media.matches;
    const update = (event) => (systemDark.value = event.matches);
    media.addEventListener("change", update);
    const stop = watch(
      [isDark, mode, accent],
      () => {
        document.documentElement.classList.toggle("dark", isDark.value);
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute("content", isDark.value ? "#141815" : "#fafbf9");
        document.documentElement.dataset.accent = accent.value;
        try {
          localStorage.setItem("vuewind-theme", mode.value);
          localStorage.setItem("vuewind-accent", accent.value);
        } catch {
          /* Optional persistence. */
        }
      },
      { immediate: true },
    );
    cleanup = () => {
      stop();
      media.removeEventListener("change", update);
    };
  }
  return {
    mode,
    accent,
    isDark,
    initialize,
    toggle: () => (mode.value = isDark.value ? "light" : "dark"),
  };
});
