import { NextRequest, NextResponse } from 'next/server';
import { buildRoute } from '/lib/routes';
import cors from '/lib/cors';

export const config = {
  runtime: 'edge'
}

export type PreviewLink = {
  label: string
  url: string
}

function withWebPreviewsEdge(generatePreviewUrl: (record: any) => Promise<string>): (req: NextRequest, res: NextResponse) => void {

  const corsOptions = {
    origin: '*',
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
  }

  return async (req: NextRequest, res: NextResponse) => {

    if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.SITE_URL)
      throw new Error('NEXT_PUBLIC_SITE_URL is not set in .env')

    if (req.method === 'OPTIONS')
      return cors(req, new Response('ok', { status: 200 }), corsOptions)

    const payload = await req.json()

    if (!payload)
      throw new Error('No form data in request body')


    const previewLinks: PreviewLink[] = []

    let path = await generatePreviewUrl(payload);
    let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
    const isExternal = path?.startsWith('https://')

    if (isExternal) {
      const url = new URL(path)
      baseUrl = url.origin
      path = url.pathname
    }

    if (path) {
      previewLinks.push({ label: 'Live', url: `${baseUrl}${path}` })

      if (process.env.DATOCMS_PREVIEW_SECRET && payload?.item?.meta?.status !== 'published') {
        previewLinks.push({ label: 'Preview', url: `${baseUrl}/api/preview?slug=${path}&secret=${process.env.DATOCMS_PREVIEW_SECRET}` })
      }
    }

    const modelId = payload.itemType?.attributes?.api_key;

    if (modelId === 'product' || modelId === 'collection')
      previewLinks.push({ label: 'Shopify Admin', url: `https://admin.shopify.com/store/${process.env.NEXT_PUBLIC_SHOPIFY_STORE}/${modelId}s/${payload.item.attributes.shopify_id}` })

    return cors(
      req,
      new Response(JSON.stringify({ previewLinks }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }), corsOptions)
  }
}

export default withWebPreviewsEdge(async ({ item, itemType, locale }) => {

  const handle = typeof item.attributes.handle === 'object' ? item.attributes.handle[locale] : item.attributes.handle
  const slug = typeof item.attributes.slug === 'object' ? item.attributes.slug[locale] : item.attributes.slug
  const { api_key } = itemType.attributes
  return buildRoute(api_key, slug || handle)
})