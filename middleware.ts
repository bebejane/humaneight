import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  let currency = request.cookies.get('country')?.value ?? 'SE'
  request.cookies.set('country', currency)
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/:path*'],
}