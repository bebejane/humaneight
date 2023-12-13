import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'

export type Props = {
  collectionId?: string
  tags?: string[]
  allCollections?: AllCollectionsQuery['allCollections']
  searchParams?: any
}

export default function CollectionsFilter({ tags, collectionId = 'all', allCollections, searchParams }: Props) {

  const collectionsWithAll = [{ id: 'all', title: 'All', slug: '', }].concat(allCollections ?? [])
  const collectionSlug = collectionsWithAll.find(({ id }) => id === collectionId)?.slug
  const tag = searchParams?.tag ?? 'all'

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
              <span className={cn(s.titleActive, collectionId === id && s.selected, "nav")}>
                <Link href={`/shop/${slug}`}>
                  {pluralTitle}
                </Link>
              </span>
            </li>
          )
        })}
      </ul>

      {collectionId !== 'all' &&
        <ul className={cn(s.subFilter, 'mid')}>
          {tags?.map((t, i) => (
            <li key={i} className={cn(tag === t && s.selected)}>
              <Link href={`/shop/${collectionSlug}/?tag=${t}`} replace={true}>
                {t}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  )
}