import shopifyQuery from '@/shopify/shopify-query';
import { LocalizationDocument } from '@/shopify/graphql';
import { notFound } from 'next/navigation';
import { isValidCountry } from '@/shopify/utils';

export type CountryParams = { params: Promise<{ country: string }>; searchParams: Promise<any> } | undefined;

export type LayoutProps = {
	children: React.ReactNode;
	params: Promise<{ country: string }>;
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
	const { localization } = await shopifyQuery(LocalizationDocument, {
		variables: { language: 'EN' as LanguageCode },
		country: 'US',
	});
	return localization.availableCountries.map((country) => ({ country: country.isoCode.toLowerCase() }));
}

export default async function CountryLayout({ children, params }: LayoutProps) {
	const { country } = await params;
	if (!(await isValidCountry(country))) return notFound();

	return <>{children}</>;
}
