import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'JaZeR\'s privacy policy - learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="section-title">Privacy Policy</h1>

        <div className="card">
          <div className="prose prose-invert max-w-none">
            <p className="text-jazer-text-secondary mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2>Information We Collect</h2>
            <p className="text-jazer-text-secondary mb-4">
              We collect information you provide directly to us, such as when you contact us through our website or subscribe to our newsletter.
            </p>

            <h2>How We Use Your Information</h2>
            <p className="text-jazer-text-secondary mb-4">
              We use the information we collect to respond to your inquiries, provide our services, and communicate with you about our content and updates.
            </p>

            <h2>Information Sharing</h2>
            <p className="text-jazer-text-secondary mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <h2>Contact Us</h2>
            <p className="text-jazer-text-secondary">
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}