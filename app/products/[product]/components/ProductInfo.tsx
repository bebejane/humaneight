'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useRef, useState } from 'react'
import useQueryString from '@lib/hooks/useQueryString';
import Link from '@components//nav/Link';
import ProductVariantsForm from './ProductVariantsForm';
import { Image } from 'react-datocms';
import { parseGid } from '@shopify/utils';
import { StructuredContent } from 'next-dato-utils';
import { useMedia } from 'react-use';
import useMeasure from 'react-use-measure';

export type Props = {
  product: ProductQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductInfo({ product, shopifyProduct }: Props) {

  const [readMore, setReadMore] = useState(false)
  const { searchParams } = useQueryString()
  const isDesktop = useMedia('(min-width: 980px)')
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const descriptionRef = useRef<HTMLDivElement>(null);

  if (!product)
    return null

  return (
    <div className={cn(s.details, readMore && s.expanded)}>
      <p className="small light">
        <Link href="/shop">Shop</Link>
        &nbsp;&nbsp;›&nbsp;&nbsp;
        <Link href={`/shop/${product.collection.slug}`}>{product.collection.title}s</Link>
      </p>
      {product.image?.responsiveImage &&
        <figure className={s.mainImage}>
          <Image data={product.image?.responsiveImage} className={s.image} pictureClassName={s.picture} />
        </figure>
      }
      <header>
        <h1 className="big">{product.title}</h1>
        <div className={s.price}>
          <p className="mid">{parseFloat(variant?.price.amount).toFixed(0)} {variant?.price.currencyCode}</p>
        </div>
      </header>
      <StructuredContent content={product.shortSummary} className={cn(s.summary, "light mid")} />
      <button className={s.readMore} onClick={() => setReadMore(!readMore)}>
        {readMore ? 'Read less' : 'Read more'}
      </button>
      <div
        className={cn(s.description, "light mid")}
        style={{ maxHeight: readMore ? descriptionRef.current?.scrollHeight : 0 }}
        ref={descriptionRef}
      >
        <StructuredContent content={product.description} />
      </div>
      <ProductVariantsForm
        product={product}
        shopifyProduct={shopifyProduct}
        className={cn(readMore && s.formExpanded)}
        mobile={false}
      />
    </div>
  )
}
