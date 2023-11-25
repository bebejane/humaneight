'use client'

import s from './Thumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';
import { Money, useProduct } from '@shopify/hydrogen-react';

export type Props = {
  product: ProductRecord,
}
export default function Thumbnail({ product }: Props) {

  const shopifyProduct = useProduct()
  const variant = shopifyProduct.selectedVariant ?? shopifyProduct.variants?.[0]

  return (
    <Link href={`/products/${product.slug}`} className={s.thumbnail}>
      {product.image &&
        <figure>
          <Image
            data={product.image?.responsiveImage}
            className={s.image}
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
            <h3 className="body">{product.title}</h3>
            {variant?.price && <Money data={variant.price} withoutTrailingZeros={true} />}
          </figcaption>
          <ul>
            {product.usp.map(({ id, title, description }) =>
              <li key={id}>
                <span className={s.title}>{title}</span>
                <span className={cn(s.description, "nav")} key={id}>{description}</span>
              </li>
            )}
          </ul>
        </figure>
      }
    </Link>
  )
}