// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, Locale } from "@/i18n/config";

function getLocale(request: NextRequest): string {
  // 1. Kiểm tra localStorage từ cookie (vì middleware không access được localStorage trực tiếp)
  const savedLocale = request.cookies.get("preferred-locale")?.value;
  if (savedLocale && locales.includes(savedLocale as Locale)) {
    return savedLocale;
  }

  // 2. Fallback to Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return defaultLocale;

  const preferred = acceptLang.split(",")[0].split("-")[0];
  return locales.includes(preferred as Locale) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("🔍 Middleware triggered for:", pathname);

  // Bỏ qua các file static và API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next();
  }

  // Kiểm tra xem pathname đã có locale chưa
  const pathnameHasLocale = locales.some((locale) => {
    return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
  });

  console.log("📍 Has locale:", pathnameHasLocale);

  // Nếu đã có locale thì pass through
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect locale từ localStorage/browser
  const locale = getLocale(request);
  console.log("🌐 Detected locale:", locale);

  // Redirect paths không có locale
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  console.log("🔄 Redirecting to:", redirectUrl.toString());

  const response = NextResponse.redirect(redirectUrl);
  
  // Set cookie nếu chưa có
  if (!request.cookies.get("preferred-locale")) {
    response.cookies.set("preferred-locale", locale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"
  ],
};