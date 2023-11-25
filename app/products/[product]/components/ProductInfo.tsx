'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import useQueryString from '@lib/hooks/useQueryString';
import Price from '@components/shopify/Price';
import Link from '@components//nav/Link';
import VariantsForm from '@app/products/[product]/components/VariantsForm';

export type Props = {
  product: ProductQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductInfo({ product, shopifyProduct }: Props) {

  const [readMore, setReadMore] = useState(false)
  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null

  if (!product)
    return null

  return (
    <>
      <div className={cn(s.details, readMore && s.expanded)}>
        <p className="small">
          <Link href="/shop">Shop</Link>
          &nbsp;|&nbsp;
          <Link href={`/shop/${product.collection.slug}`}>{product.collection.title}</Link>
        </p>
        <header>
          <h1 className="body">{product.title}</h1>
          <div className={s.price}>
            <p><Price slug={product.slug} variantId={variantId} /></p>
          </div>
        </header>
        <StructuredContent
          id={product.id}
          content={product.shortSummary}
          className={s.summary}
        />
        <button className={s.readMore} onClick={() => setReadMore(!readMore)}>
          Read more
        </button>
        <StructuredContent
          id={product.id}
          content={product.description}
          className={cn(s.description, readMore && s.show)}
        />
        <VariantsForm
          product={product}
          shopifyProduct={shopifyProduct}
          className={cn(readMore && s.formExpanded)}
        />
      </div>

    </>
  )
}
