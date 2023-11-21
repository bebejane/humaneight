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
            {productMedia.map(({ id, variation, altText, title }) => {

              const selectedVariation = variation.filter(v => v.color?.title?.toLowerCase() === color?.toLowerCase())
              const media = selectedVariation.map(({ media }) => ({ media })).flat()

              return media.map(({ media: { responsiveImage } }) =>
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
