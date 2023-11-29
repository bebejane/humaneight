
import { AboutDocument, AllAboutsDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import { notFound } from 'next/navigation';
import { Block } from 'next-dato-utils'
import AboutTwoColumnBlock from "./components/AboutTwoColumnBlock"
import AboutTextBlock from './components/AboutTextBlock';
import FullscreenBlock from '@components/blocks/FullscreenBlock';
import RelatedAbouts from '@app/about/[about]/components/RelatedAbouts';

export default async function About({ params }: { params: { about: string } }) {

  const { about, draftUrl } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {
    variables: {
      slug: params.about
    }
  })

  if (!about) return notFound();

  return (
    <>
      <div className="about">
        {about.sections.map((section, i) =>
          <Block
            key={i}
            data={section}
            components={{
              AboutTwoColumnBlock,
              AboutTextBlock,
              FullscreenBlock
            }} />
        )}
        <RelatedAbouts about={about} />
        <DraftMode url={draftUrl} tag={about.id} />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const { allAbouts } = await apiQuery<AllAboutsQuery, AllAboutsQueryVariables>(AllAboutsDocument, {
    all: true
  })
  return allAbouts.map(({ slug: about }) => ({ about }))
}