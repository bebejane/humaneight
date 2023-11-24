'use client'

import useProduct from "@shopify/hooks/useProduct"

export type Props = {
  slug?: string
  variantId?: string
}

export default function Price({ slug, variantId }: Props) {

  const { product } = useProduct({ handle: slug })
  const variant = product?.variants.edges.find(({ node }) => node.id === variantId)?.node as ProductVariant

  //const formatter = new Intl.NumberFormat(country, { style: 'currency', currency, maximumFractionDigits: 0 })
  if (!variant) return null
  return <>{parseFloat(variant.price.amount).toFixed(0)} {variant.price.currencyCode}</>
}