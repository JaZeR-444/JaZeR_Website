import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Watch JaZeR\'s music videos, behind-the-scenes content, live performances, and exclusive videos.',
}

export default function VideosPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Videos & Visuals</h1>

        <div className="card mb-8">
          <p className="text-jazer-text-secondary text-center py-8">
            📹 Video embeds and playlists will be integrated here
          </p>
          <p className="text-sm text-jazer-text-secondary text-center">
            YouTube, Vimeo, and other video platforms coming soon
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Music Video - Track Name</h3>
            <p className="text-jazer-text-secondary">
              Official music video featuring stunning visuals and creative direction.
            </p>
          </div>
          <div className="card">
            <h3>Behind The Scenes</h3>
            <p className="text-jazer-text-secondary">
              See how I create my music from concept to final production.
            </p>
          </div>
          <div className="card">
            <h3>Live Performance</h3>
            <p className="text-jazer-text-secondary">
              Captured live at a special venue - full energy performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}