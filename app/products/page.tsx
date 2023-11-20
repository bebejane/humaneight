import s from './page.module.scss'
import Link from "next/link"
import { apiQuery, Markdown, DraftMode } from 'next-dato-utils';
import { Image } from 'react-datocms';
import { AllProductsDocument } from '@graphql';

export default async function Products() {

  const { allProducts } = await apiQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, {
    all: true,
    tags: ['product'],
  });

  return (
    <>
      <h1>Products</h1>
      <ul>
        {allProducts.map((product) =>
          <li key={product.id}>
            <Link href={`/products/${product.slug}`}>
              {product.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}