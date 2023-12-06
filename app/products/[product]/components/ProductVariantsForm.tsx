'use client'

import { FieldError, Label, Radio, RadioGroup, Text, Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import useQueryString from '@lib/hooks/useQueryString'
import s from './ProductVariantsForm.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import AddToCartButton from '@components/shopify/AddToCartButton'
import { parseGid } from '@shopify/utils';
import { useWindowSize } from 'rooks';

export type Props = {
  product: ProductQuery['product']
  shopifyProduct: ShopifyProductQuery['product']
  className?: string
}

export default function ProductVariantsForm({ product, shopifyProduct, className }: Props) {

  const { searchParams, setSearchParam } = useQueryString()
  const { innerWidth } = useWindowSize()
  const [colorSelectWidth, setColorSelectWidth] = useState(0)
  const [colorsOpen, setColorsOpen] = useState(false)
  const selectButtonRef = React.useRef<HTMLButtonElement>(null);

  const sizeGuideId = product?.metaSections.find(({ metaType }) => metaType?.title === 'Size Guide')?.metaType.id
  const variantId = searchParams.get('variant') ?? null
  const defaultVariant = shopifyProduct?.variants.edges[0].node as ProductVariant
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGid(node.id) === variantId)?.node as ProductVariant ?? defaultVariant

  const haveSizes = shopifyProduct?.variants.edges.find(({ node }) => node.selectedOptions.find(opt => opt.name === 'Size') !== undefined) !== undefined
  const haveColors = shopifyProduct?.variants.edges.find(({ node }) => node.selectedOptions.find(opt => opt.name === 'Color') !== undefined) !== undefined
  const availableSizes = availableVariants(shopifyProduct as Product, 'Color', variant?.selectedOptions.find(opt => opt.name === 'Color')?.value)
  const availableColors = availableVariants(shopifyProduct as Product, 'Size', variant?.selectedOptions.find(opt => opt.name === 'Size')?.value)

  useEffect(() => {
    setColorSelectWidth(selectButtonRef.current?.offsetWidth ?? 0)
  }, [innerWidth])

  const handleVariantChange = (value: Key) => setSearchParam('variant', value.toString())

  return (
    <form className={cn(s.form, className)}>
      {haveColors && <fieldset>
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