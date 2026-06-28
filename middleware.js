import { NextResponse } from "next/server";

export function middleware(request) {
  const user = request.cookies.get("user")?.value;
  const pathname = request.nextUrl.pathname;

  const publicRoutes = [
    "/login",
    "/signup",
  ];

  const adminRoutes = [
    "/admin",
    "/dashboard",
    "/orders",
    "/users",
    "/settings",
  ];

  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    if (user) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }

    return NextResponse.next();
  }

  // Protect user routes
  if (
    !user &&
    (
      pathname.startsWith("/profile") ||
      pathname.startsWith("/checkout") ||
      pathname.startsWith("/history")
    )
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // Admin routes without login
  if (
    adminRoutes.some((route) =>
      pathname.startsWith(route)
    )
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",

    "/profile/:path*",
    "/checkout/:path*",
    "/history/:path*",

    "/admin/:path*",
    "/dashboard/:path*",
    "/orders/:path*",
    "/users/:path*",
    "/settings/:path*",

    "/india/:path*",
    "/usa/:path*",
    "/singapore/:path*",
    "/indonesia/:path*",
    "/malaysia/:path*",
    "/philippines/:path*",
    "/brazil/:path*",

    "/servers/:path*"
  ],
};
