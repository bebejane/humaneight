import s from './page.module.scss';
import { LegalDocument, AllLegalsDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import { notFound } from 'next/navigation';
import { StructuredContent } from 'next-dato-utils'

export default async function Legal({ params }: { params: { legal: string } }) {

  const { legal, draftUrl } = await apiQuery<LegalQuery, LegalQueryVariables>(LegalDocument, {
    variables: {
      slug: params.legal
    }
  })

  if (!legal) return notFound();

  return (
    <>
      <section className={s.legal}>
        <h1>{legal.title}</h1>
        <StructuredContent id={legal.id} content={legal.text} />
      </section >
      <DraftMode url={draftUrl} tag={legal.id} />
    </>
  )
}

export async function generateStaticParams() {
  const { allLegals } = await apiQuery<AllLegalsQuery, AllLegalsQueryVariables>(AllLegalsDocument, {
    all: true
  })
  return allLegals.map(({ slug: legal }) => ({ legal }))
}