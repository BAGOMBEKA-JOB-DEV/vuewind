export function clamp(value, min = 0, max = 100) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(Math.max(number, min), max) : min;
}

export function pageRange(page, total, radius = 2) {
  const count = Math.max(1, Math.floor(total));
  const current = clamp(page, 1, count);
  const start = Math.max(1, Math.min(current - radius, count - radius * 2));
  return Array.from(
    { length: Math.min(count, radius * 2 + 1) },
    (_, i) => start + i,
  );
}
