import { apiQuery } from 'next-dato-utils/api';
import { ProductByIdDocument, SitemapDocument } from '@/graphql';
import { DatoCmsConfig, getUploadReferenceRoutes, getItemReferenceRoutes } from 'next-dato-utils/config';
import { MetadataRoute } from 'next';
import { getLocalization } from '@/shopify/utils';
import { tags } from '@/lib/constants';

export default {
	routes: {
		start: async () => ['/'],
		general: async () => ['/'],
		faq: async () => ['/faq'],
		faq_section: async () => ['/faq'],
		product: async ({ id }) => {
			const { product } = await apiQuery(ProductByIdDocument, { variables: { id } });
			return [`/products/${product?.shopifyProduct.handle}`];
		},
		shopify_product: async () => ['/products'],
		collection: async () => ['/shop'],
		about: async () => ['/about'],
		contact: async () => ['/contact'],
		feedback: async () => ['/contact'],
		legal: async ({ slug }) => [`/legal/${slug}`],
		site: async () => ['/'],
		upload: async ({ id }) => getUploadReferenceRoutes(id),
	},
	sitemap: async () => {
		const { country, availableCountries } = await getLocalization();

		function generateAlternates(path: string): { languages: any } {
			const languages: any = {};

			availableCountries
				.filter(({ isoCode }) => isoCode !== country.isoCode)
				.forEach((c) => {
					languages[`en-${c.isoCode}`] = `${process.env.NEXT_PUBLIC_SITE_URL}/${c.isoCode.toLowerCase()}${path}`;
				});
			return { languages };
		}

		const { allProducts, allAbouts, allCollections, allLegals } = await apiQuery(SitemapDocument, {
			all: true,
			tags: ['product', 'about', 'legal', 'collection', 'shopify_product'],
		});

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
			},
		];

		const productRoutes = allProducts.map(({ shopifyProduct }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${shopifyProduct.handle}`,
			alternates: generateAlternates(`/products/${shopifyProduct.handle}`),
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		}));

		const collectionRoutes = allCollections.map(({ slug }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop/${slug}`,
			alternates: generateAlternates(`/shop/${slug}`),
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		}));

		const collectionTagRoutes = allCollections
			.map(({ slug }) =>
				tags
					.map((tag) => ({
						url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop/${slug}/${tag}`,
						alternates: generateAlternates(`/shop/${slug}/${tag}`),
						lastModified: new Date(),
						changeFrequency: 'daily',
						priority: 1,
					}))
					.flat()
			)
			.flat();

		const legalRoutes = allLegals.map(({ slug }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/legal/${slug}`,
			alternates: generateAlternates(`/legal/${slug}`),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		}));

		const aboutRoutes = allAbouts.map(({ slug }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/about/${slug}`,
			alternates: generateAlternates(`/about/${slug}`),
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		}));

		return [
			...staticRoutes,
			...productRoutes,
			...collectionRoutes,
			...collectionTagRoutes,
			...legalRoutes,
			...aboutRoutes,
		] as MetadataRoute.Sitemap;
	},
	manifest: async () => {
		return {
			name: 'Humaneight',
			short_name: 'Humaneight',
			description: 'Humaneight website',
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#f6f3ee',
			icons: [
				{
					src: '/favicon.ico',
					sizes: 'any',
					type: 'image/x-icon',
				},
			],
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
			},
		};
	},
} satisfies DatoCmsConfig;
