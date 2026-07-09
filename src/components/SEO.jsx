import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://hammadshahid.vercel.app'
const defaultImage = `${siteUrl}/image/og-image.jpg`

export default function SEO({ title, description, image, path, type = 'website' }) {
  const fullTitle = title
    ? `${title} | Hammad Shahid`
    : 'Hammad Shahid - Photographer & Videographer in Lucknow'

  const fullDescription = description || 'Professional photographer and videographer in Lucknow, Uttar Pradesh. Specializing in wedding photography, portrait sessions, event videography, photo editing, and video production.'
  const url = path ? `${siteUrl}${path}` : siteUrl
  const ogImage = image || defaultImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
