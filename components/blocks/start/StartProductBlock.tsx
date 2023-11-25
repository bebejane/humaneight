import s from './StartProductBlock.module.scss'
import cn from 'classnames'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'

type Props = {
  data: StartProductBlockRecord
}

export default async function StartProductBlock({ data: { id, headline, selectedProducts } }: Props) {

  return (
    <section className={cn(s.container)}>
      <header>
        <h3>{headline}</h3>
        <span className="body">View all</span>
      </header>
      <ThumbnailContainer products={selectedProducts.map(({ product }) => product) as ProductRecord[]} />
    </section>
  )
}