import { CountryShopParams } from '@app/[country]/shop/page';
import s from './page.module.scss'
import React from 'react';
import {
  AllCollectionsDocument,
  AllProductBrandingDocument,
  AllProductByCollectionDocument,
  CollectionDocument
} from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import CollectionsFilter from './components/CollectionsFilter';
import ProductThumbnail from '@components/layout/ProductThumbnail';
import ThumbnailContainer from '@components/layout/ThumbnailContainer';
import BrandingThumbnail from '@components/layout/BrandingThumbnail';
import { tags } from '@lib/constants';
import { getProductColorVariants } from '@lib/utils';

export const dynamic = 'force-static'

const brandingInterval = 5

export default async function Shop({ params }: CountryShopParams) {

  const all = !params?.collection
  const tag = params?.tag ?? 'all'

  const { collection, draftUrl } = !all ? await apiQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, {
    variables: { slug: params.collection },
    tags: ['collection', 'product', 'shopify_product']
  }) : { collection: undefined, draftUrl: undefined }

  const { allProducts, allProductBrandings, allCollections } = await getPageData(all, collection?.id)
  const filteredProducts = allProducts?.filter(product => !tag || tag === 'all' || product?.shopifyProduct?.tags?.split(',').includes(tag)).sort(sortByTag)
  let totalProductsWithVariantsCount = filteredProducts?.reduce((acc, product) => acc + getProductColorVariants(product as ProductRecord).length, 0)
  const brandings = generateRandomBranding<AllProductBrandingQuery['allProductBrandings'][0]>(Math.ceil(totalProductsWithVariantsCount / brandingInterval), allProductBrandings)

  const tags = allProducts?.reduce((acc, product) => {
    const productTags = product?.shopifyProduct?.tags?.split(',') ?? []
    productTags.forEach(tag => !acc.includes(tag) && acc.push(tag))
    return acc
  }, ['all'] as string[])

  let count = 0

  return (
    <>
      <CollectionsFilter
        collectionId={collection?.id}
        allCollections={allCollections}
        tag={tag}
        tags={tags}
      />
      <div className={s.container}>
        <ThumbnailContainer>
          {filteredProducts?.map((product, i) => {

            const productColorVariants = getProductColorVariants(product as ProductRecord)
            const thumbnails = all ? [{ product }] : productColorVariants.map(({ color, variant }) => ({ product, color, variant })) as any[]

            return thumbnails?.map(({ product, color, variant }, i) =>
              <React.Fragment key={i}>
                <ProductThumbnail
                  index={i}
                  product={product as ProductRecord}
                  color={color}
                  variantId={variant?.id}
                  columns={all ? 'three' : 'four'}
                />
                {(count++ + 1) % (brandingInterval - 1) === 0 &&
                  <BrandingThumbnail
                    productBranding={brandings.splice(0, 1)[0] as ProductBrandingRecord}
                    columns={all ? 'three' : 'four'}
                  />
                }
              </React.Fragment>
            )
          })}
        </ThumbnailContainer>
      </div>
      <DraftMode url={draftUrl} tag={collection?.id} />
    </>
  )
}

function sortByTag(a: AllProductByCollectionQuery['allProducts'][0], b: AllProductByCollectionQuery['allProducts'][0]) {
  const aTags = a?.shopifyProduct?.tags?.split(',') ?? []
  const bTags = b?.shopifyProduct?.tags?.split(',') ?? []
  const aTag = tags.findIndex(tag => aTags.includes(tag))
  const bTag = tags.findIndex(tag => bTags.includes(tag))
  return aTag - bTag
}

async function getPageData(all: boolean, collectionId?: string) {

  const [{ allProducts }, { allProductBrandings }, { allCollections }] = await Promise.all([
    apiQuery<AllProductByCollectionQuery, AllProductByCollectionQueryVariables>(AllProductByCollectionDocument, {
      all: true,
      variables: {
        collectionId: !all ? collectionId : undefined,
        first: 100,
        skip: 0,
      },
      generateTags: false,
      tags: ['product', 'shopify_product']
    }),
    apiQuery<AllProductBrandingQuery, AllProductBrandingQueryVariables>(AllProductBrandingDocument, {
      variables: {
        first: 100,
        skip: 0
      },
      tags: ['product_branding', 'product_usp'],
      all: true
    }),
    apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
      all: true,
      tags: ['product', 'shopify_product', 'collection']
    })
  ])
  return { allProducts, allProductBrandings, allCollections }
}

function generateRandomBranding<T>(brandingCount: number, allProductBrandings: T[]): T[] {

  const randomBrandings: T[] = allProductBrandings.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, brandingCount)

  while (randomBrandings.length <= brandingCount) {
    randomBrandings.push(allProductBrandings.sort(() => Math.random() > 0.5 ? 1 : -1)[0])
  }
  return randomBrandings
}

export async function generateMetadata() {
  return {
    title: 'Shop',
  }
}