import { nextTick, onMounted, onBeforeUnmount, watch } from "vue";

export function useNativeDialog(element, open) {
  let disposed = false;
  const sync = async () => {
    await nextTick();
    if (disposed || !element.value) return;
    if (open() && !element.value.open) element.value.showModal();
    if (!open() && element.value.open) element.value.close();
  };
  onMounted(sync);
  watch(open, sync);
  onBeforeUnmount(() => {
    disposed = true;
    element.value?.close();
  });
}
