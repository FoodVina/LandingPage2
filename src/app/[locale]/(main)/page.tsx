"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AnimatedNavbar } from "@/components/ui/animated-navbar";
import { useT } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const t = useT();

  return (
    <div>
      <div className="container mx-auto px-4">
        <HeroSection />
        <Button onClick={()=>
          {
            location.href='https://example.com'
          }
        }>a</Button>
        <Link href="/some-page" className="ml-4">
          Some Page
        </Link>
        <AnimatedThemeToggler className="cursor-pointer" />

      </div>
      <AnimatedNavbar />
    </div>
  );
}