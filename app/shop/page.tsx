
import { CountryShopParams } from '@app/[country]/shop/page';
import s from './page.module.scss'
import CollectionsFilter from './components/CollectionsFilter';
import { AllCollectionsDocument, AllProductBrandingDocument, AllProductByCollectionDocument, CollectionDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import ProductThumbnail from '@components/layout/ProductThumbnail';
import ThumbnailContainer from '@components/layout/ThumbnailContainer';
import React from 'react';
import BrandingThumbnail from '@components/layout/BrandingThumbnail';

export const runtime = 'edge'

export default async function Shop({ params, searchParams }: CountryShopParams) {

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

  const filteredProducts = allProducts?.filter(product => !searchParams?.tag || searchParams?.tag === 'all' || product?.shopifyProduct?.tags?.split(',').includes(searchParams?.tag))
  const tags = allProducts?.reduce((acc, product) => {
    const productTags = product?.shopifyProduct?.tags?.split(',') ?? []
    productTags.forEach(tag => !acc.includes(tag) && acc.push(tag))
    return acc
  }, ['all'] as string[])

  const brandingInterval = 5
  const brandings = generateRandomBranding<AllProductBrandingQuery['allProductBrandings'][0]>(Math.floor(allProducts.length / brandingInterval), allProductBrandings)
  const columns = isAllCategory ? 'three' : 'four'

  return (
    <>
      <CollectionsFilter
        collectionId={collection?.id}
        allCollections={allCollections}
        searchParams={searchParams}
        tags={tags}
      />
      <div className={s.container}>
        <ThumbnailContainer>
          {filteredProducts?.map((product, i) => (
            <React.Fragment key={product.id}>
              <ProductThumbnail
                product={product as ProductRecord}
                index={i}
                columns={columns}
              />
              {(i + 1) % (brandingInterval - 1) === 0 &&
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