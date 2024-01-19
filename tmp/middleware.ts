import { NextRequest, NextResponse } from "next/server"
import Localization from './localization.json'

const locales = Localization.availableCountries.map((country) => country.isoCode.toLowerCase())

function getLocale(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locale = locales.find((locale) => pathname.startsWith(`/${locale}`))
  return locale || 'se'
}

export function middleware(request: NextRequest) {
  return NextResponse.next()
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale)
    return NextResponse.next()

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)', '/']
}