'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
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
  const [formHeight, setFormHeight] = useState(0)
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const descriptionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const readMoreRef = useRef<HTMLButtonElement>(null);

  const descriptionFitViewport = () => {
    if (!contentRef.current) return false

    const form = document.getElementById('product-variant-form')
    console.log(contentRef.current.scrollHeight)
    const ah = (form?.getBoundingClientRect().top ?? 0) - (readMoreRef.current?.getBoundingClientRect().bottom ?? 0)

    return ah >= (descriptionRef.current?.scrollHeight ?? 0)
  }
  useEffect(() => {
    setFormHeight(document.getElementById('product-variant-form')?.scrollHeight ?? 0)
  }, [readMore])

  const needsExpansion = readMore && !descriptionFitViewport()

  if (!product)
    return null

  return (
    <div
      className={s.details}
      style={{
        top: needsExpansion ? `calc(-1 * calc(${formHeight}px - var(--navbar-height) + var(--outer-margin) + 1rem))` : undefined,
        height: needsExpansion ? `calc(100vh + var(--navbar-height) - var(--outer-margin) + ${descriptionRef.current?.scrollHeight}px - ${formHeight}px)` : undefined
      }}
    >
      <div className={s.info} ref={contentRef}>
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
      </div>
      <ProductVariantsForm
        product={product}
        shopifyProduct={shopifyProduct}
        mobile={false}
      />
    </div>
  )
}
