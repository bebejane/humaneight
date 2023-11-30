'use client'

import s from './ProductThumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';
import Price from '@components/shopify/Price';

export type Props = {
  product: ProductRecord,
  index: number
  columns?: string | undefined
}
export default function ProductThumbnail({ product, index, columns = 'three' }: Props) {

  return (
    <Link href={`/products/${product.slug}`} className={cn(s.thumbnail, s[columns])} data-index={index}>
      {product.image &&
        <figure>
          <Image
            data={product.image?.responsiveImage}
            className={cn(s.image, s.main)}
            placeholderClassName={s.picture}
            pictureClassName={s.picture}
          />
          {product.imageSecondary &&
            <Image
              data={product.imageSecondary?.responsiveImage}
              className={cn(s.image, s.secondary)}
              pictureClassName={s.picture}
              usePlaceholder={false}
              placeholderClassName={s.picture}
            />
          }
          <figcaption>
            <h3 className="mid">{product.title}</h3>
            <p className="mid light"><Price slug={product.slug} /></p>
          </figcaption>
          {columns !== 'four' &&
            <ul>
              {product.usp.map(({ id, title, description }) =>
                <li key={id}>
                  <span className={s.title}>{title}</span>
                  <span className={cn(s.description, "nav")} key={id}>{description}</span>
                </li>
              )}
            </ul>
          }
        </figure>
      }
    </Link>
  )
}