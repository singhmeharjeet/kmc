"use client";
import { NextAuthMiddlewareOptions, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getServerAuthSession } from "./server/auth";

export const config = {
  matcher: ["/protected/:path*", "/admin"],
};

const middlewareConfig: NextAuthMiddlewareOptions = {
  callbacks: {
    async authorized({ token, req }) {
      // Add role to the token
      if (req.nextUrl.pathname.includes("admin")) {
        return token?.role === "admin";
      }

      return !!token;
    },
  },
};

export default withAuth(middlewareConfig);
