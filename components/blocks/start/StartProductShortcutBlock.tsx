import s from './StartProductShortcutBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'
import Thumbnail from '@components/layout/Thumbnail'

type Props = {
  data: StartProductShortcutBlockRecord
}

export default async function StartProductShortcutBlock({ data: { id, product } }: Props) {


  return (
    <section className={cn(s.container)}>
      <Link href={`/products/${product.slug}`}>
        {product.title} Shortcut
        {product.image &&
          <figure>
            <Image data={product.image.responsiveImage} />
          </figure>
        }
      </Link>
    </section>
  )

}