import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' ||
    path === '/signup' ||
    path === '/getstarted/step1' ||
    path === '/getstarted/step2' ||
    path === '/getstarted/step3' ||
    path === '/getstarted/payment' ||
    path === '/loginHelp' ||
    path === '/';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token !== '') {
    return NextResponse.redirect(new URL('/home', request.nextUrl));
  }

  if (!isPublicPath && token === '') {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/loginHelp',
    '/getstarted/step1',
    '/getstarted/step2',
    '/getstarted/step3',
    '/getstarted/payment',
    '/home',
  ],
};
