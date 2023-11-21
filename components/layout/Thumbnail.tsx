'use server'

import s from './Thumbnail.module.scss'
import { Image } from 'react-datocms';
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
    <div className={s.thumbnail}>
      {product.image &&
        <figure>
          <Image
            data={product.image?.responsiveImage}
            className={s.image}
            placeholderClassName={s.picture}
            pictureClassName={s.picture}
          />
          <figcaption>
            <h3>{product.title}</h3>
            <span>{variant?.price?.amount} {variant?.price?.currencyCode}</span>
          </figcaption>
        </figure>
      }
      <div className={s.details}>


      </div>

    </div>
  )
}