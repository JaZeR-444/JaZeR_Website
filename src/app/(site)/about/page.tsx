import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about JaZeR - my story, musical style, and creative journey.',
}

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="section-title text-center">About JaZeR</h1>

        <div className="card max-w-3xl mx-auto mb-12">
          <h2 className="text-xl font-semibold mb-4 text-center">My Story</h2>
          <p className="text-jazer-text-secondary mb-4">
            Welcome to my creative space. I'm JaZeR, a content creator and music artist dedicated to pushing boundaries and creating authentic experiences through sound and visuals.
          </p>
          <p className="text-jazer-text-secondary mb-4">
            My journey began with a passion for electronic music and digital storytelling. Through my work, I aim to connect with audiences on a deeper level, exploring themes of creativity, innovation, and self-expression while maintaining an authentic and innovative approach to artistry.
          </p>
          <p className="text-jazer-text-secondary">
            When I'm not creating music or content, you can find me exploring new technologies, collaborating with other artists, and engaging with my community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Musical Style</h3>
            <p className="text-jazer-text-secondary">
              Genre-blending electronic music with influences from hip-hop, pop, and experimental sounds. I focus on creating immersive sonic experiences that tell stories and evoke emotions.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Content Focus</h3>
            <p className="text-jazer-text-secondary">
              Creating engaging content around music production, creative process, lifestyle, and behind-the-scenes looks at the music industry. I believe in transparency and authenticity in all my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}