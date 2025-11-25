import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'JaZeR\'s terms of service - read our terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="section-title">Terms of Service</h1>

        <div className="card">
          <div className="prose prose-invert max-w-none">
            <p className="text-jazer-text-secondary mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2>Acceptance of Terms</h2>
            <p className="text-jazer-text-secondary mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p className="text-jazer-text-secondary mb-4">
              Permission is granted to temporarily access the materials on JaZeR's website for personal, non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p className="text-jazer-text-secondary mb-4">
              The materials on this website are provided on an 'as is' basis. JaZeR makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h2>Limitations</h2>
            <p className="text-jazer-text-secondary">
              In no event shall JaZeR or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}