import homePage from '../page'
import shopifyQuery from '@lib/shopify/shopify-query';
import { LocalizationDocument } from '@lib/shopify/graphql';

export type Params = { params: { country: string } }

export async function generateStaticParams() {
  const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument)
  return localization.availableCountries.map((country) => ({ country: country.isoCode }))
}

export default async function Home(params: Params) { return homePage(params) }