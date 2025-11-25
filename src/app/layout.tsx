import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'JaZeR - Content Creator & Music Artist',
  description: 'Official website of JaZeR - Content creator, music artist, and digital storyteller.',
  keywords: ['JaZeR', 'music artist', 'content creator', 'electronic music', 'music producer', 'digital storyteller'],
  authors: [{ name: 'JaZeR' }],
  openGraph: {
    title: 'JaZeR - Content Creator & Music Artist',
    description: 'Official website of JaZeR - Listen to my latest tracks, watch exclusive content, and connect with my creative journey.',
    url: 'https://jazeratx.com/',
    siteName: 'JaZeR',
    images: [
      {
        url: '/images/JaZeR Main Logo.jpg',
        width: 1200,
        height: 630,
        alt: 'JaZeR Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JaZeR - Content Creator & Music Artist',
    description: 'Official website of JaZeR - Listen to my latest tracks, watch exclusive content, and connect with my creative journey.',
    images: ['/images/JaZeR Main Logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'JaZeR',
    url: 'https://jazeratx.com',
    genre: ['Electronic', 'Pop', 'Hip-Hop'],
    description: 'Content creator, music artist, and digital storyteller',
    // TODO: Add your actual social media URLs
    sameAs: [
      'https://instagram.com/yourusername',
      'https://twitter.com/yourusername',
      'https://youtube.com/@yourusername',
      'https://open.spotify.com/artist/yourartistid'
    ]
  }

  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-montserrat antialiased bg-jazer-dark text-jazer-text-primary">
        {children}
      </body>
    </html>
  )
}
