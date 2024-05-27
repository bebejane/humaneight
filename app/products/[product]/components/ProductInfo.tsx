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
import { formatPrice } from '@lib/utils';

export type Props = {
  product: ProductByIdQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductInfo({ product, shopifyProduct }: Props) {

  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const descriptionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const color = variant?.selectedOptions.find(opt => opt.name === 'Color')?.value ?? null
  const images = product?.sections.map(({ productMedia }) => productMedia.map(({ variation }) => variation).flat().filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())).flat().filter(v => v.media).map(({ media }) => media).flat()
  const mainImage = images?.[0] ?? product?.image;


  if (!product)
    return null

  return (
    <div
      className={s.details}
      aria-label="Product details"
    >
      <div className={s.info} ref={contentRef}>
        <nav className="small" aria-label="Breadcrumb">
          <Link href="/shop">Shop</Link>
          &nbsp;&nbsp;›&nbsp;&nbsp;
          <Link href={`/shop/${product.collection.slug}`}>{product.collection.titlePlural}</Link>
        </nav>

        {mainImage?.responsiveImage &&
          <figure className={s.mainImage}>
            <Image
              data={mainImage?.responsiveImage}
              className={s.image}
              pictureClassName={s.picture}
            />
          </figure>
        }

        <header>
          <h1 className="big">{product.title}</h1>
          <div className={s.price} aria-label="Price">
            <p className="mid">{formatPrice(variant?.price.amount)} {variant?.price.currencyCode}</p>
          </div>
        </header>
        <Content content={product.shortSummary} className={cn(s.summary, "light mid")} />
        <section
          id={`${product.id}-description`}
          className={cn(s.description, "light mid")}
          ref={descriptionRef}
        >
          <Content content={product.description} />
        </section>
      </div>
      <ProductVariantsForm
        product={product}
        shopifyProduct={shopifyProduct}
        mobile={false}
      />
    </div>
  )
}
