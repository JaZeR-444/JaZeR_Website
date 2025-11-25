import { createClient } from 'contentful'

const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master'

if (!spaceId || !accessToken) {
  throw new Error('Missing Contentful environment variables')
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken,
  environment,
})

export const contentfulPreviewClient = createClient({
  space: spaceId,
  accessToken: previewAccessToken || accessToken,
  environment,
  host: 'preview.contentful.com',
})