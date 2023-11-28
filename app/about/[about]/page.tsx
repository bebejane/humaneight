
import { AboutDocument, AllAboutsDocument } from '@graphql';
import { apiQuery, DraftMode } from 'next-dato-utils';
import { notFound } from 'next/navigation';
import { Block } from 'next-dato-utils'
import AboutTwoColumnBlock from "./components/AboutTwoColumnBlock"

export async function generateStaticParams() {
  const { allAbouts } = await apiQuery<AllAboutsQuery, AllAboutsQueryVariables>(AllAboutsDocument, {
    all: true
  })
  return allAbouts.map(({ slug: about }) => ({ about }))
}

export default async function About({ params }: { params: { about: string } }) {

  const { about, draftUrl } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {
    variables: {
      slug: params.about
    }
  })

  if (!about) return notFound();
  const { id, title, content, slug } = about;

  return (
    <>
      <h1>{title}</h1>
      {about.sections.map((section, i) =>
        <Block key={i} data={section} components={[AboutTwoColumnBlock]} />
      )}
      <DraftMode url={draftUrl} tag={about.id} />
    </>
  )
}