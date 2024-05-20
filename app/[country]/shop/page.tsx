import page from '@app/shop/page';
import { CountryParams } from '@app/[country]/layout';
export { generateMetadata } from '@app/shop/page';

export const dynamic = 'force-static'

export type CountryShopParams = CountryParams & {
  params: {
    collection: string | undefined,
    tag: string | undefined
  }
}
export default async (params: CountryShopParams) => page(params);