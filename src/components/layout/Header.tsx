"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useT, useTString } from "@/i18n/I18nProvider";
import { CircleText } from "../common/CircleText";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import Image from "next/image";
import { Button } from "../ui/button";
import { LogIn, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"


interface NavItem {
    key: string;
    href: string;
}

const navItems: NavItem[] = [
    { key: "home", href: "/" },
    { key: "generator", href: "/generator" },
    { key: "gallery", href: "/gallery" },
    // { key: "shop", href: "/shop" },
    { key: "about", href: "/about" },
    { key: "pricing", href: "/pricing" },
];

export function Header() {
    const t = useTString();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (href: string): boolean => {
        if (href === "/") {
            // Remove locale prefix to check if we're on home page
            const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/";
            return pathWithoutLocale === "/";
        }
        // Check if current path includes the href (for nested routes)
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");
        return pathWithoutLocale.startsWith(href);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        // Force re-render to update active state
        window.location.href = href;
    };

    return (
        <>
            <nav className="bg-background shadow-sm border-b sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-xl font-bold text-gray-400">
                                <Image src={"/logo.svg"} alt="Logo" width={120} height={40} />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    onClick={(e) => {
                                        // Force re-render to update active state
                                        window.location.href = item.href;
                                    }}
                                    className="flex items-center justify-center"
                                >
                                    <CircleText isActive={isActive(item.href)} text={t(`header.${item.key}`, "common")}>
                                    </CircleText>
                                </Link>
                            ))}
                        </div>
                        <AnimatedThemeToggler className="cursor-pointer" defaultTheme="dark" />


                        {/* Desktop Right side - Auth & Language */}
                        <div className="hidden md:flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Link href="/signin">
                                <Button variant={"secondary"} size={"sm"}>
                                    <LogIn />
                                    {t("header.signin", "common")}
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex gap-2">
                            <LanguageSwitcher />

                            <Button
                                variant={"ghost"}
                                size={"sm"}
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Panel */}
            <div className={`
                fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
                ${isMobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-3 border-b">
                        <div></div>
                        <div className="text-lg font-semibold text-gray-900">
                            Menu
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 px-4 py-6 space-y-6">
                        {navItems.map((item) => (
                            <div key={item.key} className="block">
                                <Button
                                    variant={isActive(item.href) ? "link" : "link"}
                                    size={"lg"}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`w-full text-center justify-center ${isActive(item.href) ? "font-bold text-black" : "text-gray-600 hover:text-black"}`}
                                >
                                    {t(`header.${item.key}`, "common")}

                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="p-4 border-t space-y-4">
                        {/* Sign In Button */}
                        <Link
                            href="/signin"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block"
                        >
                            <Button variant={"secondary"} size={"sm"} className="w-full">
                                <LogIn />
                                {t("header.signin", "common")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}