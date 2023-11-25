import page from '@app/shop/page';
import { CountryParams } from '@app/[country]/layout';

export type CountryShopParams = CountryParams & { params: { collection: string | undefined } };
export default async (params: CountryShopParams) => page(params);