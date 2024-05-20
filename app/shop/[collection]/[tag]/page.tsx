import { CountryShopParams } from '@app/[country]/shop/page';
import storePage from '../../page'
import { tags } from '@lib/constants';

export const dynamic = 'force-static'

export default async function Collection(params: CountryShopParams) {
  return storePage(params)
}

export async function generateStaticParams() {
  return tags.map(tag => ({ tag }))
}
