"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AnimatedNavbar } from "@/components/ui/animated-navbar";
import { useT } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeSection } from "@/components/sections/HomeSection";

export default function HomePage() {
  const t = useT();

  return (
    <div>
      <div className="w-full">
        <HomeSection />
      </div>
      <AnimatedNavbar />
    </div>
  );
}