import s from './[collection].module.scss'
import { AllShopifyCollectionsDocument, ShopifyCollectionDocument } from '@shopify/graphql'
import { shopifyQuery } from '@shopify/graphql-client'
import Link from 'next/link'
import withGlobalProps from '/lib/withGlobalProps'

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

export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, context, revalidate }: any) => {

  const handle = context.params?.collection

  const { collection }: { collection: CollectionConnection } = await shopifyQuery(ShopifyCollectionDocument, { variables: { handle } })

  return {
    props: {
      ...props,
      collection
    },
    revalidate
  }
});