'use client'

import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'
import { useEffect, useState } from 'react'
import useQueryString from '@lib/hooks/useQueryString'
import { useDimensionsRef } from 'rooks'

export type Props = {
  collectionId?: string
  allCollections?: AllCollectionsQuery['allCollections']
}

const categories = ['Kids', 'Fitted', 'Relaxed', 'Oversize']

export default function CollectionsFilter({ collectionId = 'all', allCollections }: Props) {

  const [ref, dimensions] = useDimensionsRef();
  const [sub, setSub] = useState<string | null>(collectionId ?? null)
  const [subOpen, setSubOpen] = useState(false)
  const { searchParams, pathname } = useQueryString()
  const collectionsWithAll = [{ id: 'all', title: 'All', slug: '', }].concat(allCollections ?? [])

  useEffect(() => {
    setSubOpen(false)
  }, [pathname, searchParams])

  return (
    <>
      <ul className={s.filter}>
        {collectionsWithAll.map(({ id, title, slug }) => {
          const pluralTitle = `${title}${id !== 'all' ? 's' : ''}`
          return (
            <li key={id} className="nav">
              <span className={cn(s.title, collectionId === id && s.hide)}>
                {pluralTitle}
              </span>

              <span
                key={slug}
                className={cn(s.active, collectionId === id && s.selected, "nav")}
                ref={collectionId === id ? ref : undefined}
              >
                <Link
                  href={`/shop/${slug}`}
                  onClick={(e) => {
                    if (sub === id) {
                      setSubOpen(!subOpen)
                    } else {
                      setSubOpen(false)
                      setSub(id)
                    }
                  }}
                >
                  {pluralTitle}
                </Link>
                <button className={cn(s.arrow, collectionId === id && s.show)}>
                  {!subOpen ? '▼' : '▲'}
                </button>
              </span>
            </li>
          )
        })}
      </ul>
      {subOpen && (
        <ul className={cn(s.sub, 'nav')} style={{ left: dimensions?.left }}>
          {categories.map((category) => (
            <li key={category}>
              <a href={`?c=${category.toLowerCase()}`}>{category}</a>
            </li>
          ))}
        </ul>
      )}
    </>

  )
}