'use client'

import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'
import { useEffect, useState } from 'react'
import useQueryString from '@lib/hooks/useQueryString'
import { useWindowSize } from 'react-use'
import useMeasure from 'react-use-measure'

export type Props = {
  collectionId?: string
  allCollections?: AllCollectionsQuery['allCollections']
}

const categories = ['All', 'Kids', 'Fitted', 'Relaxed', 'Oversize']

export default function CollectionsFilter({ collectionId = 'all', allCollections }: Props) {

  const [sub, setSub] = useState<string | null>(collectionId ?? null)
  const [subOpen, setSubOpen] = useState(false)
  const { searchParams, pathname } = useQueryString()
  const { width: windowWidth } = useWindowSize()
  const [activeMenuRef, { left: menuLeft }] = useMeasure();
  const [subRef, { width: subWidth }] = useMeasure();

  const dropDownLeft = (menuLeft + subWidth) > windowWidth ? windowWidth - subWidth : menuLeft
  const isFarRight = (menuLeft + subWidth) > windowWidth
  const collectionsWithAll = [{ id: 'all', title: 'All', slug: '', }].concat(allCollections ?? [])

  useEffect(() => { setSubOpen(false) }, [pathname, searchParams])

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

              <span className={cn(s.active, collectionId === id && s.selected, "nav")}>
                <Link
                  href={`/shop/${slug}`}
                  ref={collectionId === id ? activeMenuRef : undefined}
                  onMouseEnter={(e) => {
                    if (sub === id) {
                      setSubOpen(!subOpen)
                      e.preventDefault()
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

      <ul
        className={cn(s.subFilter, 'nav')}
        ref={subRef}
      >
        {categories.map((category, i) => (
          <li key={i} className={cn(category === searchParams.get('c') && s.selected)}>
            <a href={`?c=${category}`}>{category}</a>
          </li>
        ))}
      </ul>

      {/*subOpen &&
        <ul
          className={cn(s.sub, isFarRight && s.alignRight, 'nav')}
          style={{ left: dropDownLeft }}
          ref={subRef}
        >
          {categories.map((category, i) => (
            <li key={i} className={cn(category === searchParams.get('c') && s.selected)}>
              <a href={`?c=${category}`}>{category}</a>
            </li>
          ))}
        </ul>
        */}
    </>
  )
}