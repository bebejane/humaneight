import s from './StartProductShortcutBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'
import Link from 'next/link'

type Props = {
  data: StartProductShortcutBlockRecord
}

export default async function StartProductShortcutBlock({ data: { id, product } }: Props) {

  return (
    <section className={cn(s.container)}>
      <Link href={`/products/${product.slug}`}>
        <p>{product.title} Shortcut </p>
        {product.image &&
          <figure>
            <Image data={product.image.responsiveImage} />
          </figure>
        }
      </Link>
    </section>
  )

}