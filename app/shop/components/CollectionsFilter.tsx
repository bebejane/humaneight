'use client'

import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

export type Props = {
  collectionId?: string
  tags?: string[]
  allCollections?: AllCollectionsQuery['allCollections']
  searchParams?: any
}

const tagSortOrder = ['all', 'kids', 'fitted', 'relaxed', 'oversized']

export default function CollectionsFilter({ tags, collectionId = 'all', allCollections, searchParams }: Props) {

  const [hoverId, setHoverId] = useState<string | null>(null)
  const [hoverPos, setHoverPos] = useState<{ id: string, left: number, top: number }[] | null>(null)
  const { width, height } = useWindowSize()
  const collectionsWithAll = [{ id: 'all', title: 'All', slug: '', }].concat(allCollections ?? [])
  const collectionSlug = collectionsWithAll.find(({ id }) => id === collectionId)?.slug
  const tag = searchParams?.tag ?? 'all'

  useEffect(() => {

    const positions = collectionsWithAll.map(({ id }) => {
      const title = document.getElementById(`c-${id}`) as HTMLElement
      const hover = document.getElementById(`ch-${id}`) as HTMLElement
      const position = title.getAttribute('data-position')
      const activeRect = hover.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()

      return {
        id,
        left: position === 'left' ? 0 : position === 'right' ? titleRect.right - activeRect.width : titleRect.left - ((activeRect.width - titleRect.width)),
        top: title.offsetTop
      }
    })

    setHoverPos(positions)

  }, [allCollections, width, height, hoverId])

  return (
    <>
      <ul className={s.filter}>
        {collectionsWithAll.map(({ id, title, slug }, idx) => {

          const pluralTitle = `${title}${id !== 'all' ? 's' : ''}`
          const isActive = [collectionId, hoverId].includes(id)
          const pos = hoverPos?.find(p => p.id === id)

          return (
            <li key={id} className="nav">
              <span
                id={`c-${id}`}
                data-position={idx === 0 ? 'left' : idx === collectionsWithAll.length - 1 ? 'right' : 'center'}
                className={cn(s.title, isActive && s.hide)}
                onMouseEnter={() => setHoverId(id)}
              >
                {pluralTitle}
              </span>
              <Link
                id={`ch-${id}`}
                href={`/shop/${slug}`}
                className={cn(s.title, s.active, isActive && s.selected, "nav")}
                style={pos ? { left: `${pos.left}px`, top: `${pos.top}px` } : undefined}
                onMouseLeave={() => setHoverId(null)}
              >{pluralTitle}</Link>
            </li>
          )
        })}
      </ul >

      <ul className={cn(s.subFilter, 'mid')}>
        {tags?.sort((a, b) => tagSortOrder.findIndex(t => t === a) > tagSortOrder.findIndex(t => t === b) ? 1 : -1).map((t, i) => (
          <li key={i} className={cn(tag === t && s.selected)}>
            <Link href={`/shop/${collectionSlug}/?tag=${t}`} replace={true}>
              {t}
            </Link>
          </li>
        ))}
      </ul>

    </>
  )
}