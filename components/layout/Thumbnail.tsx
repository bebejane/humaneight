'use server'

import s from './Thumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from 'next/link';
import shopifyQuery from '@shopify/shopify-query';
import Shop from '@app/shop/page';
import { ShopifyProductDocument } from '@shopify/graphql';

export type Props = {
  product: ProductRecord,
}
export default async function Thumbnail({ product }: Props) {

  const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
    variables: { handle: product.slug },
    tags: [product.id]
  })

  const variant = shopifyProduct?.variants?.edges?.[0]?.node;

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
          <figcaption>
            <h3 className="body">{product.title}</h3>
            <p>{variant?.price?.amount} {variant?.price?.currencyCode}</p>
          </figcaption>
        </figure>
      }
    </Link>
  )
}