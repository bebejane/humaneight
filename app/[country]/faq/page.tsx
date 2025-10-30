import page from '@/app/faq/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/faq/page';
export default async (params: CountryParams) => page(params);
