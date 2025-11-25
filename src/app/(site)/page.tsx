import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="sr-only">JaZeR</h1>
          <Image
            src="/images/JaZeR Main Logo.jpg"
            alt="JaZeR"
            width={520}
            height={520}
            className="hero-logo"
            priority
          />
          <p className="text-xl text-jazer-text-secondary mb-8">
            Content Creator | Music Artist | Digital Storyteller
          </p>
          <Link href="/music" className="cta-button">
            Listen Now
          </Link>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Content</h2>
          <div className="grid">
            <div className="card">
              <h3>Latest Track</h3>
              <p className="text-jazer-text-secondary">
                Check out my newest release, blending electronic beats with soulful melodies.
              </p>
            </div>
            <div className="card">
              <h3>New Video</h3>
              <p className="text-jazer-text-secondary">
                Behind the scenes of my creative process and production workflow.
              </p>
            </div>
            <div className="card">
              <h3>Live Sessions</h3>
              <p className="text-jazer-text-secondary">
                Join me for exclusive live performances and Q&A sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Visuals that represent the brand</h2>
          <p className="text-jazer-text-secondary mb-4">
            Click a tile to apply its dominant color as the site accent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Gallery items will be implemented with interactivity later */}
            <div className="aspect-square bg-jazer-card rounded-lg overflow-hidden">
              <Image
                src="/images/JaZeR Main Logo.jpg"
                alt="JaZeR main logo"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Add more gallery items */}
          </div>
        </div>
      </section>
    </div>
  )
}