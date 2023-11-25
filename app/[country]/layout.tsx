import shopifyQuery from '@shopify/shopify-query';
import { LocalizationDocument } from '@shopify/graphql';

export type CountryParams = { params: { country: string } } | undefined

export type LayoutProps = {
  children: React.ReactNode
}

export async function generateStaticParams() {
  const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument)
  return localization.availableCountries.map((country) => ({ country: country.isoCode }))
}

export default async function CountryLayout({ children }: LayoutProps) {
  return <>{children}</>
}