import { NextRequest, NextResponse } from "next/server";
import { defaultCountry } from "./lib/constants";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const acceptLanguage = request.headers.get('accept-language')

  console.log(request.geo?.country)

  if (pathname === '/') {
    const country = acceptLanguage?.split(',')[0].split('-')[1]?.toLowerCase()

    if (country !== defaultCountry.toLowerCase()) {
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