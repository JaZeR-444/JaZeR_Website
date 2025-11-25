import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Support JaZeR by purchasing official merchandise, music, and exclusive content.',
}

export default function ShopPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Shop</h1>

        <div className="grid">
          <div className="card">
            <h3>Merch Item 1</h3>
            <p className="text-jazer-text-secondary">
              Short description. Link to store or checkout.
            </p>
          </div>
          <div className="card">
            <h3>Merch Item 2</h3>
            <p className="text-jazer-text-secondary">
              Short description. Link to store or checkout.
            </p>
          </div>
          <div className="card">
            <h3>Digital Download</h3>
            <p className="text-jazer-text-secondary">
              Purchase high-quality digital downloads of my music.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}