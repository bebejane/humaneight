export { generateStaticParams, generateMetadata } from '@app/products/[product]/page';
import page from '@app/products/[product]/page';
import { CountryParams } from '@app/[country]/layout';
export type CountryProductParams = CountryParams & { params: { product: string; } };

export default async (params: CountryProductParams) => page(params);