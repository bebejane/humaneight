import page from '@/app/contact/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateMetadata } from '@/app/contact/page';

export type CountryContactParams = CountryParams & { params: Promise<{ about: string }> };

export default async (params: CountryContactParams) => page(params);
