/**
 * Talks to the admin API.
 *
 * The base URL is configurable so a deployed build can point somewhere other
 * than a developer's machine: set VITE_API_URL at build time.
 */
export const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

/** Uploaded files are stored server-relative; remote URLs are left alone. */
export const mediaUrl = (p) => (!p ? '' : /^https?:|^data:|^\/media\//.test(p) ? p : `${API}${p}`)

/**
 * Fetch one collection, or null if the API cannot be reached.
 *
 * Null rather than throwing, because every caller does the same thing with a
 * failure: keep showing the built-in content. A marketing site must not go blank
 * because a content API is down.
 */
export async function fetchCollection(name, { signal } = {}) {
  try {
    const res = await fetch(`${API}/api/${name}?active=1`, { signal })
    if (!res.ok) return null
    const rows = await res.json()
    return Array.isArray(rows) ? rows : null
  } catch {
    return null
  }
}

export async function fetchContact({ signal } = {}) {
  try {
    const res = await fetch(`${API}/api/contact`, { signal })
    if (!res.ok) return null
    const row = await res.json()
    return row && Object.keys(row).length ? row : null
  } catch {
    return null
  }
}

/**
 * Subscribe to content changes.
 *
 * EventSource reconnects by itself, so a restarted API resumes without help.
 * Returns an unsubscribe function.
 */
export function subscribe(onChange) {
  if (typeof EventSource === 'undefined') return () => {}

  let source
  try {
    source = new EventSource(`${API}/api/stream`)
  } catch {
    return () => {}
  }

  source.addEventListener('change', onChange)
  // errors are expected whenever the API is not running; EventSource retries on
  // its own, and the site is already showing its fallback content
  source.onerror = () => {}

  return () => {
    source.removeEventListener('change', onChange)
    source.close()
  }
}

/** POST a contact-form submission. Resolves on success, throws otherwise. */
export async function sendEnquiry(payload) {
  let res
  try {
    res = await fetch(`${API}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error(
      'We could not send that just now — please email or call us instead, the details are alongside.',
    )
  }
  if (res.ok) return

  const body = await res.json().catch(() => null)
  throw new Error(
    body?.errors
      ? Object.values(body.errors)[0]
      : (body?.error ?? 'Something went wrong. Please try again.'),
  )
}
