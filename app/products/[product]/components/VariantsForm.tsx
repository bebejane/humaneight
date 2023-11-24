'use client'

import { FieldError, Label, Radio, RadioGroup, Text, Button, ListBox, ListBoxItem, Popover, Select, SelectValue, Key } from 'react-aria-components';
import useQueryString from '@lib/hooks/useQueryString'
import s from './VariantsForm.module.scss'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import AddToCartButton from '@components/shopify/AddToCartButton'
import { parseGID } from '@shopify/utils';
import { sl } from 'date-fns/locale';
import { sleep } from 'next-dato-utils';

export type VariantFormProps = {
  allProductColors: AllProductColorsQuery['allProductColors']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function VariantsForm({ shopifyProduct }: VariantFormProps) {
  //console.log(shopifyProduct)
  const { searchParams, setSearchParam } = useQueryString()
  const [colorsOpen, setColorsOpen] = useState(false)

  const variantId = searchParams.get('variant') ?? null
  const defaultVariant = shopifyProduct?.variants.edges[0].node as ProductVariant
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGID(node.id) === variantId)?.node as ProductVariant ?? defaultVariant
  const availableSizes = availableVariants(shopifyProduct as Product, 'Color', variant?.selectedOptions.find(opt => opt.name === 'Color')?.value)
  const availableColors = availableVariants(shopifyProduct as Product, 'Size', variant?.selectedOptions.find(opt => opt.name === 'Size')?.value)

  const handleVariantChange = (value: Key) => setSearchParam('variant', value.toString())

  return (
    <form className={s.form}>
      <fieldset>
        <Select
          key={variantId}
          className={s.colors}
          onSelectionChange={handleVariantChange}
          onOpenChange={(o) => setColorsOpen(o)}
        >
          <Text slot="description" className={s.description}>Color</Text>
          <Button className={s.button}>
            <SelectValue className={s.value} key={variantId}>
              {variant?.selectedOptions.find(opt => opt.name === 'Color')?.value}
            </SelectValue>
            <span aria-hidden="true" className={s.arrow}>{!colorsOpen ? '▼' : '▲'}</span>
          </Button>
          <Popover placement="top left" className={s.colorsPopover}>
            <ListBox
              className={s.options}
              items={availableColors.map((v, idx) => ({
                id: parseGID(v.id),
                name: v.selectedOptions.find(opt => opt.name === 'Color')?.value
              }))}
            >
              {availableColors.map((v, idx) => {
                const option = v.selectedOptions.find(opt => opt.name === 'Color')
                if (!option) return null
                return (
                  <ListBoxItem
                    id={parseGID(v.id)}
                    key={idx}
                    className={cn(s.option)}
                  >{option?.value}</ListBoxItem>
                )
              })}
            </ListBox>
          </Popover>
        </Select>
      </fieldset>

      <fieldset>
        <RadioGroup onChange={handleVariantChange} className={s.sizes} key={variantId}>
          <Text slot="description" className={s.description}>Size</Text>
          {availableSizes.map((v, idx) => {
            const option = v.selectedOptions.find(opt => opt.name === 'Size')
            const selected = variant?.selectedOptions.find(opt => opt.name === 'Size' && option?.value === opt.value) ? true : false

            return (
              <React.Fragment key={idx}>
                <Radio
                  id={parseGID(v.id)}
                  value={parseGID(v.id)}
                  className={cn(s.radio, selected && s.selected)}
                >
                  <Label className={s.label}>{option?.value}</Label>
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

const availableVariants = (product: Product, name: string | undefined, value: string | undefined): ProductVariant[] => {
  if (!name || !value) return product.variants.edges.map(({ node }) => node)

  return product.variants.edges.filter(({ node: { selectedOptions } }) => {
    return selectedOptions.find(opt => opt.name === name && opt.value === value) !== undefined
  }).map(({ node }) => node)

}