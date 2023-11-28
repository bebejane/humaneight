import s from './RelatedProducts.module.scss'
import cn from 'classnames'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import Thumbnail from '@components/layout/Thumbnail'
import { apiQuery } from 'next-dato-utils'
import { AllProductByCollectionDocument } from '@graphql'
import Link from 'next/link'

export type Props = {
  product: ProductQuery['product']
}

export default async function RelatedProducts({ product }: Props) {

  if (!product?.collection.id) return null

  const { allProducts } = await apiQuery<AllProductByCollectionQuery, AllProductByCollectionQueryVariables>(AllProductByCollectionDocument, {
    variables: {
      collectionId: product?.collection.id,
      first: 4,
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
        {allProducts.map(p =>
          <Thumbnail key={p.id} product={p as ProductRecord} />
        )}
      </ThumbnailContainer>
    </section>

  )
}

