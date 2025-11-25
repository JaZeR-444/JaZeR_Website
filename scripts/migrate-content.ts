#!/usr/bin/env node

/**
 * Migrate existing content from static site to Contentful
 * Run with: npm run migrate-content
 */

import { createClient } from 'contentful-management'
import { sampleContent } from './sample-content.js'

const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN // Management token needed for writing

if (!spaceId || !accessToken) {
  console.error('❌ Missing CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN')
  process.exit(1)
}

const client = createClient({
  accessToken,
})

async function migrateContent() {
  try {
    console.log('🚀 Starting content migration...')

    const space = await client.getSpace(spaceId)
    const environment = await space.getEnvironment('master')



    // Create entries
    console.log('📝 Creating page entries...')
    for (const page of sampleContent.pages) {
      const entry = await environment.createEntry('page', {
        fields: {
          title: { 'en-US': page.title },
          slug: { 'en-US': page.slug },
          content: { 'en-US': page.content },
          seoTitle: { 'en-US': page.seoTitle },
          seoDescription: { 'en-US': page.seoDescription }
        }
      })
      console.log(`✅ Created page: ${page.title}`)
    }

    console.log('🎵 Creating music release entries...')
    for (const release of sampleContent.musicReleases) {
      const entry = await environment.createEntry('musicRelease', {
        fields: {
          title: { 'en-US': release.title },
          slug: { 'en-US': release.slug },
          releaseType: { 'en-US': release.releaseType },
          releaseDate: { 'en-US': release.releaseDate },
          genre: { 'en-US': release.genre },
          description: { 'en-US': release.description },
          streamingLinks: { 'en-US': release.streamingLinks },
          featured: { 'en-US': release.featured }
        }
      })
      console.log(`✅ Created music release: ${release.title}`)
    }

    console.log('🎥 Creating video entries...')
    for (const video of sampleContent.videos) {
      const entry = await environment.createEntry('video', {
        fields: {
          title: { 'en-US': video.title },
          slug: { 'en-US': video.slug },
          videoType: { 'en-US': video.videoType },
          description: { 'en-US': video.description },
          youtubeId: { 'en-US': video.youtubeId },
          releaseDate: { 'en-US': video.releaseDate },
          featured: { 'en-US': video.featured }
        }
      })
      console.log(`✅ Created video: ${video.title}`)
    }

    console.log('🛍️ Creating shop item entries...')
    for (const item of sampleContent.shopItems) {
      const entry = await environment.createEntry('shopItem', {
        fields: {
          name: { 'en-US': item.name },
          slug: { 'en-US': item.slug },
          description: { 'en-US': item.description },
          price: { 'en-US': item.price },
          currency: { 'en-US': item.currency },
          category: { 'en-US': item.category },
          inStock: { 'en-US': item.inStock },
          featured: { 'en-US': item.featured }
        }
      })
      console.log(`✅ Created shop item: ${item.name}`)
    }

    // Publish all entries
    console.log('📤 Publishing entries...')
    const entries = await environment.getEntries()
    for (const entry of entries.items) {
      if (entry.sys.publishedVersion) {
        await entry.publish()
      }
    }

    console.log('🎉 Migration completed successfully!')
    console.log('📋 Next steps:')
    console.log('1. Upload images to Contentful Media section')
    console.log('2. Link images to the created entries')
    console.log('3. Update streaming links and video IDs with real URLs')
    console.log('4. Customize content to match your actual releases')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrateContent()