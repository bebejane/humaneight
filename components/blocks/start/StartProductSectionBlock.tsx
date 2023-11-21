import s from './StartProductSectionBlock.module.scss'
import cn from 'classnames'
import ThumbnailContainer from '@components/layout/ThumbnailContainer'
import Thumbnail from '@components/layout/Thumbnail'
import Link from 'next/link'

type Props = {
  data: StartProductSectionBlockRecord
}

export default async function StartProductSectionBlock({ data: { id, headline, selectedProducts } }: Props) {

  return (
    <section className={cn(s.container)}>
      <h3>{headline}</h3>
      <ThumbnailContainer>
        {selectedProducts.map((product, i) =>
          <Thumbnail key={i} product={product.product} />
        )}
      </ThumbnailContainer>
    </section>
  )
}