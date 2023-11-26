'use client'

import s from './ProductInfo.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import useQueryString from '@lib/hooks/useQueryString';
import Link from '@components//nav/Link';
import VariantsForm from '@app/products/[product]/components/VariantsForm';
import { ProductProvider, Money } from '@shopify/hydrogen-react';
import { fetchShopifyProduct, Product } from '@lib/shopify/utils';
import useCountry from '@lib/shopify/hooks/useCountry';

export type Props = {
  product: ProductQuery['product']
}

export default function ProductInfo({ product }: Props) {

  const [readMore, setReadMore] = useState(false)
  const [shopifyProduct, setShopifyProduct] = useState<Product | null>(null)
  const { searchParams } = useQueryString()
  const country = useCountry()
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => node.id == variantId)?.node ?? shopifyProduct?.variants.edges[0].node

  useEffect(() => {
    fetchShopifyProduct(product as ProductRecord, country)
      .then((shopifyProduct) => setShopifyProduct(shopifyProduct))
      .catch((error) => console.error(error))
  }, [])

  if (!product) return null

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
            {shopifyProduct && variant &&
              <ProductProvider data={shopifyProduct}>
                <Money key={variant.id} data={variant.price} />
              </ProductProvider>
            }
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
        {shopifyProduct &&
          <ProductProvider data={shopifyProduct}>
            <VariantsForm product={product} className={cn(readMore && s.formExpanded)} />
          </ProductProvider>
        }
      </div>

    </>
  )
}
