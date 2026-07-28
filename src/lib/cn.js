/** Tiny className joiner — drops falsy values. */
export default function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
