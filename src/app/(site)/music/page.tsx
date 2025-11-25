import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Explore JaZeR\'s music catalog - listen to tracks, discover releases, and follow my musical journey.',
}

export default function MusicPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">My Music</h1>

        <div className="card mb-8">
          <p className="text-jazer-text-secondary text-center py-8">
            🎵 Streaming platforms and music embeds will be integrated here
          </p>
          <p className="text-sm text-jazer-text-secondary text-center">
            Spotify, SoundCloud, YouTube Music, and Apple Music coming soon
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Single Name 1</h3>
            <p className="text-jazer-text-secondary">Release Date: 2024</p>
            <p className="text-jazer-text-secondary">Genre: Electronic / Pop</p>
          </div>
          <div className="card">
            <h3>Single Name 2</h3>
            <p className="text-jazer-text-secondary">Release Date: 2024</p>
            <p className="text-jazer-text-secondary">Genre: Hip-Hop / R&B</p>
          </div>
          <div className="card">
            <h3>EP/Album Name</h3>
            <p className="text-jazer-text-secondary">Release Date: 2023</p>
            <p className="text-jazer-text-secondary">Genre: Experimental</p>
          </div>
        </div>
      </div>
    </div>
  )
}