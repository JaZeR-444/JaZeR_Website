import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with JaZeR - send a message, collaborate, or just say hello.',
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container max-w-2xl">
        <h1 className="section-title text-center">Get In Touch</h1>

        <div className="card">
          <ContactForm />
        </div>

        <div className="text-center mt-8">
          <p className="text-jazer-text-secondary mb-4">
            Or reach out on social media:
          </p>
          {/* TODO: Replace '#' with your actual social media URLs */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-2xl hover:opacity-75 transition-opacity" aria-label="Instagram">📷</a>
            <a href="#" className="text-2xl hover:opacity-75 transition-opacity" aria-label="Twitter">🐦</a>
            <a href="#" className="text-2xl hover:opacity-75 transition-opacity" aria-label="YouTube">📺</a>
            <a href="#" className="text-2xl hover:opacity-75 transition-opacity" aria-label="Spotify">🎵</a>
          </div>
        </div>
      </div>
    </div>
  )
}