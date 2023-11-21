import faqPage from '../page'

import { AllFaqSectionsDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils';

export async function generateStaticParams() {
  const { allFaqSections } = await apiQuery<AllFaqSectionsQuery, AllFaqSectionsQueryVariables>(AllFaqSectionsDocument, {
    all: true
  })
  return allFaqSections.map(({ slug: section }) => ({ section }))
}

export default async function Collection({ params }: { params: { section: string } }) {
  return faqPage({ params })
}