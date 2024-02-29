import page from '@app/contact/page';
import { CountryParams } from '@app/[country]/layout';

export type CountryContactParams = CountryParams & { params: { about: string; } };

export default async (params: CountryContactParams) => page(params);
