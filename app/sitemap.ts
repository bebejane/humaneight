import { MetadataRoute } from 'next'
import { apiQuery } from 'next-dato-utils/api';
import { SitemapDocument } from '@graphql';
import { LocalizationDocument } from '@/shopify/graphql';
import { tags } from '@lib/constants';
import shopifyQuery from '../shopify/shopify-query';

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { allProducts, allAbouts, allCollections, allLegals } = await apiQuery<SitemapQuery, SitemapQueryVariables>(SitemapDocument, {
    all: true,
    variables: {
      first: 100,
      skip: 0
    },
    tags: ['product', 'about', 'legal', 'collection', 'shopify_product']
  });

  const { localization: { country, availableCountries } } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
    variables: { language: 'EN' as LanguageCode },
    country: 'US'
  })

  const generateAlternates = (path: string): { languages: any } => {

    const languages: any = {}

    availableCountries.filter(({ isoCode }) => isoCode !== country.isoCode).forEach(c => {
      languages[`en-${c.isoCode}`] = `${process.env.NEXT_PUBLIC_SITE_URL}/${c.isoCode.toLowerCase()}${path}`
    })
    return { languages }
  }

  const routes = [
    ...staticRoutes,
    ...allProducts.map(({ shopifyProduct }) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${shopifyProduct.handle}`,
      alternates: generateAlternates(`/products/${shopifyProduct.handle}`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1

    })),
    ...allCollections.map(({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop/${slug}`,
      alternates: generateAlternates(`/shop/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })),
    ...allCollections.map(({ slug }) => tags.map(tag => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop/${slug}/${tag}`,
      alternates: generateAlternates(`/shop/${slug}/${tag}`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })).flat()).flat(),
    ...allLegals.map(({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/${slug}`,
      alternates: generateAlternates(`/legal/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })),
    ...allAbouts.map(({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/${slug}`,
      alternates: generateAlternates(`/about/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })),
  ]

  return routes as MetadataRoute.Sitemap
}


