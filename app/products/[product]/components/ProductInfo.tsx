'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useRef, useState } from 'react'
import useQueryString from '@lib/hooks/useQueryString';
import Link from '@components//nav/Link';
import VariantsForm from '@app/products/[product]/components/VariantsForm';
import { parseGid } from '@shopify/utils';
import { StructuredContent } from 'next-dato-utils';

export type Props = {
  product: ProductQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductInfo({ product, shopifyProduct }: Props) {

  const [readMore, setReadMore] = useState(false)
  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const descriptionRef = useRef<HTMLDivElement>(null);

  if (!product)
    return null

  console.log(descriptionRef.current?.scrollHeight)
  return (
    <>
      <div className={cn(s.details, readMore && s.expanded)}>
        <p className="small light">
          <Link href="/shop">Shop</Link>
          &nbsp;&nbsp;›&nbsp;&nbsp;
          <Link href={`/shop/${product.collection.slug}`}>{product.collection.title}s</Link>
        </p>
        <header>
          <h1 className="big">{product.title}</h1>
          <div className={s.price}>
            <p className="mid light">{parseFloat(variant?.price.amount).toFixed(0)} {variant?.price.currencyCode}</p>
          </div>
        </header>
        <StructuredContent
          id={product.id}
          content={product.shortSummary}
          className={cn(s.summary, "light mid")}
        />
        <button className={s.readMore} onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Read less' : 'Read more'}
        </button>
        <div
          className={cn(s.description, "light mid")}
          style={{ maxHeight: readMore ? descriptionRef.current?.scrollHeight : 0 }}
          ref={descriptionRef}
        >
          <StructuredContent
            id={product.id}
            content={product.description}
          />
        </div>
        <VariantsForm
          product={product}
          shopifyProduct={shopifyProduct}
          className={cn(readMore && s.formExpanded)}
        />
      </div >

    </>
  )
}
