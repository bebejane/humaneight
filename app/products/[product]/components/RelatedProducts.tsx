import s from './RelatedProducts.module.scss'
import { apiQuery } from 'next-dato-utils/api'
import { AllProductsDocument } from '@graphql'
import Link from 'next/link'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import ProductThumbnail from '@components/layout/ProductThumbnail'

export type Props = {
  product: ProductByIdQuery['product']
}

export default async function RelatedProducts({ product }: Props) {

  if (!product?.collection.id) return null

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
    variables: {
      first: 100,
      skip: 0
    },
    tags: ['product']
  })

  const sortByTags = (a: AllProductsQuery['allProducts'][0], b: AllProductsQuery['allProducts'][0]) => {
    const tags = product?.shopifyProduct?.tags?.split(',') ?? []
    const aTags = a?.shopifyProduct?.tags?.split(',') ?? []
    const bTags = b?.shopifyProduct?.tags?.split(',') ?? []
    return aTags.find(t => tags.includes(t)) && bTags.find(t => tags.includes(t)) ? 0 : aTags.find(t => tags.includes(t)) && !bTags.find(t => tags.includes(t)) ? 1 : -1
  }

  const relatedProducts = allProducts
    .sort((a, b) => a.collection.id === product?.collection.id ? 1 : -1)
    .sort(sortByTags)
    .slice(0, 4)

  return (
    <section className={s.related}>
      <header>
        <h3>Related products</h3>
        <Link href={`/shop/${product?.collection?.slug}`}>
          <h3><span>View all</span></h3>
        </Link>
      </header>
      <ThumbnailContainer>
        {relatedProducts.map((p, i) =>
          <ProductThumbnail key={p.id} product={p as ProductRecord} index={i} columns={'four'} />
        )}
      </ThumbnailContainer>
    </section>

  )
}

