import { enablePreview } from '@/lib/cms/preview'

export async function GET() {
  await enablePreview()
}