'use client'

import { FieldError, Label, Radio, RadioGroup, Text, Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import useQueryString from '@lib/hooks/useQueryString'
import s from './ProductVariantsForm.module.scss'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import AddToCartButton from '@components/shopify/AddToCartButton'
import { parseGid } from '@shopify/utils';
import { useMedia, useWindowSize, useWindowScroll } from 'react-use';
import { useScrollInfo } from 'next-dato-utils/hooks';
import useIsDesktop from '@lib/hooks/useIsDesktop';
import { is } from 'date-fns/locale';

export type Props = {
  product: ProductByIdQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
  className?: string
  mobile?: boolean
}

export default function ProductVariantsForm({ product, shopifyProduct, className, mobile }: Props) {

  const { searchParams, setSearchParam } = useQueryString()
  const { width, height } = useWindowSize()
  const { scrolledPosition } = useScrollInfo()

  const [colorSelectWidth, setColorSelectWidth] = useState(0)
  const [colorsOpen, setColorsOpen] = useState(false)
  const selectButtonRef = React.useRef<HTMLButtonElement>(null);
  const isDesktop = useIsDesktop()
  const [formStyles, setFormStyles] = useState<React.CSSProperties>({})
  const formRef = useRef<HTMLFormElement>(null);

  const sizeGuideId = product?.metaSections.find(({ metaType }) => metaType?.title === 'Size Guide')?.metaType.id
  const variantId = searchParams.get('variant') ?? null
  const defaultVariant = shopifyProduct?.variants.edges[0].node as ProductVariant
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? defaultVariant

  const haveSizes = shopifyProduct?.variants.edges.find(({ node }) => node.selectedOptions.find(opt => opt.name === 'Size') !== undefined) !== undefined
  const haveColors = shopifyProduct?.variants.edges.find(({ node }) => node.selectedOptions.find(opt => opt.name === 'Color') !== undefined) !== undefined
  const availableSizes = availableVariants(shopifyProduct as Product, 'Color', variant?.selectedOptions.find(opt => opt.name === 'Color')?.value)
  const availableColors = availableVariants(shopifyProduct as Product, 'Size', variant?.selectedOptions.find(opt => opt.name === 'Size')?.value)

  const handleVariantChange = (value: Key) => setSearchParam('variant', value.toString())

  useEffect(() => {
    setColorSelectWidth(selectButtonRef.current?.offsetWidth ?? 0)
  }, [width, colorsOpen])

  useEffect(() => {
    if (isDesktop) return
    const form = formRef.current
    if (!form) return

    const bounds = document.getElementById('product')?.getBoundingClientRect()
    setFormStyles({ position: 'sticky', top: `${bounds?.top}px`, zIndex: 1 })

  }, [width, height, isDesktop])

  const isHidden = (isDesktop && mobile) || (!isDesktop && !mobile)
  const isMobileHidden = !isDesktop && scrolledPosition < 100

  if (isHidden) return null

  return (
    <form id="product-variant-form" className={cn(s.form, className, isMobileHidden && s.hidden)} ref={formRef} style={formStyles}>
      {haveColors && !isDesktop &&
        <fieldset>
          <Select
            key={variantId}
            className={s.colors}
            onSelectionChange={handleVariantChange}
            onOpenChange={(o) => setColorsOpen(o)}
          >
            <Button className={s.button} ref={selectButtonRef}>
              <SelectValue className={s.value} key={variantId}>
                {variant?.selectedOptions.find(opt => opt.name === 'Color')?.value}
              </SelectValue>
              <span aria-hidden="true" className={cn(s.arrow, "symbol")}>{!colorsOpen ? '▼' : '▲'}</span>
            </Button>
            <Popover placement="top left" className={s.colorsPopover}>
              <ListBox
                className={s.options}
                items={availableColors.map((v, idx) => ({
                  id: parseGid(v.id),
                  name: v.selectedOptions.find(opt => opt.name === 'Color')?.value
                }))}
                style={{ width: colorSelectWidth }}
              >
                {availableColors.map((v, idx) => {
                  const option = v.selectedOptions.find(opt => opt.name === 'Color')
                  if (!option) return null
                  return (
                    <ListBoxItem id={parseGid(v.id)} key={idx} className={s.option}>
                      <figure>
                        <img src={v.image?.url} alt={v.image?.altText} />
                        <figcaption>
                          {option?.value}
                        </figcaption>
                      </figure>
                    </ListBoxItem>
                  )
                })}
              </ListBox>
            </Popover>
          </Select>
        </fieldset>
      }
      {haveColors && isDesktop &&
        <fieldset>
          <RadioGroup onChange={handleVariantChange} className={s.colorsDesktop} key={variantId}>
            {availableColors.map((v, idx) => {
              const option = v.selectedOptions.find(opt => opt.name === 'Color')
              const selected = variant?.selectedOptions.find(opt => opt.name === 'Color' && option?.value === opt.value) ? true : false

              return (
                <React.Fragment key={idx}>
                  <Radio
                    id={parseGid(v.id)}
                    value={parseGid(v.id)}
                    className={cn(s.radio, selected && s.selected)}
                  >
                    <Label className={s.label}>
                      <figure>
                        <img src={v.image?.url} alt={option?.value} title={option?.value} />
                      </figure>
                    </Label>
                  </Radio>
                </React.Fragment>
              )
            })}
            <FieldError />
          </RadioGroup>
        </fieldset>

      }
      {haveSizes &&
        <fieldset>
          <RadioGroup onChange={handleVariantChange} className={s.sizes} key={variantId}>

            {availableSizes.map((v, idx) => {
              const option = v.selectedOptions.find(opt => opt.name === 'Size')
              const selected = variant?.selectedOptions.find(opt => opt.name === 'Size' && option?.value === opt.value) ? true : false

              return (
                <React.Fragment key={idx}>
                  <Radio
                    id={parseGid(v.id)}
                    value={parseGid(v.id)}
                    className={cn(s.radio, selected && s.selected)}
                  >
                    <Label className={s.label}>{option?.value}</Label>
                  </Radio>
                </React.Fragment>
              )
            })}
            <FieldError />
          </RadioGroup>
          <a href={`#${sizeGuideId}`} className={s.sizeguide} aria-disabled={sizeGuideId ? 'false' : 'true'}>?</a>
        </fieldset>
      }
      <AddToCartButton label="Add to cart" merchandiseId={variant?.id} quantity={1} />
    </form>
  )
}

const availableVariants = (product: Product, name: string | undefined, value: string | undefined): ProductVariant[] => {
  if (!name || !value) return product?.variants?.edges.map(({ node }) => node)

  return product.variants.edges.filter(({ node: { selectedOptions } }) => {
    return selectedOptions.find(opt => opt.name === name && opt.value === value) !== undefined
  }).map(({ node }) => node)

}