
import { AllCollectionsDocument } from '@graphql'
import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import { apiQuery } from 'next-dato-utils'
import Link from '@components//nav/Link'
import { useState } from 'react'

export type Props = {
  collectionId?: string
}
export default async function CollectionsFilter({ collectionId }: Props) {

  const { allCollections } = await apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
    all: true,
    tags: ['collection']
  });

  const collectionsWithAll = [{ id: 'all', title: 'All', slug: '', }].concat(allCollections)

  return (
    <ul className={s.filter}>
      {collectionsWithAll.map(({ id, title, slug }) => {
        const pluralTitle = `${title}${id !== 'all' ? 's' : ''}`
        return (
          <li key={id} className="nav">
            <span className={cn(s.title, collectionId === id && s.hide)}>{pluralTitle}</span>
            <span key={slug} className={cn(s.active, collectionId === id && s.selected, "nav")}>
              <Link href={`/shop/${slug}`}>{pluralTitle}</Link>
            </span>
          </li>
        )
      })}
    </ul>
  )
}