import s from './RelatedProducts.module.scss'
import { apiQuery } from 'next-dato-utils'
import { AllProductByCollectionDocument } from '@graphql'
import Link from 'next/link'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import ProductThumbnail from '@components/layout/ProductThumbnail'

export type Props = {
  product: ProductQuery['product']
}

export default async function RelatedProducts({ product }: Props) {

  if (!product?.collection.id) return null

  const { allProducts } = await apiQuery<AllProductByCollectionQuery, AllProductByCollectionQueryVariables>(AllProductByCollectionDocument, {
    variables: {
      collectionId: product?.collection.id,
      first: 3,
      skip: 0
    },
    tags: ['product']
  })

  return (
    <section className={s.related}>
      <header>
        <h3>Related products</h3>
        <Link href={`/shop/${product?.collection?.slug}`}>
          <span className="body">View all</span>
        </Link>
      </header>
      <ThumbnailContainer>
        {allProducts.map((p, i) =>
          <ProductThumbnail key={p.id} product={p as ProductRecord} index={i} />
        )}
      </ThumbnailContainer>
    </section>

  )
}

