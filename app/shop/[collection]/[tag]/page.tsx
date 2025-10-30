import { CountryShopParams } from '@/app/[country]/shop/page';
import storePage from '../../page';
import { tags } from '@/lib/constants';

export { generateMetadata } from '../../page';

export const dynamic = 'force-static';
// export const dynamicParams = false

export default async function CollectionByTag(params: CountryShopParams) {
	return storePage(params);
}

export async function generateStaticParams() {
	return tags.map((tag) => ({ tag }));
}
