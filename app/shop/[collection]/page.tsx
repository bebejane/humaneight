import { CountryShopParams } from '@app/[country]/shop/page';
import storePage from '../page'
import { AllCollectionsDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';

export const dynamic = 'force-static'

export default async function Collection(params: CountryShopParams) {
  return storePage(params)
}

export async function generateStaticParams() {
  const { allCollections } = await apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
    all: true,
    generateTags: false,
    tags: ['collection']
  })
  return allCollections.map(({ slug: collection }) => ({ collection }))
}
