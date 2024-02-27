'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useRef, useState } from 'react'
import useQueryString from '@lib/hooks/useQueryString';
import Link from '@components//nav/Link';
import ProductVariantsForm from './ProductVariantsForm';
import { Image } from 'react-datocms';
import { parseGid } from '@shopify/utils';
import Content from '@components/content/Content'

export type Props = {
  product: ProductByIdQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductInfo({ product, shopifyProduct }: Props) {

  const [readMore, setReadMore] = useState(false)
  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const descriptionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const readMoreRef = useRef<HTMLButtonElement>(null);

  const descriptionFitViewport = () => {
    if (!containerRef.current) return false

    const form = document.getElementById('product-variant-form')
    const ah = (form?.getBoundingClientRect().top ?? 0) - (readMoreRef.current?.getBoundingClientRect().bottom ?? 0)
    return ah >= (descriptionRef.current?.scrollHeight ?? 0)
  }

  const needsExpansion = readMore && !descriptionFitViewport()

  if (!product)
    return null

  return (
    <div className={cn(s.details, needsExpansion && s.expanded)} ref={containerRef}>
      <p className="small">
        <Link href="/shop">Shop</Link>
        &nbsp;&nbsp;›&nbsp;&nbsp;
        <Link href={`/shop/${product.collection.slug}`}>{product.collection.title}s</Link>
      </p>
      {product.image?.responsiveImage &&
        <figure className={s.mainImage}>
          <Image
            data={product.image?.responsiveImage}
            className={s.image}
            pictureClassName={s.picture}
          />
        </figure>
      }
      <header>
        <h1 className="big">{product.title}</h1>
        <div className={s.price}>
          <p className="mid">{parseFloat(variant?.price.amount).toFixed(0)} {variant?.price.currencyCode}</p>
        </div>
      </header>
      <Content content={product.shortSummary} className={cn(s.summary, "light mid")} />
      <div
        className={cn(s.description, "light mid")}
        style={{ maxHeight: readMore ? descriptionRef.current?.scrollHeight : 0 }}
        ref={descriptionRef}
      >
        <Content content={product.description} />
      </div>
      <button className={s.readMore} onClick={() => setReadMore(!readMore)} ref={readMoreRef}>
        {readMore ? 'Read less' : 'Read more'}
      </button>
      <ProductVariantsForm
        product={product}
        shopifyProduct={shopifyProduct}
        mobile={false}
      />
    </div>
  )
}
