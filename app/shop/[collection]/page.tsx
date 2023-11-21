import storePage from '../page'

import { AllCollectionsDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { allCollections } = await apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
    all: true
  })
  return allCollections.map(({ slug: collection }) => ({ collection }))
}

export default async function Collection({ params }: { params: { collection: string } }) {
  return storePage({ params })
}