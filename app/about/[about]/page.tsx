
import { AboutDocument, AllAboutsDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { Block, DraftMode } from 'next-dato-utils/components'

import AboutTwoColumnBlock from "./components/AboutTwoColumnBlock"
import AboutThreeColumnBlock from "./components/AboutThreeColumnBlock"
import AboutTextBlock from './components/AboutTextBlock';
import FullscreenBlock from '@components/content/blocks/FullscreenBlock';
import RelatedAbouts from '@app/about/[about]/components/RelatedAbouts';
import RevealText from './components/RevealText';

export type AboutParams = {
  params: { about: string }
}

export default async function About({ params }: AboutParams) {

  const { about, draftUrl } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {
    variables: { slug: params.about },
    tags: ['about']
  })

  if (!about) return notFound();

  return (
    <>
      <RevealText key={about.id} />
      <div className="about">
        {about.sections.map((section, i) =>
          <Block
            key={i}
            data={section}
            components={{
              AboutTwoColumnBlock,
              AboutThreeColumnBlock,
              AboutTextBlock,
              FullscreenBlock
            }} />
        )}
      </div>
      <RelatedAbouts about={about} />
      <DraftMode url={draftUrl} tag={about.id} />
    </>
  )
}

export async function generateStaticParams() {
  const { allAbouts } = await apiQuery<AllAboutsQuery, AllAboutsQueryVariables>(AllAboutsDocument, {
    all: true,
    tags: ['about']
  })
  return allAbouts.map(({ slug: about }) => ({ about }))
}

export async function generateMetadata({ params }: AboutParams) {

  const { about } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {
    variables: { slug: params.about },
    tags: ['about']
  })

  return {
    title: about?.metaTitle || about?.title,
    description: about?.metaDescription || undefined,
  }
}