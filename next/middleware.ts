import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set a new response header to test set header
  response.headers.set('X-test-header', 'hello');

  return response;
}

export const config = {
  matcher: ['/api/:path*'],
};
