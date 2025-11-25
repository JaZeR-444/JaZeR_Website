import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  // Verify webhook secret (add this to your environment variables)
  const webhookSecret = process.env.CONTENTFUL_WEBHOOK_SECRET
  const signature = request.headers.get('x-contentful-signature')

  if (webhookSecret && signature !== webhookSecret) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  // Revalidate based on content type
  if (body.sys?.contentType?.sys?.id) {
    const contentType = body.sys.contentType.sys.id

    // Revalidate specific tags based on content type
    switch (contentType) {
      case 'musicRelease':
        revalidateTag('music-releases')
        revalidateTag('featured-music')
        break
      case 'video':
        revalidateTag('videos')
        revalidateTag('featured-videos')
        break
      case 'blogPost':
        revalidateTag('blog-posts')
        break
      case 'page':
        revalidateTag('pages')
        break
      case 'shopItem':
        revalidateTag('shop-items')
        revalidateTag('featured-shop')
        break
    }
  }

  return NextResponse.json({ revalidated: true })
}