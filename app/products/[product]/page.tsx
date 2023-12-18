'use server'

import s from './page.module.scss'
import cn from 'classnames';
import { notFound } from 'next/navigation';
import { AllProductsDocument, ProductDocument } from '@graphql';
import { DraftMode, apiQuery } from 'next-dato-utils';
import { CountryParams } from '@app/[country]/layout';
import { CountryProductParams } from '@app/[country]/products/[product]/page';
import { ShopifyProductDocument } from '@shopify/graphql';
import shopifyQuery from '@shopify/shopify-query';

import ProductInfo from './components/ProductInfo';
import ProductMeta from './components/ProductMeta';
import ProductPresentation from './components/ProductPresentation';
import RelatedProducts from '@app/products/[product]/components/RelatedProducts';
import Feedback from './components/Feedback';
import ProductVariantsForm from './components/ProductVariantsForm';

export async function generateStaticParams(params: CountryParams) {

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
    all: true,
    tags: ['product'],
    generateTags: false,
  });

  return allProducts.map(({ shopifyProduct }) => ({
    product: shopifyProduct?.handle,
    country: params?.params?.country
  }))
}

export default async function Product({ params }: CountryProductParams) {

  const [{ product, draftUrl }, { product: shopifyProduct }] = await Promise.all([
    apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, {
      variables: { slug: params.product },
      maxTags: 10
    }
    ), shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
      variables: { handle: params.product },
      country: params.country
    }
    )])

  if (!product || !shopifyProduct)
    return notFound();

  return (
    <>
      <section id="product" className={cn(s.product, "grid")}>
        <ProductInfo product={product} shopifyProduct={shopifyProduct} />
        <ProductPresentation product={product} shopifyProduct={shopifyProduct} />
        <ProductMeta product={product} />
      </section>
      <ProductVariantsForm product={product} shopifyProduct={shopifyProduct} mobile={true} />
      <RelatedProducts product={product} />
      <Feedback />
      <DraftMode url={draftUrl} tag={product.id} />
    </>
  )
}