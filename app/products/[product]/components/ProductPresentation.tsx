'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React from 'react'
import StructuredContent from '@components/layout/StructuredContent';
import { Image } from 'react-datocms';

export type VariantFormProps = {
  product: ProductQuery['product']
}

const mapVariations = (productMedia: any[]): any[] => {
  const variations = productMedia.map(({ altText, variation }) => variation.map((v: any) => ({
    ...v,
    media: {
      ...v.media,
      responsiveImage: {
        ...v.media.responsiveImage,
        alt: altText || '',
      },
    }
  }
  )).flat())

  console.log(variations)
  return variations
}

export default function ProductPresentation({ product }: VariantFormProps) {

  //console.log(product)
  return (
    <div className={s.presentation}>
      {product?.sections.map(({ id, productMedia, text }, i) => {
        return (
          <div className={s.section} key={id}>
            {productMedia.map(({ id, variation, altText, title }) => {
              const media = variation.map(({ media }) => media).flat()

              return media.map(({ responsiveImage }) =>
                <figure className={cn(media.length > 1 && s.double)}>
                  <Image
                    key={id}
                    className={s.image}
                    pictureClassName={s.picture}
                    data={responsiveImage}
                  />
                </figure>
              )
            })}
            <StructuredContent id={id} content={text} />
          </div>
        )
      })}
    </div >
  )
}
