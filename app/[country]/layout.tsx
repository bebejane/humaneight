import shopifyQuery from '@shopify/shopify-query';
import { LocalizationDocument } from '@shopify/graphql';
import { notFound } from 'next/navigation';
import { isValidCountry } from '@shopify/utils';

export type CountryParams = { params: { country: string }; searchParams: any } | undefined;

export type LayoutProps = {
	children: React.ReactNode;
	params: { country: string };
};

export const dynamic = 'force-static';

export async function generateStaticParams() {
	const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
		variables: { language: 'EN' as LanguageCode },
		country: 'US',
	});
	return localization.availableCountries.map((country) => ({ country: country.isoCode.toLowerCase() }));
}

export default async function CountryLayout({ children, params }: LayoutProps) {
	if (!(await isValidCountry(params.country))) return notFound();

	return <>{children}</>;
}
