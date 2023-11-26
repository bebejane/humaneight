'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import useQueryString from '@lib/hooks/useQueryString';
import Link from '@components//nav/Link';
import VariantsForm from '@app/products/[product]/components/VariantsForm';
import { parseGid } from '@shopify/utils';
import { StructuredText } from 'next-dato-utils';
import * as blocks from '@components/blocks';

export type Props = {
  product: ProductQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductInfo({ product, shopifyProduct }: Props) {

  const [readMore, setReadMore] = useState(false)
  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant

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
            <p>{parseFloat(variant?.price.amount).toFixed(0)} {variant?.price.currencyCode}</p>
          </div>
        </header>
        <StructuredText
          id={product.id}
          content={product.shortSummary}
          blocks={blocks}
          className={s.summary}
        />
        <button className={s.readMore} onClick={() => setReadMore(!readMore)}>
          Read more
        </button>
        <StructuredText
          id={product.id}
          content={product.description}
          blocks={blocks}
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
