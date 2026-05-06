import { ReactNode } from "react";
import { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { getMessages } from "@/i18n/getMessages";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedNavbar } from "@/components/ui/animated-navbar";

const notoSerif = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

// Config font Be Vietnam Pro
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "Your Website Name",
    template: "%s | Your Website Name",
  },
  description: "Mô tả website của bạn",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(
      locales.map(locale => [locale, `/${locale}`])
    ),
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    title: "Your Website Name",
    description: "Mô tả website của bạn",
    siteName: "Your Website Name",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Website Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Website Name",
    description: "Mô tả website của bạn",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

// Tự động generate static params từ config
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function MainLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params
  const { locale } = await params;

  // Validate locale và fallback về default nếu không hợp lệ
  const validLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  // Load namespaced messages for locale 
  const messages = await getMessages(validLocale, [
    'common',
    'home',
    'about'
  ]);

  return (
    <html
      lang={validLocale}
      className={`${beVietnamPro.variable} ${notoSerif.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect để tăng tốc độ load font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Viewport meta tag for responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`
                    ${beVietnamPro.className}
                    font-sans
                    antialiased
                    selection:bg-blue-100
                    selection:text-blue-900
                `}
        suppressHydrationWarning
      >
        {/* Skip to main content cho accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Bỏ qua nội dung chính
        </a>

        <I18nProvider locale={validLocale} messages={messages}>
          <main id="main-content" className="flex flex-col min-h-screen w-full bg-background">
            {/* <Header /> */}
            <div className="flex-1">
              {children}
            </div>
            <AnimatedNavbar />
            <Footer />
          </main>
        </I18nProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='dark'||(!('theme' in localStorage)&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(_){}`,
          }}
        />
      </body>
    </html>
  );
}