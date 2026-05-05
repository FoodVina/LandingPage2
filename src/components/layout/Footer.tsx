"use client"

import React from 'react';
import { Mail, Phone, MapPin, } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useT } from '@/i18n/I18nProvider';

export function Footer() {
    const t = useT();
    return (
        <footer className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mb-16">
                    {/* Logo and description */}
                    <div className="md:col-span-1 lg:col-span-2 flex flex-col space-y-6">
                        <Link href="/" className="text-xl font-bold text-gray-400">
                            <Image src={"/logo.svg"} alt="Logo" width={120} height={40} />
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            {t("footer.description", "common")}
                        </p>

                        {/* Social icons */}
                        <div className="flex space-x-4">
                            <a href="#" >
                                <Button variant={"ghost"} size={"icon"} className="p-0">
                                    {/* <Facebook size={20} /> */}
                                </Button>
                            </a>
                            <a href="#" >
                                <Button variant={"ghost"} size={"icon"} className="p-0">
                                    {/* <Instagram size={20} /> */}
                                </Button>
                            </a>
                            <a href="#" >
                                <Button variant={"ghost"} size={"icon"} className="p-0">
                                    {/* <Twitter size={20} /> */}
                                </Button>
                            </a>
                            <a href="#" >
                                <Button variant={"ghost"} size={"icon"} className="p-0">
                                    {/* <Youtube size={20} /> */}
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Services column */}
                    <div className='mb-6 md:mb-0'>
                        <h3 className="font-bold text-black mb-4">
                            {t("footer.service.title", "common")}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.service.item1", "common")}                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.service.item2", "common")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.service.item3", "common")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.service.item4", "common")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support column */}
                    <div className='mb-6 md:mb-0'>
                        <h3 className="font-semibold text-black mb-4">
                            {t("footer.support.title", "common")}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.support.item1", "common")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.support.item2", "common")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.support.item3", "common")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.support.item4", "common")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div className='mb-6 md:mb-0'>
                        <h3 className="font-semibold text-black mb-4">
                            {t("footer.contact.title", "common")}
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-gray-500" />
                                <a href="mailto:support@sofarsogood.ai" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.contact.item1", "common")}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-gray-500" />
                                <a href="tel:+82-2-1234-5678" className="text-gray-600 hover:text-black transition-colors text-sm">
                                    {t("footer.contact.item2", "common")}
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin size={16} className="text-gray-500 mt-0.5" />
                                <span className="text-gray-600 text-sm">
                                    {t("footer.contact.item3", "common")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} {t("footer.bottom.item1", "common")}
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                                {t("footer.bottom.item2", "common")}
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                                {t("footer.bottom.item3", "common")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

