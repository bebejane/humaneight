
import s from './page.module.scss'
import CollectionsFilter from './components/CollectionsFilter';
import { AllCollectionsDocument, AllProductByCollectionDocument, CollectionDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import Thumbnail from '@components/layout/Thumbnail';
import ThumbnailContainer from '@components/layout/ThumbnailContainer';

export type Props = {
  params?: { collection: string }
}

export default async function Shop({ params }: Props) {


  const { collection } = await apiQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, params?.collection ? {
    variables: {
      slug: params?.collection
    }
  } : undefined)

  const { allProducts } = await apiQuery<AllProductByCollectionQuery, AllProductByCollectionQueryVariables>(AllProductByCollectionDocument, {
    all: true,
    variables: {
      collectionId: collection?.id,
      first: 100,
      skip: 0,
    }
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
    </>
  )
}