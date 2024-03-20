import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup';

  const token = request.cookies.get('token')?.value || '';

  // Check if the token exists before decoding
  if (token) {
    // Decode token manually
    let decodedToken;
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payload = Buffer.from(tokenParts[1], 'base64').toString('utf-8');
      try {
        decodedToken = JSON.parse(payload);
        console.log('Decoded token:', decodedToken);

        // Check if the role is Mentee and if the path matches an admin, mentor, or class teacher route
        if (decodedToken.role === 'Mentee' && isProtectedRoute(path)) {
          console.log('Mentee trying to access protected route');
          return NextResponse.redirect(new URL('/', request.nextUrl));
        }

        // Check if the role is Mentor or Class Teacher and if the path matches an admin route
        if ((decodedToken.role === 'Mentor' || decodedToken.role === 'Class Teacher') && isAdminRoute(path)) {
          console.log('Mentor or Class Teacher trying to access admin route');
          return NextResponse.redirect(new URL('/', request.nextUrl));
        }
      } catch (error:any) {
        console.error('Error decoding token:', error.message);
        // Handle token decoding error
      }
    } else {
      console.error('Invalid token format');
      // Handle invalid token format
    }
  } else {
    console.log('Token not found');
    // Handle case where token is not found
  }

  // If the user is authenticated and accessing the login or signup pages,
  // redirect them to the '/' path
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // If the user is not logged in and trying to access protected pages,
  // redirect them to the login page
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

function isProtectedRoute(path: string): boolean {
  return (
    isAdminRoute(path) ||
    isMentorRoute(path) ||
    isClassTeacherRoute(path)
  );
}

function isAdminRoute(path: string): boolean {
  return (
    path.startsWith('/add') ||
    path.startsWith('/adminprofile') ||
    path.startsWith('/menteelist')
    // Add other admin routes as needed
  );
}

function isMentorRoute(path: string): boolean {
  return path.startsWith('/mybatch');
  // Add other mentor routes as needed
}

function isClassTeacherRoute(path: string): boolean {
  return path.startsWith('/classList');
  // Add other class teacher routes as needed
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/signup',
    '/personalProfile/:path*',
    '/add/:path*',
    '/adminprofile/:path*',
    '/menteelist/:path*',
    '/mybatch/:path*',
    '/classList/:path*'
    // Add other protected routes as needed
  ],
};
