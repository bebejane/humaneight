import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import Link from '@components//nav/Link'

export type Props = {
  collectionId?: string
  allCollections?: AllCollectionsQuery['allCollections']
  searchParams?: any
}

const categories = ['All', 'Kids', 'Fitted', 'Relaxed', 'Oversize']

export default function CollectionsFilter({ collectionId = 'all', allCollections, searchParams }: Props) {

  const collectionsWithAll = [{ id: 'all', title: 'All', slug: '', }].concat(allCollections ?? [])
  const collectionSlug = collectionsWithAll.find(({ id }) => id === collectionId)?.slug
  const categoryId = searchParams?.category ?? 'All'

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
          {categories.map((category, i) => (
            <li key={i} className={cn(category === categoryId && s.selected)}>
              <Link href={`/shop/${collectionSlug}/?category=${category}`} replace={true}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  )
}