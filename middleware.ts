import { NextRequest, NextResponse } from "next/server";
import { defaultCountry } from "./lib/constants";
import localization from './localization.json'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const country = request.geo?.country
    const available = localization.availableCountries.find((c) => c.isoCode.toLowerCase() === country?.toLowerCase()) !== undefined

    if (available && country !== defaultCountry.toLowerCase()) {
      request.nextUrl.pathname = `/${country}`
      return NextResponse.redirect(request.nextUrl)
    }
    else
      return NextResponse.next()
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Optional: Only run on root (/) URL
    '/'
  ],
}