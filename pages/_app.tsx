import type { AppProps } from 'next/app'
import Head from 'next/head'
import Cart from '../lib/shopify/components/Cart'
import User from '../lib/shopify/components/User'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cart />
      <User />
      <Head>
        <title>next-dato-shopify</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
