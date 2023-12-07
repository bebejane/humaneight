
import s from './page.module.scss'
import CollectionsFilter from './components/CollectionsFilter';
import { AllCollectionsDocument, AllProductBrandingDocument, AllProductByCollectionDocument, CollectionDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import ProductThumbnail from '@components/layout/ProductThumbnail';
import ThumbnailContainer from '@components/layout/ThumbnailContainer';
import { CountryShopParams } from '@app/[country]/shop/page';
import React from 'react';
import BrandingThumbnail from '@components/layout/BrandingThumbnail';

export default async function Shop({ params }: CountryShopParams) {

  const isAllCategory = !params?.collection

  const { collection, draftUrl } = !isAllCategory ? await apiQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, {
    variables: {
      slug: params.collection
    }
  }) : { collection: undefined, draftUrl: undefined }

  const [{ allProducts }, { allProductBrandings }, { allCollections }] = await Promise.all([
    apiQuery<AllProductByCollectionQuery, AllProductByCollectionQueryVariables>(AllProductByCollectionDocument, {
      all: true,
      variables: {
        collectionId: !isAllCategory ? collection?.id : undefined,
        first: 100,
        skip: 0,
      },
      generateTags: false,
      tags: ['product']
    }),
    apiQuery<AllProductBrandingQuery, AllProductBrandingQueryVariables>(AllProductBrandingDocument, {
      variables: {
        first: 100,
        skip: 0
      },
      tags: ['product_branding'],
      all: true
    }),
    apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
      all: true,
      tags: ['collection']
    })])

  const brandingInterval = 3
  const brandings = generateRandomBranding<AllProductBrandingQuery['allProductBrandings'][0]>(Math.floor(allProducts.length / brandingInterval), allProductBrandings)
  const columns = isAllCategory ? 'three' : 'four'

  return (
    <>
      <CollectionsFilter collectionId={collection?.id} allCollections={allCollections} />
      <div className={s.container}>
        <ThumbnailContainer>
          {allProducts?.map((product, i) => (
            <React.Fragment key={product.id}>
              <ProductThumbnail
                product={product as ProductRecord}
                index={i}
                columns={columns}
              />
              {i % brandingInterval === 0 &&
                <BrandingThumbnail
                  productBranding={brandings.splice(0, 1)[0] as ProductBrandingRecord}
                  columns={columns}
                />
              }
            </React.Fragment>
          ))}
        </ThumbnailContainer>
      </div>
      <DraftMode url={draftUrl} tag={collection?.id} />
    </>
  )
}

function generateRandomBranding<T>(brandingCount: number, allProductBrandings: T[]): T[] {

  const randomBrandings: T[] = allProductBrandings.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, brandingCount)

  while (randomBrandings.length <= brandingCount) {
    randomBrandings.push(allProductBrandings.sort(() => Math.random() > 0.5 ? 1 : -1)[0])
  }
  return randomBrandings
}