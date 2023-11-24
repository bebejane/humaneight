'use server'

import s from './page.module.scss'
//import { notFound } from 'next/navigation';
import { AllProductColorsDocument, AllProductsDocument, ProductDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils';
import shopifyQuery from '@shopify/shopify-query';
import { ShopifyProductDocument } from '@shopify/graphql';
import StructuredContent from '@components/layout/StructuredContent';
import VariantsForm from './components/VariantsForm';
import ProductPresentation from './components/ProductPresentation';
import cn from 'classnames';
import Price from '@components/shopify/Price';
import Link from '@components//nav/Link';

export async function generateStaticParams() {
  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
    all: true,
    tags: ['product'],
  });

  return allProducts.map(({ slug }) => ({
    product: slug,
  }))
}

export default async function Product({ params }: { params: { product: string } }) {

  //const { product, draftUrl } = await apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, { variables: { slug: params.product } });
  //const { allProductColors } = await apiQuery<AllProductColorsQuery, AllProductColorsQueryVariables>(AllProductColorsDocument, { all: true });
  const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, { variables: { handle: params.product } });
  const variant = shopifyProduct?.variants?.edges[0]?.node as ProductVariant

  //if (!product)
  //return notFound();

  if (!shopifyProduct)
    return <div>Shopify product not found for slug {params.product}</div>

  return (
    <>
      hej
    </>
  )
}