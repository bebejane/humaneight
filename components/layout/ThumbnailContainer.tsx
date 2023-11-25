'use client'

import s from './ThumbnailContainer.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react';
import Thumbnail from '@components/layout/Thumbnail';
import useCountry from '@lib/shopify/hooks/useCountry';
import { ProductProvider, parseGid } from '@shopify/hydrogen-react';
import { PartialObjectDeep } from 'type-fest/source/partial-deep';
import StoreProvider from '@lib/shopify/context/StoreProvider';
import { fetchShopifyProducts, Product } from '@lib/shopify/utils';


export type Props = {
  products: ProductRecord[]
}

export default function ThumbnailContainer({ products }: Props) {

  const country = useCountry()
  const [shopifyProducts, setShopifyProducs] = useState<PartialObjectDeep<Product, { recurseIntoArrays: true; }>[] | null>(null)

  useEffect(() => {
    fetchShopifyProducts(products, country)
      .then((shopifyProducts) => setShopifyProducs(shopifyProducts))
      .catch((error) => console.error(error))
  }, [])

  if (!shopifyProducts) return null

  return (
    <div className={cn(s.container, "grid")}>
      <StoreProvider>
        {products?.map((product) => {
          const shopifyProduct = shopifyProducts.find(({ id }) => parseGid(id).id == product.shopifyId)
          if (!shopifyProduct) return null
          return (
            <ProductProvider key={product.id} data={shopifyProduct}>
              <Thumbnail key={product.id} product={product as ProductRecord} />
            </ProductProvider>
          )
        })}
      </StoreProvider>
    </div>
  )
}