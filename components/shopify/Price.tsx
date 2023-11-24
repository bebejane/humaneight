'use client'

import useQueryString from "@lib/hooks/useQueryString"
import useProduct from "@shopify/hooks/useProduct"
import { parseGID } from "@shopify/utils"

export type Props = {
  slug: string
  variantId?: string | null | undefined
}

export default function Price({ slug, variantId }: Props) {

  const { product: shopifyProduct, loading } = useProduct({ handle: slug })
  const variant = shopifyProduct?.variants.edges.find(({ node }) => parseGID(node.id) === variantId)?.node as ProductVariant ?? shopifyProduct?.variants.edges[0].node as ProductVariant

  //const formatter = new Intl.NumberFormat(country, { style: 'currency', currency, maximumFractionDigits: 0 })
  if (!variant) return null
  return <>{parseFloat(variant.price.amount).toFixed(0)} {variant.price.currencyCode}</>
}