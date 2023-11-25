import { ShopifyProductDocument } from "./graphql"
import shopifyQuery from "./shopify-query"
import { PartialObjectDeep } from "type-fest/source/partial-deep";
import type { Product } from '@shopify/hydrogen-react/storefront-api-types';

export type ShopifyProduct = PartialObjectDeep<Product, { recurseIntoArrays: true; }>
export { Product }

export const fetchShopifyProducts = async (products: ProductRecord[], country: CountryCode): Promise<Product[]> => {
  const shopifyProducts = await Promise.all(products
    .map(({ slug }) => shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
      variables: { handle: slug },
      country
    })))

  return shopifyProducts.map(({ product }) => product) as Product[]
}

export const fetchShopifyProduct = async (product: ProductRecord, country: CountryCode): Promise<Product> => {
  const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
    variables: { handle: product.slug },
    country
  })

  return shopifyProduct as Product
}