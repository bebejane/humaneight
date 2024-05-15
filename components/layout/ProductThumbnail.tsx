'use client'

import s from './ProductThumbnail.module.scss'
import { Image } from 'react-datocms';
import Link from '@components//nav/Link';
import cn from 'classnames';
import Price from '@components/shopify/Price';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use'

export type Props = {
  product: ProductRecord,
  index: number
  columns?: string | undefined
  color?: string
  variantId?: string
}

export default function ProductThumbnail({ product, color, variantId, index, columns = 'three' }: Props) {

  const [maxUsps, setMaxUsps] = useState(4)
  const { width, height } = useWindowSize()
  const figureRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!figureRef.current) return

    const figureWidth = figureRef.current.getBoundingClientRect().width
    const usps = Array.from(figureRef.current.querySelectorAll('ul li'))

    let uspsWidth = 0
    let maxUsps = 0

    for (const u of usps) {
      const s = getComputedStyle(u)
      uspsWidth += parseInt(s.width.replace('px', '')) + parseInt(s.marginLeft.replace('px', '')) + parseInt(s.marginRight.replace('px', ''))
      if (uspsWidth <= figureWidth)
        maxUsps++
      else
        break
    }

    setMaxUsps(maxUsps)

  }, [width, height])

  const colorMedia = product.thumbnailForVariations?.variation.find((v: any) => v.color.title === color)?.media
  const href = `/products/${product.shopifyProduct.handle}${variantId ? `?variant=${variantId}` : ''}`
  const image = colorMedia ?? product.image
  const imageSecondary = product.imageSecondary

  return (
    <Link
      href={href}
      className={cn(s.thumbnail, s[columns])}
      data-index={index}
    >
      <figure ref={figureRef}>
        {image?.responsiveImage &&
          <Image
            data={image?.responsiveImage}
            className={cn(s.image, s.main)}
            placeholderClassName={s.picture}
            pictureClassName={s.picture}
            intersectionMargin={`0px 0px 100% 0px`}
          />
        }
        {imageSecondary &&
          <Image
            data={imageSecondary.responsiveImage}
            className={cn(s.image, s.secondary)}
            pictureClassName={s.picture}
            usePlaceholder={false}
            placeholderClassName={s.picture}
          />
        }
        <figcaption>
          <h3 className="mid-small">{product.title}</h3>
          <p className="mid-small"><Price slug={product.shopifyProduct.handle} /></p>
        </figcaption>
        {columns !== 'four' &&
          <ul>
            {product.usp.map(({ id, title, description }, idx) =>
              <li key={id} >
                <span className={cn(s.title, idx + 1 > maxUsps && s.hidden)}>{title}</span>
                <span className={cn(s.description, "nav")} key={id}>{description}</span>
              </li>
            )}
          </ul>
        }
      </figure>
      {product.label &&
        <span className={s.label}>{product.label}</span>
      }
    </Link>
  )
}