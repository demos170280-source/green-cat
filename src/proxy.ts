import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  getPreferredLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";

function getPathLocale(pathname: string): Locale | null {
  const localeSegment = pathname.split("/")[1];
  return isLocale(localeSegment) ? localeSegment : null;
}

export function proxy(request: NextRequest) {
  if (getPathLocale(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|icon|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
