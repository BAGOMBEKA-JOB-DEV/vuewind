export async function copyText(value) {
  const text = String(value);
  if (globalThis.navigator?.clipboard && globalThis.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  if (typeof document === "undefined")
    throw new Error("Clipboard requires a browser.");
  const previous = document.activeElement;
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.cssText = "position:fixed;opacity:0;pointer-events:none";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  previous?.focus();
  if (!copied)
    throw new Error("Copy was blocked. Select the code and copy it manually.");
}
