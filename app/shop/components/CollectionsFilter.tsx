'use client'

import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'
import { useEffect, useState, useOptimistic } from 'react'
import { useWindowSize, useMedia } from 'react-use'
import { tags as tagSortOrder } from '@lib/constants'
import useIsDesktop from '@lib/hooks/useIsDesktop'

export type Props = {
  collectionId?: string
  tags?: string[]
  allCollections?: AllCollectionsQuery['allCollections']
  searchParams?: any
  tag: string
}

export default function CollectionsFilter({ tags, collectionId: _collectionId, allCollections, tag: _tag }: Props) {

  if (!allCollections) return null
  const [collectionId, setCollectionId] = useOptimistic<string | null>(_collectionId ?? null)
  const [tag, setTag] = useOptimistic<string | null>(_tag ?? null)
  const [hoverId, setHoverId] = useState<string | null>(null)
  const [hoverPos, setHoverPos] = useState<{ id: string, left: number, top: number }[] | null>(null)
  const { width, height } = useWindowSize()
  const isDesktop = useIsDesktop()
  const collectionSlug = allCollections.find(({ id }) => id === collectionId)?.slug

  useEffect(() => {

    if (!isDesktop) return

    const positions = allCollections.map(({ id }) => {
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

  }, [isDesktop, allCollections, width, height, hoverId])

  return (
    <>
      <nav className={s.filter}>
        {allCollections.map(({ id, titlePlural, slug }, idx) => {

          slug = slug === 'all' ? '' : slug
          const isSelected = [collectionId, hoverId].includes(id)
          const pos = hoverPos?.find(p => p.id === id)

          return (
            <li key={id} className="nav">
              <Link
                id={`c-${id}`}
                href={`/shop/${slug}`}
                className={cn(s.title, (isSelected && isDesktop) ? s.hide : isSelected ? s.selected : false)}
                data-position={idx === 0 ? 'left' : idx === allCollections.length - 1 ? 'right' : 'center'}
                onClick={() => setCollectionId(id)}
              >{titlePlural}</Link>
              {isDesktop &&
                <Link
                  id={`ch-${id}`}
                  href={`/shop/${slug}`}
                  className={cn(s.title, s.active, isSelected && s.selected, "nav")}
                  style={pos ? { left: `${pos.left}px`, top: `${pos.top}px` } : undefined}
                  onMouseEnter={() => setHoverId(id)}
                  onMouseLeave={() => setHoverId(null)}
                >{titlePlural}</Link>
              }
            </li>
          )
        })}
      </nav>

      <nav className={cn(s.subFilter, 'mid')}>
        {tags?.sort((a, b) => tagSortOrder.findIndex(t => t === a) > tagSortOrder.findIndex(t => t === b) ? 1 : -1).map((t, i) => {

          const isShopHome = collectionSlug === 'all' && t === 'all'
          const href = `/shop/${isShopHome ? '' : `${collectionSlug}/${t}`}`

          return (
            <li key={i} className={cn(tag === t && s.selected)}>
              <Link href={href} onClick={() => setTag(t)}>
                {t}
              </Link>
            </li>
          )
        })}
      </nav>
    </>
  )
}