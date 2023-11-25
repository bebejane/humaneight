import page from '@app/about/[about]/page';
import { CountryParams } from '@app/[country]/layout';
export { generateStaticParams } from '@app/about/[about]/page';

export type CountryAboutParams = CountryParams & { params: { about: string; } };

export default async (params: CountryAboutParams) => page(params);
