import { defineStore } from "pinia";
import { ref } from "vue";

export const useDocsStore = defineStore("docs", () => {
  const searchOpen = ref(false);
  const mobileOpen = ref(false);
  return { searchOpen, mobileOpen };
});
