import '@/styles/index.scss';
import Script from 'next/script';
import NavBar from '@/components/nav/NavBar';
import Footer from '@/components/nav/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsForMenuDocument, GlobalDocument, GeneralDocument } from '@/graphql';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { buildMenu } from '@/lib/menu';
import shopifyQuery from '@/shopify/shopify-query';
import { LocalizationDocument } from '@/shopify/graphql';
import * as Sentry from '@sentry/nextjs';
import type { Metadata } from 'next';

export type LayoutProps = {
	children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
	const [menu, { localization }, { allProducts }, { general }] = await Promise.all([
		buildMenu(),
		shopifyQuery(LocalizationDocument, {
			variables: { language: 'EN' as LanguageCode },
			country: 'US',
		}),
		apiQuery(AllProductsForMenuDocument, {
			all: true,
			tags: [
				'product',
				'collection',
				'product_color',
				'product_link',
				'product_media_model',
				'product_meta_info',
				'product_meta_type',
				'product_usp',
			],
		}),
		apiQuery(GeneralDocument, {
			tags: ['general', 'product_branding'],
		}),
	]);

	const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
	const randomClaim = general?.claims.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))[0].text;

	return (
		<>
			<html lang='en'>
				<body id='root'>
					<NavBar menu={menu} localization={localization} tipProduct={randomProduct} />
					<main>{children}</main>
					<Footer menu={menu} localization={localization} general={general} randomClaim={randomClaim} />
					<CookieConsent />
					<Script src='https://ac.onthemapmarketing.com/widget/3b24ef8d-6704-4361-886d-da817089839e/autoload.js' />
				</body>
			</html>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const {
		site: { globalSeo, faviconMetaTags },
	} = await apiQuery(GlobalDocument, {
		variables: {},
		revalidate: 60 * 60,
		tags: ['site'],
	});

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		title: {
			template: `${globalSeo?.siteName} — %s`,
			default: globalSeo?.siteName,
		},
		description: globalSeo?.fallbackSeo?.description,
		image: globalSeo?.fallbackSeo?.image?.url,
		icons: faviconMetaTags.map(({ attributes: { rel, sizes, type, href: url } }) => ({
			rel,
			url,
			sizes,
			type,
		})) as Icon[],
		openGraph: {
			title: globalSeo?.siteName,
			description: globalSeo?.fallbackSeo?.description,
			url: process.env.NEXT_PUBLIC_SITE_URL,
			siteName: globalSeo?.siteName,
			images: [
				{
					url: `${globalSeo?.fallbackSeo?.image?.url}?w=1200&h=630&fit=fill&q=80`,
					width: 800,
					height: 600,
					alt: globalSeo?.siteName,
				},
				{
					url: `${globalSeo?.fallbackSeo?.image?.url}?w=1600&h=800&fit=fill&q=80`,
					width: 1600,
					height: 800,
					alt: globalSeo?.siteName,
				},
				{
					url: `${globalSeo?.fallbackSeo?.image?.url}?w=790&h=627&fit=crop&q=80`,
					width: 790,
					height: 627,
					alt: globalSeo?.siteName,
				},
			],
			locale: 'en_US',
			type: 'website',
		},
		other: {
			...Sentry.getTraceData(),
		},
	} as Metadata;
}
