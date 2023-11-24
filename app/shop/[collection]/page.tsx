import storePage from '../page'

import { AllCollectionsDocument } from '@graphql';
import { apiQuery } from '@lib/next-dato-utils';

export async function generateStaticParams() {
  const { allCollections } = await apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
    all: true,
    tags: ['collection']
  })
  return allCollections.map(({ slug: collection }) => ({ collection }))
}

export default async function Collection({ params }: { params: { collection: string } }) {
  return storePage({ params })
}