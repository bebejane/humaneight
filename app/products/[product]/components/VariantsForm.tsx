'use client'

import { FieldError, Label, Radio, RadioGroup, Text, Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import useQueryString from '@lib/hooks/useQueryString'
import s from './VariantsForm.module.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import AddToCartButton from '@components/shopify/AddToCartButton'

export type VariantFormProps = {
  allProductColors: AllProductColorsQuery['allProductColors']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function VariantsForm({ shopifyProduct }: VariantFormProps) {
  //console.log(shopifyProduct)
  const { searchParams, setSearchParam } = useQueryString()
  const [colorsOpen, setColorsOpen] = useState(false)
  const color = searchParams.get('color') ?? 'Black'
  const size = searchParams.get('size') ?? 'M'
  const variant = findSelectedVariant(shopifyProduct as Product, color, size)

  const sizeOptions = shopifyProduct?.options.find(opt => opt.name === 'Size')?.values ?? []
  const colorOptions = shopifyProduct?.options.find(opt => opt.name === 'Color')?.values ?? []

  const handleColorChange = (value: Key) => setSearchParam('color', value.toString())
  const handleSizeChange = (value: string) => setSearchParam('size', value)

  return (
    <form className={s.form}>
      <fieldset>
        <Select
          className={s.colors}
          onSelectionChange={handleColorChange}
          onOpenChange={(o) => setColorsOpen(o)}
        >
          <Text slot="description" className={s.description}>Color</Text>
          <Button className={s.button}>
            <SelectValue className={s.value}>
              {variant?.selectedOptions.find(opt => opt.name === 'Color')?.value}
            </SelectValue>
            <span aria-hidden="true" className={s.arrow}>{!colorsOpen ? '▼' : '▲'}</span>
          </Button>
          <Popover placement="top left" className={s.colorsPopover}>
            <ListBox
              className={s.options}
              items={colorOptions.map((color, idx) => ({ id: idx, name: color }))}
            >
              {colorOptions.map((color, idx) => {
                const available = shopifyProduct?.variants?.edges.find(variant => variant.node.selectedOptions.find(opt => opt.name === 'Color' && opt.value === color))
                return (
                  <ListBoxItem
                    id={color}
                    key={idx}
                    className={cn(s.option, !available && s.disabled)}
                  >{color}</ListBoxItem>
                )
              })}
            </ListBox>
          </Popover>
        </Select>
      </fieldset>

      <fieldset>
        <RadioGroup onChange={handleSizeChange} className={s.sizes}>
          <Text slot="description" className={s.description}>Size</Text>
          {sizeOptions.map((size, idx) => {
            const disabled = shopifyProduct?.variants?.edges.find(variant => variant.node.selectedOptions.find(opt => opt.name === 'Size' && opt.value === size)) ? false : true
            const selected = variant?.selectedOptions.find(opt => opt.name === 'Size' && opt.value === size) ? true : false

            return (
              <React.Fragment key={idx}>
                <Radio
                  value={size}
                  isDisabled={disabled}
                  className={cn(s.radio, selected && s.selected, disabled && s.disabled)}
                >
                  <Label className={s.label}>{size}</Label>
                </Radio>
              </React.Fragment>
            )
          })}
          <FieldError />
        </RadioGroup>
      </fieldset>
      <AddToCartButton label="Add to cart" merchandiseId={variant?.id} quantity={1} />
    </form>
  )
}

const findSelectedVariant = (product: Product, color: string | null, size: string | null): ProductVariant | undefined => {

  return product.variants.edges.find(({ node: { selectedOptions } }) => {
    return selectedOptions.find(opt => opt.name === 'Color' && opt.value === color) && selectedOptions.find(opt => opt.name === 'Size' && opt.value === size)
  })?.node ?? product.variants.edges[0].node
}