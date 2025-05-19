// import { NextResponse } from "next/server";

import { auth } from "./app/_lib/auth"

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/api/auth/signin", request.url));
// }

export const middleware = auth;

export const config = {
  matcher: ["/account"]
}