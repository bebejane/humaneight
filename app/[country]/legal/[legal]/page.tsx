import page from '@/app/legal/[legal]/page';
import { CountryParams } from '@/app/[country]/layout';
export { generateStaticParams, generateMetadata } from '@/app/legal/[legal]/page';

export type CountryAboutParams = CountryParams & { params: { legal: string } };

export default async (params: CountryAboutParams) => page(params);
