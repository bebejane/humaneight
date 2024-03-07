'use server'

import s from './page.module.scss'
import cn from 'classnames';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { AllProductsDocument, FeedbackDocument, ProductByIdDocument, ShopifyProductDataDocument } from '@graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { CountryParams } from '@app/[country]/layout';
import { CountryProductParams } from '@app/[country]/products/[product]/page';
import { ShopifyProductDocument } from '@shopify/graphql';
import { render as structuredToText } from 'datocms-structured-text-to-plain-text';

import shopifyQuery from '@shopify/shopify-query';

import ProductInfo from './components/ProductInfo';
import ProductMeta from './components/ProductMeta';
import ProductPresentation from './components/ProductPresentation';
import RelatedProducts from '@app/products/[product]/components/RelatedProducts';
import FeedbackForm from '@components/forms/FeedbackForm';
import ProductVariantsForm from './components/ProductVariantsForm';
import { Suspense } from 'react';

export default async function Product({ params }: CountryProductParams) {

  const { shopifyProduct: shopifyProductData } = await apiQuery<ShopifyProductDataQuery, ShopifyProductDataQueryVariables>(ShopifyProductDataDocument, {
    variables: { handle: params.product },
    tags: ['product', 'shopify_product']
  })

  if (!shopifyProductData)
    return notFound();

  const [
    { product, draftUrl },
    { feedback },
    { product: shopifyProduct },

  ] = await Promise.all([
    apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, {
      variables: { id: shopifyProductData.id },
      tags: ['product', 'shopify_product', 'collection', 'product_color', 'product_link', 'product_media_model', 'product_meta_info', 'product_meta_type', 'product_usp']
    }),
    apiQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument),
    shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
      variables: { handle: params.product },
      country: params.country,
      tags: ['product', 'shopify_product']
    })])

  if (!product || !shopifyProduct)
    return notFound();

  const productJsonLd = generateLDJson(product, shopifyProduct);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Suspense>
        <section id="product" className={cn(s.product, "grid")}>
          <ProductPresentation product={product} shopifyProduct={shopifyProduct} />
          <ProductInfo product={product} shopifyProduct={shopifyProduct} />
          <ProductMeta product={product} />
        </section>
        <ProductVariantsForm product={product} shopifyProduct={shopifyProduct} mobile={true} />
        <RelatedProducts product={product} />
        <FeedbackForm feedback={feedback} />
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

export async function generateMetadata({ params }: CountryProductParams) {

  const { shopifyProduct: shopifyProductData } = await apiQuery<ShopifyProductDataQuery, ShopifyProductDataQueryVariables>(ShopifyProductDataDocument, {
    variables: { handle: params.product },
  })

  if (!shopifyProductData)
    return {};

  const [
    { product },
  ] = await Promise.all([
    apiQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, {
      variables: { id: shopifyProductData.id }
    }),
  ])

  if (!product) return {};

  return {
    title: product?.title,
    //@ts-ignore
    description: structuredToText(product.description),
  } as Metadata
}

const generateLDJson = (product: ProductByIdQuery['product'], shopifyProduct: ShopifyProductQuery['product']): any => {

  if (!product || !shopifyProduct) return {};

  const availableForSale = shopifyProduct.variants.edges.some(({ node }) => node.availableForSale);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image?.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: shopifyProduct.variants.edges[0]?.node.price.currencyCode,
      highPrice: shopifyProduct.variants.edges[0]?.node.price.amount,
      lowPrice: shopifyProduct.variants.edges[0]?.node.price.amount
    }
  }
}