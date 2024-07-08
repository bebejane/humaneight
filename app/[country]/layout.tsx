import shopifyQuery from '@shopify/shopify-query';
import { LocalizationDocument } from '@shopify/graphql';

export type CountryParams = { params: { country: string }, searchParams: any } | undefined

export type LayoutProps = {
  children: React.ReactNode
}

export const dynamic = 'force-static'
// export const dynamicParams = false;

export async function generateStaticParams() {
  const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
    variables: { language: 'EN' as LanguageCode },
    country: 'US'
  })
  return localization.availableCountries.map((country) => ({ country: country.isoCode.toLowerCase() }))
}

export default async function CountryLayout({ children }: LayoutProps) {
  return <>{children}</>
}