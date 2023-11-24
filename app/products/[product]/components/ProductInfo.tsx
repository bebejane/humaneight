'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import useQueryString from '@lib/hooks/useQueryString';
import { parseGID } from '@shopify/utils';
import useProduct from '@shopify/hooks/useProduct';
import Price from '@components/shopify/Price';
import Link from '@components//nav/Link';

export type Props = {
  product: ProductQuery['product']
}

export default function ProductInfo({ product }: Props) {

  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const { product: shopifyProduct } = useProduct({ handle: product?.slug })
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGID(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant

  if (!product || !shopifyProduct) return null

  return (
    <>
      <p className="small">
        <Link href="/shop">Shop</Link>
        &nbsp;|&nbsp;
        <Link href={`/shop/${product.collection.slug}`}>{product.collection.title}</Link>
      </p>
      <header>
        <h1 className="body">{product.title}</h1>
        <div className={s.price}><p><Price slug={product.slug} variantId={variant.id} /></p></div>
      </header>
      <StructuredContent id={product.id} content={product.shortSummary} />
      <span>Read more</span>

    </>
  )
}
