import { revalidate } from 'next-dato-utils/route-handlers'
import { apiQuery } from 'next-dato-utils/api'
import { ProductByIdDocument } from '@graphql'
export const runtime = "edge"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {

  return await revalidate(req, async (payload, revalidate) => {

    const { api_key, entity, event_type, entity_type } = payload;
    const { id, attributes: { slug, shopify_product } } = entity
    const paths: string[] = []
    const tags: string[] = [id]

    if (api_key)
      tags.push(api_key)

    switch (api_key) {
      case 'start':
      case 'general':
        paths.push(`/`)
        break;
      case 'faq':
        paths.push(`/faq`)
        break;
      case 'faq_section':
        paths.push(`/faq/${slug}`)
      case 'product': {
        const { product } = await apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, { variables: { id: shopify_product } })
        paths.push(`/products/${product?.shopifyProduct.handle}`)
        break;
      }
      case 'shopify_product': {
        const { product } = await apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, { variables: { id } })
        paths.push(`/products/${product?.shopifyProduct.handle}`)
        break;
      }
      case 'collection':
        paths.push(`/shop/${slug}`)
        break;
      case 'about':
        paths.push(`/about/${slug}`)
        break;
      case 'contact': case 'feedback':
        paths.push(`/contact`)
        break;
      case 'legal':
        paths.push(`/legal/${slug}`)
      default:
        break;
    }

    return await revalidate(paths, tags, true)
  })
}