import { LocalizationDocument } from '@shopify/graphql';
import shopifyQuery from '@shopify/shopify-query';

export const getShopifyId = (id: string): number => {
	const shopifyId = Buffer.from(id).toString('base64') as string;
	return shopifyId.includes('/') ? parseInt(shopifyId.split('/').pop()?.split('?')[0] as string) : parseInt(shopifyId);
};

export const parseGid = (id: string): string => {
	return parseInt(id.split('/').pop()?.split('?')[0] as string).toString();
};

export const shopifyGraphqlError = (errors: CustomerUserError[]): string | undefined => {
	if (!errors || !errors.length) return undefined;
	return errors.map((e) => e.message).join('\n');
};

export const cartCookieOptions = {
	path: '/',
	secure: false,
	maxAge: 60 * 60 * 24,
	sameSite: true,
	domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'humaneight.com',
};

export const isValidCountry = async (country: string): Promise<boolean> => {
	const { localization } = await shopifyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, {
		variables: { language: 'EN' as LanguageCode },
		country: 'US',
	});
	return localization.availableCountries.find(({ isoCode }) => isoCode === country) !== undefined;
};
