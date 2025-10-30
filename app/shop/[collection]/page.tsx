import { CountryShopParams } from '@/app/[country]/shop/page';
import storePage from '../page';
import { AllCollectionsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { Metadata } from 'next';

export { generateMetadata } from '../page';

export const dynamic = 'force-static';
// export const dynamicParams = false

export default async function Collection(params: CountryShopParams) {
	return storePage(params);
}

export async function generateStaticParams(): Promise<Metadata> {
	const { allCollections } = await apiQuery(AllCollectionsDocument, {
		all: true,

		tags: ['collection'],
	});
	return allCollections.map(({ slug: collection }) => ({ collection }));
}
