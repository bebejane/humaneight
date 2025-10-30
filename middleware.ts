import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';
import { defaultCountry } from './lib/constants';
import { getLocalization } from '@/shopify/utils';

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (pathname === '/') {
		const localization = await getLocalization();
		const geo = geolocation(request);
		const country = geo?.country?.toLowerCase();
		const available = localization.availableCountries.find((c) => c.isoCode.toLowerCase() === country) !== undefined;

		if (available && country !== defaultCountry.toLowerCase()) {
			request.nextUrl.pathname = `/${country}`;
			return NextResponse.redirect(request.nextUrl);
		} else return NextResponse.next();
	}
}

export const config = {
	matcher: ['/'],
};
