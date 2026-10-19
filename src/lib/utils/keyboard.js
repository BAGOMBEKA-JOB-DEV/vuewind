export function moveFocus(event, root, { activate = false } = {}) {
  if (
    ![
      "ArrowRight",
      "ArrowLeft",
      "ArrowDown",
      "ArrowUp",
      "Home",
      "End",
    ].includes(event.key)
  )
    return;
  const items = [...root.querySelectorAll("[data-vw-item]:not(:disabled)")];
  if (!items.length) return;
  const index = items.indexOf(root.ownerDocument.activeElement);
  const backwards = ["ArrowLeft", "ArrowUp"].includes(event.key);
  const target =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? items.length - 1
        : (index + (backwards ? -1 : 1) + items.length) % items.length;
  event.preventDefault();
  items[target].focus();
  if (activate) items[target].click();
}
