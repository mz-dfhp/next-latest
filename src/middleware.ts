import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('中间件', request.nextUrl.pathname)
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/blog',
    '/blog/:path*',
    '/counter',
    '/dashboard',
  ],
}
