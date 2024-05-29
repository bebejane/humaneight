'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import Content from '@components/content/Content'
import { Image } from 'react-datocms';
import useQueryString from '@lib/hooks/useQueryString';
import { parseGid } from '@shopify/utils';
import ProductGallery from './ProductGallery';
import useIsDesktop from '@lib/hooks/useIsDesktop';
import ProductPresentationSwiper from './ProductPresentationSwiper'

export type VariantFormProps = {
  product: ProductByIdQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function ProductPresentation({ product, shopifyProduct }: VariantFormProps) {

  const { searchParams } = useQueryString()
  const [galleryId, setGalleryId] = useState<string | null>(null)
  const isDesktop = useIsDesktop()
  const variantId = searchParams.get('variant') ?? null
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant
  const color = variant?.selectedOptions.find(opt => opt.name === 'Color')?.value ?? null
  const images = product?.sections.map(({ productMedia }) => productMedia.map(({ variation }) => variation).flat().filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())).flat().filter(v => v.media).map(({ media }) => media).flat()

  return (
    <>
      <div className={s.presentation}>
        {product?.sections.map(({ id, productMedia, text }, i) => {

          const mediaByVariation = productMedia
            .map(({ variation }) => variation)
            .flat()
            .filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())
            .map(({ media }) => media)
            .slice(i === 0 && !isDesktop ? 1 : undefined) // Skip first image on mobile

          return (
            <div className={s.section} key={id}>
              {isDesktop ? productMedia.map(({ variation, altText: alt }, idx) => {

                const mediaCount = mediaByVariation.length
                const selectedVariation = variation.filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())
                const media = selectedVariation.map(({ media }) => ({ media })).flat()

                if (mediaCount === 0)
                  return null

                return media.map(({ media: { id, responsiveImage } }, i) =>

                  <figure
                    key={id}
                    className={cn(mediaCount > 1 && s.double)}
                    onClick={() => setGalleryId(id)}
                  >
                    {responsiveImage &&
                      <Image
                        key={id}
                        className={s.image}
                        pictureClassName={s.picture}
                        intersectionMargin={'0px 0px 100% 0px'}
                        data={{ ...responsiveImage, alt }}
                      />
                    }
                  </figure>
                )
              })
                :
                <ProductPresentationSwiper images={mediaByVariation as FileField[]} />
              }
              <div className="big structured">
                <Content content={text} />
              </div>
            </div>
          )
        })}
      </div >
      <ProductGallery
        key={galleryId}
        images={images as FileField[]}
        show={galleryId !== null}
        id={galleryId}
        onClose={() => setGalleryId(null)}
      />
    </>
  )
}