'use client'

import { FieldError, Label, Radio, RadioGroup, Text, Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import s from './ProductVariantsForm.module.scss'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import AddToCartButton from '@components/shopify/AddToCartButton'
import { parseGid } from '@shopify/utils';
import { useWindowSize } from 'react-use';
import { useScrollInfo } from 'next-dato-utils/hooks';
import useQueryString from '@lib/hooks/useQueryString'
import useIsDesktop from '@lib/hooks/useIsDesktop';
import useProduct from '@shopify/hooks/useProduct';

export type Props = {
  product: ProductByIdQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
  className?: string
  mobile?: boolean
}

export default function ProductVariantsForm({ product, shopifyProduct: _shopifyProduct, className, mobile }: Props) {

  const { product: shopifyProduct, loading, error } = useProduct({
    handle: product?.shopifyProduct.handle,
    initialData: _shopifyProduct
  })

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
  const defaultVariant = getFirstAvailableVariant(shopifyProduct as ShopifyProductQuery['product'])
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? defaultVariant

  const haveSizes = shopifyProduct?.variants.edges.find(({ node }) => optionValue(node.selectedOptions, 'Size') !== null) !== undefined
  const haveColors = shopifyProduct?.variants.edges.find(({ node }) => optionValue(node.selectedOptions, 'Color') !== null) !== undefined
  const availableSizes = availableVariants(shopifyProduct as Product, 'Color', optionValue(variant?.selectedOptions, 'Color'))
  const availableColors = availableVariants(shopifyProduct as Product, 'Size', optionValue(variant?.selectedOptions, 'Size'))
  const sizeOptions = shopifyProduct?.variants.edges.map(({ node }) => optionValue(node.selectedOptions, 'Size')).reduce<string[]>((acc, val) => val === null ? acc : acc.includes(val) ? acc : [...acc, val], [])
  const colorOptions = shopifyProduct?.variants.edges.map(({ node }) => optionValue(node.selectedOptions, 'Color')).reduce<string[]>((acc, val) => val === null ? acc : acc.includes(val) ? acc : [...acc, val], [])

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
      {haveColors && isDesktop &&
        <div>
          <RadioGroup aria-label="Colors" onChange={handleVariantChange} className={s.colorsDesktop} key={variant.id}>
            {colorOptions?.map((c, idx) => {
              const color = shopifyProduct?.variants.edges.find(({ node }) => optionValue(node.selectedOptions, 'Color') === c)?.node
              const v = availableColors.find(v => optionValue(v.selectedOptions, 'Color') === c)
              const option = v?.selectedOptions.find(opt => opt.name === 'Color')
              const selected = optionValue(variant?.selectedOptions, 'Color') === option?.value ? true : false

              return (
                <React.Fragment key={idx}>
                  <Radio
                    id={v ? parseGid(v.id) : 'unavailable'}
                    value={v ? parseGid(v.id) : 'unavailable'}
                    className={cn(s.radio, selected && s.selected)}
                    isDisabled={!v}
                    aria-label={option?.value}
                  >
                    <div className={s.label}>
                      <figure>
                        <img role="icon" src={color?.image?.url} alt={option?.value} />
                      </figure>
                    </div>
                  </Radio>
                </React.Fragment>
              )
            })}
            <FieldError />
          </RadioGroup>
        </div>
      }
      {haveColors && !isDesktop &&
        <div>
          <Select
            key={variant.id}
            className={s.colors}
            onSelectionChange={handleVariantChange}
            onOpenChange={(o) => setColorsOpen(o)}
            aria-label={'Colors'}
          >
            <Button className={s.button} ref={selectButtonRef}>
              <SelectValue className={s.value} key={variant.id}>
                <figure>
                  <img role="icon" src={variant?.image?.url} alt={variant?.image?.altText} />
                </figure>
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
                    <ListBoxItem id={parseGid(v.id)} key={idx} className={s.option} aria-label={option?.value}>
                      <figure>
                        <img role="icon" src={v.image?.url} alt={v.image?.altText} />
                        <Label>{option?.value}</Label>
                      </figure>
                    </ListBoxItem>
                  )
                })}
              </ListBox>
            </Popover>
          </Select>
        </div>
      }

      {haveSizes &&
        <div>
          <RadioGroup onChange={handleVariantChange} className={s.sizes} key={variant.id} aria-label={'Sizes'}>
            {sizeOptions?.map((size, idx) => {
              const v = availableSizes.find(v => v.selectedOptions.find(opt => opt.name === 'Size' && opt.value === size))
              const option = v?.selectedOptions.find(opt => opt.name === 'Size')
              const selected = optionValue(variant?.selectedOptions, 'Size') === option?.value ? true : false

              return (
                <React.Fragment key={idx}>
                  <Radio
                    id={v ? parseGid(v.id) : 'unavailable'}
                    value={v ? parseGid(v.id) : 'unavailable'}
                    className={cn(s.radio, selected && s.selected)}
                    isDisabled={!v}
                    aria-label={size}
                  >
                    <Label className={s.label}>{size}</Label>
                  </Radio>
                </React.Fragment>
              )
            })}
            <FieldError />
          </RadioGroup>
          <a href={`#${sizeGuideId}`} className={s.sizeguide} aria-disabled={sizeGuideId ? 'false' : 'true'}>?</a>
        </div>
      }
      <AddToCartButton
        label="Add to cart"
        merchandiseId={variant?.id}
        quantity={1}
        disabled={!(variant?.availableForSale && variant?.quantityAvailable)}
      />
    </form>
  )
}

const getFirstAvailableVariant = (product: ShopifyProductQuery['product']): ProductVariant => {
  return product?.variants.edges.find(({ node }) => node.availableForSale && node.quantityAvailable)?.node as ProductVariant ?? product?.variants.edges[0]?.node
}

const optionValue = (options: SelectedOption[], type: 'Color' | 'Size'): string | null => {
  return options.find(opt => opt.name === type)?.value ?? null
}

const availableVariants = (product: Product, name: string | undefined, value: string | undefined | null): ProductVariant[] => {
  if (!name || !value) return product?.variants?.edges.map(({ node }) => node)

  return product.variants.edges.filter(({ node: { selectedOptions, availableForSale, quantityAvailable } }) => {
    return availableForSale && quantityAvailable && selectedOptions.find(opt => opt.name === name && opt.value === value) !== undefined
  }).map(({ node }) => node)

}