import page from '@app/faq/page';
import { CountryParams } from '@app/[country]/layout'
export default async (params: CountryParams) => page(params);