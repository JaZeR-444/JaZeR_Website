'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Music', href: '/music' },
  { name: 'Videos', href: '/videos' },
  { name: 'About', href: '/about' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-white/5">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="Go to home">
          <Image
            src="/images/JaZeR Main Logo.jpg"
            alt="JaZeR logo"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-jazer-text-secondary hover:text-jazer-text-primary transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-jazer-text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <ul className="container py-4 space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-jazer-text-secondary hover:text-jazer-text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}