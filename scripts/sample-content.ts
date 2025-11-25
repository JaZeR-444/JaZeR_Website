// Sample content data for migration to Contentful
// Edit this file with your actual content before running the migration

export const sampleContent = {
  pages: [
    {
      title: 'About',
      slug: 'about',
      content: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'heading-2',
            data: {},
            content: [{ nodeType: 'text', value: 'My Story', marks: [], data: {} }]
          },
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Welcome to my creative space. I\'m JaZeR, a content creator and music artist dedicated to pushing boundaries and creating authentic experiences through sound and visuals.',
                marks: [],
                data: {}
              }
            ]
          },
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'My journey began with a passion for electronic music and digital storytelling. Through my work, I aim to connect with audiences on a deeper level, exploring themes of creativity, innovation, and self-expression while maintaining an authentic and innovative approach to artistry.',
                marks: [],
                data: {}
              }
            ]
          },
          {
            nodeType: 'heading-3',
            data: {},
            content: [{ nodeType: 'text', value: 'Musical Style', marks: [], data: {} }]
          },
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Genre-blending electronic music with influences from hip-hop, pop, and experimental sounds. I focus on creating immersive sonic experiences that tell stories and evoke emotions.',
                marks: [],
                data: {}
              }
            ]
          },
          {
            nodeType: 'heading-3',
            data: {},
            content: [{ nodeType: 'text', value: 'Content Focus', marks: [], data: {} }]
          },
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Creating engaging content around music production, creative process, lifestyle, and behind-the-scenes looks at the music industry. I believe in transparency and authenticity in all my work.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      seoTitle: 'About JaZeR - Content Creator & Music Artist',
      seoDescription: 'Learn more about JaZeR\'s journey as a content creator and music artist.'
    }
  ],

  musicReleases: [
    {
      title: 'Single Name 1',
      slug: 'single-name-1',
      releaseType: 'single',
      releaseDate: '2024-01-15T00:00:00Z',
      genre: ['Electronic', 'Pop'],
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Check out my newest release, blending electronic beats with soulful melodies.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      streamingLinks: {
        spotify: 'https://open.spotify.com/artist/your-spotify-id',
        appleMusic: 'https://music.apple.com/artist/your-apple-id',
        youtube: 'https://youtube.com/@your-channel',
        soundcloud: 'https://soundcloud.com/your-profile'
      },
      featured: true
    },
    {
      title: 'Single Name 2',
      slug: 'single-name-2',
      releaseType: 'single',
      releaseDate: '2024-02-01T00:00:00Z',
      genre: ['Hip-Hop', 'R&B'],
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'A smooth blend of hip-hop beats and R&B vocals.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      streamingLinks: {
        spotify: 'https://open.spotify.com/artist/your-spotify-id',
        appleMusic: 'https://music.apple.com/artist/your-apple-id',
        youtube: 'https://youtube.com/@your-channel'
      },
      featured: false
    },
    {
      title: 'EP/Album Name',
      slug: 'ep-album-name',
      releaseType: 'ep',
      releaseDate: '2023-06-01T00:00:00Z',
      genre: ['Experimental'],
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'A collection of experimental tracks exploring new sonic territories.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      streamingLinks: {
        spotify: 'https://open.spotify.com/artist/your-spotify-id',
        appleMusic: 'https://music.apple.com/artist/your-apple-id'
      },
      featured: false
    }
  ],

  videos: [
    {
      title: 'Music Video - Track Name',
      slug: 'music-video-track-name',
      videoType: 'music_video',
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Official music video featuring stunning visuals and creative direction.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      releaseDate: '2024-01-01T00:00:00Z',
      featured: true
    },
    {
      title: 'Behind The Scenes',
      slug: 'behind-the-scenes',
      videoType: 'behind_the_scenes',
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'See how I create my music from concept to final production.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      releaseDate: '2023-12-15T00:00:00Z',
      featured: false
    },
    {
      title: 'Live Performance',
      slug: 'live-performance',
      videoType: 'live',
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Captured live at a special venue - full energy performance.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
      releaseDate: '2023-11-20T00:00:00Z',
      featured: false
    }
  ],

  shopItems: [
    {
      name: 'JaZeR Logo T-Shirt',
      slug: 'jazer-logo-t-shirt',
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Premium cotton t-shirt featuring the JaZeR logo. Available in multiple colors and sizes.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      price: 29.99,
      currency: 'USD',
      category: 'Apparel',
      inStock: true,
      featured: true,
      externalUrl: 'https://your-store.com/jazer-t-shirt'
    },
    {
      name: 'JaZeR Vinyl Record',
      slug: 'jazer-vinyl-record',
      description: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Limited edition vinyl pressing of my latest EP. High-quality audio on classic black vinyl.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      price: 24.99,
      currency: 'USD',
      category: 'Music',
      inStock: true,
      featured: false,
      externalUrl: 'https://your-store.com/jazer-vinyl'
    }
  ]
}