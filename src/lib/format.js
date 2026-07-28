/** 2026-06-18 → 18 June 2026 */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** 9400 → ₹9,400 (Indian digit grouping) */
export function inr(value, { decimals = 0 } = {}) {
  return `₹${Number(value).toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`
}
