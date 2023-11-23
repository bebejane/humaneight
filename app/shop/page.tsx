
import s from './page.module.scss'
import CollectionsFilter from './components/CollectionsFilter';
import { AllProductByCollectionDocument, CollectionDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import Thumbnail from '@components/layout/Thumbnail';
import ThumbnailContainer from '@components/layout/ThumbnailContainer';

export type Props = {
  params?: { collection: string }
}

export default async function Shop({ params }: Props) {

  const { collection, draftUrl } = await apiQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, {
    variables: {
      slug: params?.collection
    }
  })

  const { allProducts } = await apiQuery<AllProductByCollectionQuery, AllProductByCollectionQueryVariables>(AllProductByCollectionDocument, {
    all: true,
    variables: {
      collectionId: params?.collection ? collection?.id : undefined,
      first: 100,
      skip: 0,
    },
    tags: ['product']
  })

  return (
    <>
      <CollectionsFilter collectionId={collection?.id} />
      <div className={s.container}>
        <ThumbnailContainer>
          {allProducts?.map((product) => (
            <Thumbnail key={product.id} product={product as ProductRecord} />
          ))}
        </ThumbnailContainer>
      </div>
      <DraftMode url={draftUrl} tag={collection?.id} />
    </>
  )
}