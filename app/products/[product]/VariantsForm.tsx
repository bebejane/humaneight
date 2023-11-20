'use client'

import useQueryString from '@lib/hooks/useQueryString'
import s from './VariantsForm.module.scss'
import React from 'react'
import AddToCartButton from '@components/AddToCartButton'

export type VariantFormProps = {
  allProductColors: AllProductColorsQuery['allProductColors']
  shopifyProduct: ShopifyProductQuery['product']
}

export default function VariantsForm({ shopifyProduct }: VariantFormProps) {

  console.log(shopifyProduct)

  const { searchParams, setSearchParam } = useQueryString()
  const color = searchParams.get('color')
  const size = searchParams.get('size')
  const variant = findSelectedVariant(shopifyProduct as Product, color, size)

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParam('color', e.target.value)
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam('size', e.target.value)
  }

  return (
    <form className={s.form}>
      <fieldset>
        <legend>Color</legend>
        <div>
          <select name="color" onChange={handleColorChange} value={variant?.selectedOptions.find(opt => opt.name === 'Color')?.value}>
            {shopifyProduct?.options.find(opt => opt.name === 'Color')?.values.map((color, idx) => {
              const isAvailable = shopifyProduct?.variants?.edges.find(variant => variant.node.selectedOptions.find(opt => opt.name === 'Color' && opt.value === color))
              return (
                <option
                  key={color}
                  value={color}
                  disabled={!isAvailable}
                >
                  {color}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Size</legend>
        <div className={s.sizes}>
          {shopifyProduct?.options.find(opt => opt.name === 'Size')?.values.map((s, idx) => {

            const isAvailable = shopifyProduct?.variants?.edges.find(variant => variant.node.selectedOptions.find(opt => opt.name === 'Size' && opt.value === s)) ? true : undefined
            const isSelected = variant?.selectedOptions.find(opt => opt.name === 'Size' && opt.value === s) ? true : false

            return (
              <React.Fragment key={idx}>
                <input
                  id={`size-${idx}`}
                  type="radio"
                  name="size"
                  value={s}
                  defaultChecked={isSelected}
                  disabled={!isAvailable}
                  onChange={handleSizeChange}
                />
                <label htmlFor={`size-${idx}`}>{s}</label>
              </React.Fragment>
            )
          })}
        </div>
      </fieldset>
      <AddToCartButton merchandiseId={variant?.id} quantity={1} />
    </form>
  )
}

const findSelectedVariant = (product: Product, color: string | null, size: string | null): ProductVariant | undefined => {

  return product.variants.edges.find(({ node: { selectedOptions } }) => {
    return selectedOptions.find(opt => opt.name === 'Color' && opt.value === color) && selectedOptions.find(opt => opt.name === 'Size' && opt.value === size)
  })?.node ?? product.variants.edges[0].node
}