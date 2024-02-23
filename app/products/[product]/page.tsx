'use server'

import s from './page.module.scss'
import cn from 'classnames';
import { notFound } from 'next/navigation';
import { AllProductsDocument, FeedbackDocument, ProductByIdDocument, ShopifyProductDataDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { CountryParams } from '@app/[country]/layout';
import { CountryProductParams } from '@app/[country]/products/[product]/page';
import { ShopifyProductDocument } from '@shopify/graphql';
import shopifyQuery from '@shopify/shopify-query';

import ProductInfo from './components/ProductInfo';
import ProductMeta from './components/ProductMeta';
import ProductPresentation from './components/ProductPresentation';
import RelatedProducts from '@app/products/[product]/components/RelatedProducts';
import Feedback from '@components/common/Feedback';
import ProductVariantsForm from './components/ProductVariantsForm';
import { Suspense } from 'react';

export default async function Product({ params }: CountryProductParams) {

  const { shopifyProduct: shopifyProductData } = await apiQuery<ShopifyProductDataQuery, ShopifyProductDataQueryVariables>(ShopifyProductDataDocument, {
    variables: { handle: params.product },
  })

  if (!shopifyProductData)
    return notFound();

  const [
    { product, draftUrl },
    { feedback },
    { product: shopifyProduct },

  ] = await Promise.all([
    apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, {
      variables: { id: shopifyProductData.id }
    }),
    apiQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument),
    shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
      variables: { handle: params.product },
      country: params.country
    })])

  if (!product || !shopifyProduct)
    return notFound();

  return (
    <>
      <Suspense>
        <section id="product" className={cn(s.product, "grid")}>
          <ProductInfo product={product} shopifyProduct={shopifyProduct} />
          <ProductPresentation product={product} shopifyProduct={shopifyProduct} />
          <ProductMeta product={product} />
        </section>
        <ProductVariantsForm product={product} shopifyProduct={shopifyProduct} mobile={true} />
        <RelatedProducts product={product} />
        <Feedback feedback={feedback} />
      </Suspense>
      <DraftMode url={draftUrl} tag={product.id} />
    </>
  )
}

export async function generateStaticParams(params: CountryParams) {

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
    all: true,
    tags: ['product']
  });

  return allProducts.map(({ shopifyProduct }) => ({
    product: shopifyProduct?.handle,
    country: params?.params?.country
  }))
}
