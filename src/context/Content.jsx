import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { fetchCollection, fetchContact, mediaUrl, subscribe } from '@/lib/cms'
import { BANNER_SLIDES } from '@/data/media'
import { GALLERY, LEADERSHIP, REVIEWS } from '@/data/content'
import { CONTACT as STATIC_CONTACT, SOCIALS as STATIC_SOCIALS } from '@/data/site'

/**
 * Live content from the admin panel, with the built-in content as a fallback.
 *
 * Two rules run through this file:
 *
 *  1. The site must render before the API answers, and must keep rendering if it
 *     never does. Every hook starts from the static data and only replaces it
 *     once real rows arrive, so an unreachable API is invisible to a visitor.
 *
 *  2. An empty collection is a deliberate state, not a failure. If an editor
 *     deletes every banner, the site shows no banners — falling back to the
 *     built-in ones would make deletion look broken. `null` means "no answer",
 *     `[]` means "answered: none".
 */

const ContentContext = createContext(null)

const EMPTY = { banners: null, team: null, gallery: null, reviews: null, contact: null }

export function ContentProvider({ children }) {
  const [data, setData] = useState(EMPTY)

  const load = useCallback(async (signal) => {
    const [banners, team, gallery, reviews, contact] = await Promise.all([
      fetchCollection('banners', { signal }),
      fetchCollection('team', { signal }),
      fetchCollection('gallery', { signal }),
      fetchCollection('reviews', { signal }),
      fetchContact({ signal }),
    ])
    if (signal?.aborted) return
    setData({ banners, team, gallery, reviews, contact })
  }, [])

  useEffect(() => {
    const ac = new AbortController()
    load(ac.signal)

    // the API announces every write; refetch rather than trying to patch state
    // from the event, so one code path produces what is on screen
    const off = subscribe(() => load())

    return () => {
      ac.abort()
      off()
    }
  }, [load])

  return <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
}

const useContent = () => useContext(ContentContext) ?? EMPTY

/* ------------------------------------------------------------------ */
/* One hook per section. Each maps API rows into the shape that        */
/* section already expects, so the components barely change.           */
/* ------------------------------------------------------------------ */

export function useBanners() {
  const { banners } = useContent()
  return useMemo(() => {
    if (!banners) return BANNER_SLIDES
    return banners.map((b) => ({ src: mediaUrl(b.image), alt: b.alt ?? '' }))
  }, [banners])
}

export function useTeam() {
  const { team } = useContent()
  return useMemo(() => {
    if (!team) return LEADERSHIP
    return team.map((m) => ({
      name: m.name,
      role: m.role,
      bio: m.bio ?? '',
      photo: mediaUrl(m.photo),
    }))
  }, [team])
}

export function useGallery() {
  const { gallery } = useContent()
  return useMemo(() => {
    if (!gallery) return GALLERY
    return gallery.map((g) => ({
      src: mediaUrl(g.image),
      caption: g.caption ?? '',
      tag: g.tag ?? 'Celebrations',
      alt: g.alt || g.caption || '',
      // the masonry reserves space from this; images added through the panel
      // have no measured size, so 4:5 keeps the column from jumping
      ratio: g.ratio ?? '4/5',
    }))
  }, [gallery])
}

export function useReviews() {
  const { reviews } = useContent()
  return useMemo(() => {
    if (!reviews) return REVIEWS
    return reviews.map((r) => ({
      name: r.name,
      city: r.city ?? '',
      stars: r.stars ?? 5,
      text: r.text ?? '',
    }))
  }, [reviews])
}

export function useContact() {
  const { contact } = useContent()
  return useMemo(() => {
    if (!contact) return { ...STATIC_CONTACT, socials: STATIC_SOCIALS }
    return {
      ...STATIC_CONTACT,
      phone: contact.phone || STATIC_CONTACT.phone,
      phoneHref: contact.phoneHref || STATIC_CONTACT.phoneHref,
      supportEmail: contact.email || STATIC_CONTACT.supportEmail,
      address: contact.address ?? '',
      city: contact.city ?? '',
      hours: contact.hours?.length ? contact.hours : STATIC_CONTACT.hours,
      socials: contact.socials?.length ? contact.socials : STATIC_SOCIALS,
    }
  }, [contact])
}

/** True once the API has answered — used only to avoid a flash of fallback. */
export function useIsLive() {
  const { banners } = useContent()
  return banners !== null
}
