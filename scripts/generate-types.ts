#!/usr/bin/env node

/**
 * Generate TypeScript types from Contentful content types
 * Run with: npm run generate-types
 */

import { writeFileSync } from 'fs'
import { join } from 'path'
import { contentfulClient } from '../src/lib/contentful.js'

async function generateTypes() {
  try {
    console.log('Fetching content types from Contentful...')

    const contentTypes = await contentfulClient.getContentTypes()

    let types = `// Auto-generated Contentful types - Do not edit manually
// Generated on ${new Date().toISOString()}

export interface ContentfulAsset {
  sys: {
    id: string
    type: 'Asset'
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    description?: string
    file: {
      url: string
      details: {
        image?: {
          width: number
          height: number
        }
        size: number
      }
      fileName: string
      contentType: string
    }
  }
}

export interface ContentfulEntry<T = any> {
  sys: {
    id: string
    type: 'Entry'
    createdAt: string
    updatedAt: string
    contentType: {
      sys: {
        id: string
      }
    }
  }
  fields: T
}
`

    // Generate types for each content type
    for (const ct of contentTypes.items) {
      const typeName = ct.sys.id.charAt(0).toUpperCase() + ct.sys.id.slice(1)

      types += `\n// ${ct.name} (${ct.sys.id})\n`
      types += `export interface ${typeName}Fields {\n`

      for (const field of ct.fields) {
        const fieldName = field.id
        const required = field.required ? '' : '?'
        let fieldType = 'any'

        switch (field.type) {
          case 'Symbol':
          case 'Text':
            fieldType = 'string'
            break
          case 'Integer':
          case 'Number':
            fieldType = 'number'
            break
          case 'Boolean':
            fieldType = 'boolean'
            break
          case 'Date':
            fieldType = 'string'
            break
          case 'Location':
            fieldType = '{ lat: number; lon: number }'
            break
          case 'Link':
            if (field.linkType === 'Asset') {
              fieldType = 'ContentfulAsset'
            } else {
              fieldType = 'ContentfulEntry'
            }
            break
          case 'Array':
            if (field.items?.type === 'Link') {
              fieldType = 'ContentfulEntry[]'
            } else if (field.items?.type === 'Symbol') {
              fieldType = 'string[]'
            } else {
              fieldType = 'any[]'
            }
            break
          case 'RichText':
            fieldType = 'any' // We'll use @contentful/rich-text-types for proper typing
            break
          case 'Object':
            fieldType = 'any'
            break
        }

        types += `  ${fieldName}${required}: ${fieldType}\n`
      }

      types += `}\n\n`
      types += `export interface ${typeName} extends ContentfulEntry<${typeName}Fields> {}\n`
    }

    const outputPath = join(process.cwd(), 'src/types/generated.ts')
    writeFileSync(outputPath, types)

    console.log(`✅ Types generated successfully at ${outputPath}`)
  } catch (error) {
    console.error('❌ Error generating types:', error)
    process.exit(1)
  }
}

generateTypes()