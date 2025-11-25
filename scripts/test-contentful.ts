#!/usr/bin/env node

/**
 * Test Contentful connection
 * Run with: npm run test-contentful
 */

import { contentfulClient } from '../src/lib/contentful.js'

async function testContentful() {
  try {
    console.log('🔍 Testing Contentful connection...')

    // Test basic connection
    const space = await contentfulClient.getSpace()
    console.log(`✅ Connected to space: ${space.name} (${space.sys.id})`)

    // Test content types
    const contentTypes = await contentfulClient.getContentTypes()
    console.log(`📋 Found ${contentTypes.items.length} content types:`)

    const expectedTypes = ['musicRelease', 'video', 'page', 'shopItem', 'blogPost']
    const existingTypes = contentTypes.items.map(ct => ct.sys.id)

    expectedTypes.forEach(type => {
      if (existingTypes.includes(type)) {
        console.log(`  ✅ ${type}`)
      } else {
        console.log(`  ❌ ${type} (missing)`)
      }
    })

    // Test entries
    const entries = await contentfulClient.getEntries({ limit: 1 })
    console.log(`📝 Found ${entries.total} total entries`)

    console.log('\n🎉 Contentful connection successful!')
    console.log('You can now run: npm run migrate-content')

  } catch (error) {
    console.error('❌ Contentful connection failed:')
    console.error(error.message)

    if (error.message.includes('401')) {
      console.log('\n💡 Check your CONTENTFUL_ACCESS_TOKEN')
    } else if (error.message.includes('404')) {
      console.log('\n💡 Check your CONTENTFUL_SPACE_ID')
    }

    console.log('\n📖 See CONTENTFUL_SETUP.md for setup instructions')
    process.exit(1)
  }
}

testContentful()