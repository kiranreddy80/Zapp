import { Helmet } from 'react-helmet-async'
import { SITE } from '@/data/site'

/**
 * Per-page document head. Every page sets its own title and description so
 * the site is share-ready and indexable once server rendering is added.
 */
export default function Seo({ title, description, image, path }) {
  const fullTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`
  const desc = description ?? SITE.description
  const url = path ? `https://sgdelectric.in${path}` : 'https://sgdelectric.in'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
