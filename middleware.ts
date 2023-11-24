import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const country = request.nextUrl.pathname.split('/')[1].length === 2 ? request.nextUrl.pathname.split('/')[1].toUpperCase() : 'SE'

  !request.cookies.has('country') && request.cookies.set('country', country)

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|static|public|favicon.ico).*)'
}