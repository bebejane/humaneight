import { GetStaticProps } from 'next/types'
import { AllProductsDocument, } from '/graphql'
import { apiQuery } from 'dato-nextjs-utils/api'
import Link from 'next/link'
import s from './index.module.scss'

type Props = {
  products: ProductRecord[]
}

export default function Home({ products }: Props) {

  return (
    <div className={s.container}>
      <main className={s.main}>
        <Link href="/collections"><h2>Collections</h2></Link>
        <h1>Products</h1>
        {products?.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.handle}`}><h2>{product.title}</h2></Link>
          </div>
        ))}

      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const { products }: { products: ProductRecord[] } = await apiQuery(AllProductsDocument, { variables: { first: 100 } })

  return {
    props: {
      products
    }
  }
}