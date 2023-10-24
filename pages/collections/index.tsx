import s from './index.module.scss'
import { GetStaticProps } from 'next/types'
import { AllShopifyCollectionsDocument } from '@shopify/graphql'
import { shopifyQuery } from '@shopify/graphql-client'
import Link from 'next/link'
import { Image } from 'react-datocms'

type Props = {
  collections: Collection[]
}

export default function Collections({ collections }: Props) {

  return (
    <div className={s.container}>
      <main className={s.main}>
        <h1>Collections</h1>
        {collections?.map(({ id, image, handle, title }) => (
          <div key={id}>
            <Link href={`/collections/${handle}`}>
              <h2>{title}</h2>

            </Link>
          </div>
        ))}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { collections }: { collections: CollectionConnection } = await shopifyQuery(AllShopifyCollectionsDocument, { variables: { first: 10 } })

  return {
    props: {
      collections: collections.edges.map((edge) => edge.node)
    }
  }
}