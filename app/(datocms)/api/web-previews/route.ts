import { NextRequest } from 'next/server';
import { webPreviews, cors } from 'next-dato-utils/route-handlers'
import { apiQuery } from 'next-dato-utils/api';
import { ProductByIdDocument } from '../../../../graphql';

export const runtime = "edge"

export async function POST(req: NextRequest) {

  return await webPreviews(req, async ({ item, itemType, locale }) => {

    let path = null;

    const { id } = item
    const { slug, shopify_product } = item.attributes
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
      case 'product': {
        const { product } = await apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, { variables: { id: shopify_product } })
        path = `/products/${product?.shopifyProduct.handle}`
        break;
      }
      case 'shopify_product': {
        const { product } = await apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, { variables: { id } })
        path = `/products/${product?.shopifyProduct.handle}`
        break;
      }
      case 'collection':
        path = `/shop/${slug}`
        break;
      case 'about':
        path = `/about/${slug}`
        break;
      case 'feedback': case 'contact':
        path = `/contact`
        break;
      case 'legal':
        path = `/legal/${slug}`
        break;
      case 'product_branding':
        path = `/shop`
        break;
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