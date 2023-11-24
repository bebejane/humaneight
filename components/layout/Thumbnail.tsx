'use client'

import s from './Thumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';
import Price from '@components/shopify/Price';
import useProduct from '@shopify/hooks/useProduct';

export type Props = {
  product: ProductRecord,
}
export default function Thumbnail({ product }: Props) {

  const { product: shopifyProduct } = useProduct({ handle: product?.slug })

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
            <p><Price slug={product.slug} /></p>
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