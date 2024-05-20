import page from '../page'
import { CountryParams } from '@app/[country]/layout'

export const dynamic = 'force-static'

export default async (params: CountryParams) => page(params);