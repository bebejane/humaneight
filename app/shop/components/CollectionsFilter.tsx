
import { AllCollectionsDocument } from '@graphql'
import s from './CollectionsFilter.module.scss'
import cn from 'classnames'
import { apiQuery } from '@lib/next-dato-utils'
import Link from '@components//nav/Link'

export type Props = {
  collectionId?: string
}
export default async function CollectionsFilter({ collectionId }: Props) {

  const { allCollections } = await apiQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, {
    all: true,
    tags: ['collection']
  });

  return (
    <ul className={s.filter}>
      <li className={cn(!collectionId && s.selected, "nav")}><Link href={`/shop`}>All</Link></li>
      {allCollections.map(({ id, title, slug }) => (
        <li key={slug} className={cn(id === collectionId && s.selected, "nav")}>
          <Link href={`/shop/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}