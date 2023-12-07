'use client'

import { AllCollectionsDocument } from '@graphql'
import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import { apiQuery } from 'next-dato-utils'
import Link from '@components//nav/Link'
import { useState } from 'react'

export type Props = {
  collectionId?: string
  allCollections?: AllCollectionsQuery['allCollections']
}
export default function CollectionsFilter({ collectionId, allCollections }: Props) {

  const [showSub, setShowSub] = useState(false)
  const collectionsWithAll = [{ id: undefined, title: 'All', slug: '', }].concat(allCollections ?? [])

  return (
    <ul className={s.filter}>
      {collectionsWithAll.map(({ id, title, slug }) => {
        const pluralTitle = `${title}${id ? 's' : ''}`
        return (
          <li key={id} className="nav">
            <span className={cn(s.title, collectionId === id && s.hide)}>{pluralTitle}</span>
            <span key={slug} className={cn(s.active, collectionId === id && s.selected, "nav")}>
              <Link href={`/shop/${slug}`}>{pluralTitle}</Link>
              {collectionId === id &&
                <button className={s.arrow} onClick={() => setShowSub(!showSub)}>
                  {showSub ? '▼' : '▲'}
                </button>
              }
            </span>
          </li>
        )
      })}
    </ul>
  )
}