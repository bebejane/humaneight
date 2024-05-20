export { generateStaticParams } from '@app/shop/[collection]/page';
import page from '@app/shop/[collection]/page';
import { CountryShopParams } from '../../page';
export default async (params: CountryShopParams) => page(params);