import s from './[collection].module.scss'
import { GetStaticProps } from 'next/types'
import { AllShopifyCollectionsDocument, ShopifyCollectionDocument } from '@shopify/graphql'
import { shopifyQuery } from '@shopify/graphql-client'
import Link from 'next/link'

type Props = {
  collection: Collection
}

export default function Collection({ collection }: Props) {

  return (
    <div className={s.container}>
      <main className={s.main}>
        <h1>{collection?.title}</h1>
        id: {collection?.id}<br />
        handle: {collection?.handle}<br />
        <p>
          {collection?.products?.edges?.map(({ node }) => (
            <Link href={`/products/${node.handle}`} key={node.id}>
              {node.title}
            </Link>
          ))}
        </p>

      </main>
    </div>
  )
}

export const getStaticPaths = async () => {

  const { collections }: { collections: CollectionConnection } = await shopifyQuery(AllShopifyCollectionsDocument)

  const paths = collections.edges.map((edge) => ({
    params: {
      collection: edge.node.handle
    }
  }))

  return {
    paths,
    fallback: false
  }

}



export const getStaticProps: GetStaticProps = async ({ params }) => {

  const handle = params?.collection

  const { collection }: { collection: CollectionConnection } = await shopifyQuery(ShopifyCollectionDocument, { variables: { handle } })

  return {
    props: {
      collection: collection
    }
  }

}