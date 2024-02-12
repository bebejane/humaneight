import s from './RelatedAbouts.module.scss'
import { apiQuery } from 'next-dato-utils'
import { AllAboutsDocument } from '@graphql'
import Link from 'next/link'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import AboutThumbnail from './AboutThumbnail'

export type Props = {
  about: AboutQuery['about']
}

export default async function RelatedAbouts({ about }: Props) {


  const { allAbouts } = await apiQuery<AllAboutsQuery, AllAboutsQueryVariables>(AllAboutsDocument, {
    variables: {
      first: 100,
      skip: 0
    },
    tags: ['about']
  })

  const randomAllAbouts = allAbouts.filter(a => a.id !== about?.id).sort(() => Math.random() - 0.5).slice(0, 4)

  return (
    <section className={s.related}>
      <header>
        <h3>More about Humaneight</h3>
      </header>
      <ThumbnailContainer>
        {randomAllAbouts.map(a =>
          <AboutThumbnail key={a.id} about={a as AboutRecord} />
        )}
      </ThumbnailContainer>
    </section>

  )
}

