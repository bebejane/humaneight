'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import { Image } from 'react-datocms';
import useQueryString from '@lib/hooks/useQueryString';

export type VariantFormProps = {
  product: ProductQuery['product']
}

export default function ProductPresentation({ product }: VariantFormProps) {

  const { searchParams } = useQueryString()
  const color = searchParams.get('color')



  return (
    <div className={s.presentation}>
      {product?.sections.map(({ id, productMedia, text }, i) => {
        return (
          <div className={s.section} key={id}>
            {productMedia.map(({ id, variation, altText: alt }) => {

              const mediaCount = productMedia.map(({ variation }) => variation).flat().filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase()).length
              const selectedVariation = variation.filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())
              const defaultVariation = variation.filter(v => !selectedVariation.find(({ id }) => id === v.id))
              const media = selectedVariation.map(({ media }) => ({ media })).flat()

              if (mediaCount === 0)
                return <figure key={id}>No images in color {color}</figure>

              return media.map(({ media: { id, responsiveImage } },) =>
                <figure className={cn(mediaCount > 1 && s.double)} key={id}>
                  <Image
                    key={id}
                    className={s.image}
                    pictureClassName={s.picture}
                    data={{ ...responsiveImage, alt }}
                  />
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
