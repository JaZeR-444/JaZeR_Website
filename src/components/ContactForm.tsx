'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending message...')

    const formData = new FormData(e.currentTarget)

    try {
      // TODO: Sign up at https://formspree.io/ to get your form ID
      // Replace YOUR_FORM_ID with your actual Formspree form ID (e.g., 'mwkgabcd')
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setStatus('✓ Message sent successfully! I\'ll get back to you soon.')
        e.currentTarget.reset()
      } else {
        setStatus('✗ Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('✗ Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-jazer-text-secondary mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-3 py-2 bg-transparent border border-white/10 rounded-md text-jazer-text-primary placeholder-jazer-text-secondary focus:outline-none focus:ring-2 focus:ring-jazer-primary"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-jazer-text-secondary mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 bg-transparent border border-white/10 rounded-md text-jazer-text-primary placeholder-jazer-text-secondary focus:outline-none focus:ring-2 focus:ring-jazer-primary"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-jazer-text-secondary mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full px-3 py-2 bg-transparent border border-white/10 rounded-md text-jazer-text-primary placeholder-jazer-text-secondary focus:outline-none focus:ring-2 focus:ring-jazer-primary"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-jazer-text-secondary mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-3 py-2 bg-transparent border border-white/10 rounded-md text-jazer-text-primary placeholder-jazer-text-secondary focus:outline-none focus:ring-2 focus:ring-jazer-primary resize-vertical"
          placeholder="Your message..."
        />
      </div>

      <input type="hidden" name="_subject" value="New contact from JaZeR website" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="cta-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {status && (
        <p className={`text-center text-sm ${status.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
          {status}
        </p>
      )}
    </form>
  )
}