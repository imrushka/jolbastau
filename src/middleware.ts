import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/auth.config";

const ROLE_SECTION: Record<string, string> = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
  SALES: "sales",
};

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  if (!nextUrl.pathname.startsWith("/dashboard")) return NextResponse.next();

  if (!isLoggedIn) {
    const loginUrl = new URL("/login", nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  const role = req.auth?.user?.role ?? "";
  const section = ROLE_SECTION[role];
  if (section && !nextUrl.pathname.startsWith(`/dashboard/${section}`)) {
    return NextResponse.redirect(new URL(`/dashboard/${section}`, nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
