import { onMounted, onBeforeUnmount } from "vue";

export function useDisclosure(element) {
  const close = () => {
    if (element.value) element.value.open = false;
  };
  const outside = (event) => {
    if (element.value && !element.value.contains(event.target)) close();
  };
  const escape = (event) => {
    if (event.key === "Escape" && element.value?.open) {
      close();
      element.value.querySelector("summary")?.focus();
    }
  };
  onMounted(() => {
    document.addEventListener("click", outside);
    element.value?.addEventListener("keydown", escape);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("click", outside);
    element.value?.removeEventListener("keydown", escape);
  });
  return { close };
}
