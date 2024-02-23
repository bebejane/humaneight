import { NextRequest } from 'next/server';
import { webPreviews, cors } from 'next-dato-utils/route-handlers'

export const runtime = "edge"

export async function POST(req: NextRequest) {

  return await webPreviews(req, async ({ item, itemType, locale }) => {

    let path = null;

    const { id } = item
    const { slug } = item.attributes
    const { api_key } = itemType.attributes

    switch (api_key) {
      case 'start':
      case 'general':
        path = `/`
        break;
      case 'faq':
        path = `/faq#${id}`
        break;
      case 'faq_section':
        path = `/faq/${slug}`
        break;
      case 'product':
        path = `/products/${slug}`
        break;
      case 'collection':
        path = `/shop/${slug}`
        break;
      case 'about':
        path = `/about/${slug}`
      case 'feedback':
        path = `/contact`
      default:
        break;
    }

    return path
  })
}

export async function OPTIONS(req: Request) {
  return await cors(req, new Response('ok', { status: 200 }), {
    origin: '*',
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false
  })
}