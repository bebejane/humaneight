'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import { Image } from 'react-datocms';
import useQueryString from '@lib/hooks/useQueryString';
import { parseGid, useProduct } from '@shopify/hydrogen-react';

export type VariantFormProps = {
  product: ProductQuery['product']
}


export default function ProductPresentation({ product }: VariantFormProps) {

  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const shopifyProduct = useProduct()
  const variant = shopifyProduct.selectedVariant ?? shopifyProduct.variants?.[0]
  const color = ''//null//variant?.selectedOptions.find(opt => opt.name === 'Color')?.value ?? null

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
              <StructuredContent id={id} content={text} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
