import Link from 'next/link'

// TODO: Replace '#' with your actual social media URLs:
// - Instagram: https://instagram.com/yourusername
// - Twitter/X: https://twitter.com/yourusername
// - YouTube: https://youtube.com/@yourusername
// - Spotify: https://open.spotify.com/artist/yourartistid
const socialLinks = [
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'YouTube', href: '#', icon: '📺' },
  { name: 'Spotify', href: '#', icon: '🎵' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl hover:opacity-75 transition-opacity"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-jazer-text-secondary">
              &copy; {new Date().getFullYear()} JaZeR. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 text-sm">
              <Link href="/legal/privacy-policy" className="text-jazer-text-secondary hover:text-jazer-text-primary">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-jazer-text-secondary hover:text-jazer-text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}