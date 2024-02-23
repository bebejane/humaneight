import s from './page.module.scss';
import { LegalDocument, AllLegalsDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode, StructuredContent } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import cn from 'classnames';

export default async function Legal({ params }: { params: { legal: string } }) {

  const { legal, draftUrl } = await apiQuery<LegalQuery, LegalQueryVariables>(LegalDocument, {
    variables: {
      slug: params.legal
    }
  })

  if (!legal) return notFound();

  return (
    <>
      <section className={cn(s.legal, "grid legal structured")}>
        <div className={s.container}>
          <h3>{legal.title}</h3>
          <StructuredContent content={legal.text} />
        </div>
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