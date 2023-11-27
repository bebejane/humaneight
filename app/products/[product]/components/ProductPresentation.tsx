'use client'

import s from './ProductPresentation.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { StructuredContent } from 'next-dato-utils';
import * as blocks from '@components/blocks';
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

  const metaSections = metaSectionsByType(product)

  console.log(metaSectionsByType)

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
              <StructuredContent id={id} content={text} blocks={blocks} />
            </div>
          </div>
        )
      })}
      <div className={s.meta}>
        {Object.keys(metaSections).map(k => {
          const metaType = metaSections[k][0].metaType
          return (
            <>
              {metaType?.title &&
                <div
                  className={s.metaType}
                  onClick={() => setMetaSectionToggles({ ...metaSectionToggles, [k]: !metaSectionToggles[k] ? true : false })}
                >
                  <h3 className={s.type}>{metaType.title}</h3>
                  <button>+</button>
                </div>
              }
              <ul className={cn(metaSectionToggles[k] && s.show)}>
                {metaSections[k].map(({ id, title, text }) =>
                  <li key={id}>
                    <StructuredContent id={id} content={text} />
                  </li>
                )}
              </ul>
            </>
          )
        })}
      </div>
    </div >
  )
}


const metaSectionsByType = (product: ProductQuery['product']): { [key: string]: ProductMetaInfoRecord[] } => {
  return product?.metaSections
    .sort((a, b) => a.metaType.title > b.metaType.title ? 1 : -1)
    .reduce((acc: any, metaSection) => {
      const id = metaSection.metaType?.id
      const sections = acc[id] ?? []
      return { ...acc, [id]: [...sections, metaSection] }
    }, {}) ?? null
}