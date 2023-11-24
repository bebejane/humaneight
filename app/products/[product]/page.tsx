'use server'

import s from './page.module.scss'
import { notFound } from 'next/navigation';
import { AllProductsDocument, ProductDocument } from '@graphql';
import { DraftMode, apiQuery } from 'next-dato-utils';
import VariantsForm from './components/VariantsForm';
import ProductPresentation from './components/ProductPresentation';
import cn from 'classnames';
import ProductInfo from '@app/products/[product]/components/ProductInfo';

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
      <section className={cn(s.product, "grid")}>
        <div className={s.details}>
          <ProductInfo product={product} />
          <VariantsForm product={product} />
        </div>
        <ProductPresentation product={product} />
      </section>
      <DraftMode url={draftUrl} tag={product.id} />
    </>
  )
}