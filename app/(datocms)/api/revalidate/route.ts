import { revalidate } from 'next-dato-utils'

export const runtime = "edge"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {

  return await revalidate(req, async (payload, revalidate) => {

    const { api_key, entity, event_type, entity_type } = payload;
    const { id, attributes: { slug } } = entity
    const paths: string[] = []
    const tags: string[] = [id]

    if (api_key) tags.push(api_key)

    switch (api_key) {
      case 'product':
        paths.push(`/products/${slug}`)
        break;
      case 'start':
        paths.push(`/`)
        break;
      default:
        break;
    }

    return await revalidate(paths, tags, true)
  })
}