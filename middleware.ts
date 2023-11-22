import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const country = request.cookies.get('country')?.value ?? 'SE'
  const currency = request.cookies.get('currency')?.value ?? 'SEK'
  request.cookies.set('country', country)
  request.cookies.set('currency', currency)

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/:path*'],
}