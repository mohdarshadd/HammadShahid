import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import PortfolioSection from '../components/PortfolioSection'
import Services from '../components/Services'
import Contact from '../components/Contact'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hammad Shahid',
  description: 'Professional photographer and videographer in Lucknow, Uttar Pradesh.',
  url: 'https://hammadshahid.vercel.app',
  image: 'https://hammadshahid.vercel.app/image/hammad1.jpeg',
  telephone: '+918449930717',
  email: 'hammadshahid916@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/hammaadshahid_',
    'https://www.linkedin.com/in/hammad-shahid-614543163',
  ],
  priceRange: '$$',
  serviceType: [
    'Professional Photography',
    'Videography & Cinematography',
    'Photo Editing & Retouching',
    'Video Editing & Post-Production',
  ],
}

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location])

  return (
    <>
      <SEO
        description="Professional photographer and videographer in Lucknow. Wedding photography, portrait sessions, event videography, photo editing, and video production services."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hero />
      <About />
      <PortfolioSection />
      <Services />
      <Contact />
    </>
  )
}
