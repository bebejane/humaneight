'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import { Image } from 'react-datocms';
import useQueryString from '@lib/hooks/useQueryString';
import { parseGID } from '@shopify/utils';
import useProduct from '@shopify/hooks/useProduct';

export type VariantFormProps = {
  product: ProductQuery['product']
}


export default function ProductPresentation({ product }: VariantFormProps) {

  const { searchParams } = useQueryString()
  const variantId = searchParams.get('variant') ?? null
  const { product: shopifyProduct, error, loading } = useProduct({ handle: product?.slug })
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGID(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const color = variant?.selectedOptions.find(opt => opt.name === 'Color')?.value ?? null

  if (error)
    return <div className="error">{error.message}</div>

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
                  }pn
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
