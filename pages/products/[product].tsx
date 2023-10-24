import s from './[product].module.scss'
import { GetStaticProps } from 'next/types'
import { AllProductsDocument, ProductDocument } from '/graphql'
import { ShopifyProductDocument } from '@shopify/graphql'
import { useCart } from '@shopify/index'
import { shopifyQuery } from '@shopify/graphql-client'
import { apiQuery } from 'dato-nextjs-utils/api'
import { Image } from 'react-datocms';
import withGlobalProps from '/lib/withGlobalProps'

type Props = {
  product: ProductRecord
  shopifyProduct: Product
}

export default function Product({ product: { id, title, handle, image, shopifyData }, shopifyProduct }: Props) {
  console.log(shopifyData)
  const [addToCart] = useCart((state) => [state.addToCart])

  return (
    <div className={s.container}>
      <h1>{title}</h1>

      {image && <Image data={image.responsiveImage} className={s.image} />}
      <h2>Variants</h2>
      {shopifyProduct.variants?.edges.map(({ node: { id, title, price } }) => (
        <div key={id}>
          {title} - {price.amount}{price.currencyCode}
          <button onClick={() => addToCart([{ merchandiseId: id, quantity: 1 }])}>Add</button>
        </div>
      ))
      }

    </div >
  )
}

export const getStaticPaths = async () => {
  const { products }: { products: ProductRecord[] } = await apiQuery(AllProductsDocument, { variables: { first: 100 } })

  const paths = products.map((product) => ({
    params: {
      product: product.handle
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = withGlobalProps({ queries: [] }, async ({ props, context, revalidate }: any) => {

  const handle = context.params?.product
  const preview = context.preview ? true : false
  const { product }: { product: ProductRecord } = await apiQuery(ProductDocument, { variables: { handle }, preview })
  const { product: shopifyProduct }: { product: Product } = await shopifyQuery(ShopifyProductDocument, { variables: { handle }, preview })

  if (!product || !shopifyProduct) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...props,
      product,
      shopifyProduct
    },
    revalidate
  }
});