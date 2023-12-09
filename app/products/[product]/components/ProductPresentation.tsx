'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { StructuredContent } from 'next-dato-utils';
import { Image } from 'react-datocms';
import useQueryString from '@lib/hooks/useQueryString';
import { parseGid } from '@shopify/utils';

export type VariantFormProps = {
  product: ProductQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}


export default function ProductPresentation({ product, shopifyProduct }: VariantFormProps) {

  const { searchParams } = useQueryString()
  const [metaSectionToggles, setMetaSectionToggles] = useState<{ [key: string]: boolean }>({})
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const color = variant?.selectedOptions.find(opt => opt.name === 'Color')?.value ?? null

  return (
    <div className={s.presentation}>
      {product?.sections.map(({ id, productMedia, text }, i) => {
        return (
          <div className={s.section} key={id}>
            {productMedia.map(({ id, variation, altText: alt }) => {

              const mediaCount = productMedia.map(({ variation }) => variation).flat().filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase()).length
              const selectedVariation = variation.filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())
              const media = selectedVariation.map(({ media }) => ({ media })).flat()

              if (mediaCount === 0)
                return <figure key={id}>No images in color {color}</figure>

              return media.map(({ media: { id, responsiveImage } },) =>
                <figure className={cn(mediaCount > 1 && s.double)} key={id}>
                  {responsiveImage &&
                    <Image
                      key={id}
                      className={s.image}
                      pictureClassName={s.picture}
                      data={{ ...responsiveImage, alt }}
                    />
                  }
                </figure>
              )
            })}
            <div className="big structured">
              <StructuredContent content={text} />
            </div>
          </div>
        )
      })}
    </div>
  )
}