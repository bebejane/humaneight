'use server'

import s from './page.module.scss'
import { notFound } from 'next/navigation';
import { AllProductsDocument, ProductDocument } from '@graphql';
import { DraftMode, apiQuery } from 'next-dato-utils';
import ProductPresentation from './components/ProductPresentation';
import cn from 'classnames';
import ProductInfo from '@app/products/[product]/components/ProductInfo';
import { CountryParams } from '@app/[country]/layout';
import { CountryProductParams } from '@app/[country]/products/[product]/page';
import shopifyQuery from '@shopify/shopify-query';
import { ShopifyProductDocument } from '@shopify/graphql';
import ProductMeta from '@app/products/[product]/components/ProductMeta';

export async function generateStaticParams(params: CountryParams) {

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
    all: true,
    tags: ['product'],
  });

  return allProducts.map(({ slug }) => ({
    product: slug,
    country: params?.params?.country
  }))
}

export default async function Product({ params }: CountryProductParams) {

  const { product, draftUrl } = await apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, { variables: { slug: params.product } });
  const { product: shopifyProduct } = await shopifyQuery<ShopifyProductQuery, ShopifyProductQueryVariables>(ShopifyProductDocument, {
    variables: { handle: params.product },
    country: params.country
  });

  if (!product || !shopifyProduct)
    return notFound();

  return (
    <>
      <section className={cn(s.product, "grid")}>
        <ProductInfo product={product} shopifyProduct={shopifyProduct} />
        <ProductPresentation product={product} shopifyProduct={shopifyProduct} />
        <ProductMeta product={product} />
      </section>
      <DraftMode url={draftUrl} tag={product.id} />
    </>
  )
}