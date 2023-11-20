'use server'

import s from './page.module.scss'
import { notFound } from 'next/navigation';
import { AllProductsDocument, ProductDocument } from '@graphql';
import { DraftMode, apiQuery } from 'next-dato-utils';

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

  const { product, draftUrl } = await apiQuery<ProductQuery, ProductQueryVariables>(ProductDocument, { variables: { slug: params.product } });

  if (!product)
    return notFound();

  return (
    <>
      <div className={s.container}>
        <h1>{product.title}</h1>
      </div>
    </>
  )
}