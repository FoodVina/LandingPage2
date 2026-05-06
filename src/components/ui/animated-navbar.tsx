"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

const PILL_HEIGHT = 58;
const LOGO_SIZE = 58;
const GAP = 12;
const PILL_CLOSED_MD = 425;
const DROPDOWN_RADIUS = 36;
const PADDING = 16;

const SPRING = { type: "spring" as const, stiffness: 180, damping: 26, mass: 1 };
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

// Simple hamburger using flex — avoids absolute positioning issues on Android Chrome
const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative grid size-4 cursor-pointer items-center justify-center">
    <motion.div
      animate={{ y: open ? 0 : "-5px", rotate: open ? 45 : 0 }}
      className="absolute h-0.5 w-full rounded-full bg-current"
    ></motion.div>
    <motion.div
      animate={{ opacity: open ? 0 : 1 }}
      transition={{ duration: 0.1 }}
      className="absolute h-0.5 w-full rounded-full bg-current"
    ></motion.div>
    <motion.div
      animate={{ y: open ? 0 : "5px", rotate: open ? -45 : 0 }}
      className="absolute h-0.5 w-full rounded-full bg-current"
    ></motion.div>
  </div>
);

const PRIMARY_LINKS = [
  { label: "Về chúng tôi", href: "/" },
  { label: "Dịch vụ", href: "/" },
  { label: "Tin tức", href: "/" },
  { label: "Contact", href: "/" },
];

function calcSizes(vw: number) {
  if (vw < 768) {
    const closed = vw - PADDING * 2 - LOGO_SIZE - GAP;
    return { closed, open: vw - PADDING * 2 };
  }
  return { closed: PILL_CLOSED_MD, open: LOGO_SIZE + GAP + PILL_CLOSED_MD };
}

function usePillWidths() {
  const [sizes, setSizes] = useState(() => calcSizes(PILL_CLOSED_MD));

  useEffect(() => {
    const calc = () => setSizes(calcSizes(window.innerWidth));
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return sizes;
}

export const AnimatedNavbar = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const logoControls = useAnimation();
  const navRef = useRef<HTMLDivElement>(null);
  const sizes = usePillWidths();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  const handleLogoHoverStart = () => {
    logoControls.start({
      rotate: 360,
      scale: [1, 0.72, 1],
      transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const handleLogoHoverEnd = () => {
    logoControls.start({
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    });
  };

  return (
    <div
      className={cn("fixed bottom-6 left-0 right-0 z-9999 flex justify-center pointer-events-none", className)}
    >
      <div ref={navRef} className="flex items-end pointer-events-auto">

        {/* ── Logo slot ── */}
        <motion.div
          animate={{ width: open ? 0 : LOGO_SIZE + GAP }}
          initial={{ width: LOGO_SIZE + GAP }}
          transition={SPRING}
          className="shrink-0 overflow-hidden flex items-center"
          style={{ height: LOGO_SIZE }}
        >
          <motion.div
            animate={{ scale: open ? 0.3 : 1, opacity: open ? 0 : 1 }}
            initial={{ scale: 1, opacity: 1 }}
            transition={SPRING}
          >
            <Link href="/" aria-label="Go to homepage">
              <motion.div
                animate={logoControls}
                onHoverStart={handleLogoHoverStart}
                onHoverEnd={handleLogoHoverEnd}
                className="flex items-center justify-center cursor-pointer overflow-hidden"
                style={{ width: LOGO_SIZE, height: LOGO_SIZE, borderRadius: LOGO_SIZE }}
              >
                <Image
                  src="/logo/logo-nav.png"
                  alt="Logo"
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Pill ── */}
        <motion.div
          animate={{ width: open ? sizes.open : sizes.closed }}
          initial={{ width: sizes.closed }}
          transition={SPRING}
          className="relative flex flex-col shrink-0"
          style={{ borderRadius: 9999 }}
        >
          {/* ── Dropdown ── */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, ease: EASE_OUT_QUART }}
                className="absolute bottom-[calc(100%+6px)] left-0 right-0"
                style={{
                  borderRadius: DROPDOWN_RADIUS,
                  background: "rgba(211,255,222,0.4)",
                  backdropFilter: "blur(13px)",
                  WebkitBackdropFilter: "blur(13px)",
                  boxShadow: "0px 0px 4px 0px #FFFFFF inset",
                  transformOrigin: "bottom center",
                }}
              >
                <div className="p-9 flex flex-col gap-6">
                  {PRIMARY_LINKS.map((link, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.3, ease: EASE_OUT_QUART }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex flex-col gap-3 py-2 text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                        {i < PRIMARY_LINKS.length - 1 && (
                          <span className="block h-px w-full bg-[#9CA3AF]" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Pill bar — plain div, no motion to avoid touch issues ── */}
          <div
            className="flex items-center justify-between pl-4 pr-2 border border-white/20 transition-[background,box-shadow] duration-300"
            style={{
              height: PILL_HEIGHT,
              borderRadius: 9999,
              background: open ? "rgba(211,255,222,0.4)" : "rgba(0,0,0,0.1)",
              boxShadow: open
                ? "0px 0px 4px 0px #FFFFFF inset"
                : "0px 1px 6.2px 0px #FFFFFF80 inset",
              backdropFilter: "blur(13px)",
              WebkitBackdropFilter: "blur(13px)",
            }}
          >
            <button
              onClick={() => setOpen((v) => !v)}
              className="cursor-pointer flex items-center gap-3 text-foreground"
              aria-label="Toggle menu"
            >
              <MenuIcon open={open} />
              <span className="font-medium" style={{ fontSize: 18 }}>Menu</span>
            </button>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground shrink-0"
              style={{ height: 42 }}
            >
              <Image src="/logo/logo-dy-food-white.png" alt="logo" width={130} height={18} />
            </Link>
            {/* <AnimatedThemeToggler className="cursor-pointer" /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
