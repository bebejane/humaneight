import s from './StartProductBlock.module.scss'
import cn from 'classnames'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import Thumbnail from '@components/layout/Thumbnail'
import Link from '@components//nav/Link'

type Props = {
  data: StartProductBlockRecord
}

export default async function StartProductBlock({ data: { id, headline, selectedProducts, collection } }: Props) {

  return (
    <section className={cn(s.container)}>
      <header>
        <h3>{headline}</h3>
        {collection &&
          <Link href={`/shop/${collection?.slug}`}>
            <span className="body">View all</span>
          </Link>
        }
      </header>
      <ThumbnailContainer>
        {selectedProducts.map((product, i) =>
          <Thumbnail key={i} product={product.product} />
        )}
      </ThumbnailContainer>
    </section>
  )
}