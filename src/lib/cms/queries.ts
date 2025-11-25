import { contentfulClient, contentfulPreviewClient } from './contentful'
import { unstable_cache } from 'next/cache'

// Helper function to get the appropriate client
function getClient(preview = false) {
  return preview ? contentfulPreviewClient : contentfulClient
}

// Fetch all music releases
export const getMusicReleases = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'musicRelease',
      order: ['-fields.releaseDate'],
    })

    return response.items
  },
  ['music-releases'],
  { revalidate: 3600 } // Cache for 1 hour
)

// Fetch featured music releases
export const getFeaturedMusicReleases = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'musicRelease',
      'fields.featured': true,
      order: ['-fields.releaseDate'],
    })

    return response.items
  },
  ['featured-music'],
  { revalidate: 3600 }
)

// Fetch a single music release by slug
export const getMusicReleaseBySlug = unstable_cache(
  async (slug: string, preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'musicRelease',
      'fields.slug': slug,
      limit: 1,
    })

    return response.items[0] || null
  },
  ['music-release'],
  { revalidate: 3600 }
)

// Fetch all videos
export const getVideos = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'video',
      order: ['-fields.releaseDate'],
    })

    return response.items
  },
  ['videos'],
  { revalidate: 3600 }
)

// Fetch featured videos
export const getFeaturedVideos = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'video',
      'fields.featured': true,
      order: ['-fields.releaseDate'],
    })

    return response.items
  },
  ['featured-videos'],
  { revalidate: 3600 }
)

// Fetch a single video by slug
export const getVideoBySlug = unstable_cache(
  async (slug: string, preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'video',
      'fields.slug': slug,
      limit: 1,
    })

    return response.items[0] || null
  },
  ['video'],
  { revalidate: 3600 }
)

// Fetch all blog posts
export const getBlogPosts = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
    })

    return response.items
  },
  ['blog-posts'],
  { revalidate: 3600 }
)

// Fetch a single blog post by slug
export const getBlogPostBySlug = unstable_cache(
  async (slug: string, preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    return response.items[0] || null
  },
  ['blog-post'],
  { revalidate: 3600 }
)

// Fetch a page by slug
export const getPageBySlug = unstable_cache(
  async (slug: string, preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    })

    return response.items[0] || null
  },
  ['page'],
  { revalidate: 3600 }
)

// Fetch all shop items
export const getShopItems = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'shopItem',
    order: ['-sys.createdAt'],
    })

    return response.items
  },
  ['shop-items'],
  { revalidate: 3600 }
)

// Fetch featured shop items
export const getFeaturedShopItems = unstable_cache(
  async (preview = false) => {
    const client = getClient(preview)

    const response = await client.getEntries({
      content_type: 'shopItem',
      'fields.featured': true,
      order: ['-sys.createdAt'],
    })

    return response.items
  },
  ['featured-shop'],
  { revalidate: 3600 }
)