'use client'

import useCountry from '@lib/shopify/hooks/useCountry';
import { ShopifyProvider } from '@shopify/hydrogen-react';

export type Props = {
  children: React.ReactNode | React.ReactNode[],
}

export default function StoreProvider({ children }: Props) {

  const country = useCountry()

  return (
    <ShopifyProvider
      storeDomain={process.env.NEXT_PUBLIC_SHOPIFY_STORE}
      storefrontToken={process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN}
      storefrontApiVersion={process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}
      countryIsoCode={country as CountryCode}
      languageIsoCode={country as unknown as LanguageCode}
    >
      {children}
    </ShopifyProvider>
  )
}
