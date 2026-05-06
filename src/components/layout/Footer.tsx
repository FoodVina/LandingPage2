"use client"

import React from 'react';
import { Mail, Phone, MapPin, Earth, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useT } from '@/i18n/I18nProvider';

export function Footer() {
    const t = useT();
    return (
        <footer className='w-full bg-[#001A0C] h-dvh'>
            <div className='container mx-auto px-4 py-30 h-full flex flex-col justify-between'>
                <div className='grid grid-cols-4 gap-12 font-medium text-sm'>
                    <div className='flex flex-col gap-6'>
                        <Image src={`/logo/logo-footer-white.png`} alt='Logo' width={170} height={50} />
                        <p className='text-muted-foreground opacity-60'>
                            FOOD VINA giải quyết mọi vấn đề của suất ăn hiện tại và tạo ra những thành quả đặc biệt khác biệt.
                        </p>
                        <div className='flex gap-4'>
                            <Link href={`/`} className='rounded-full w-8 h-8 border border-[#F4F4F4]/10 flex justify-center items-center'>
                                <Earth className='w-[11px] h-[11px] text-[#F4F4F4]' />
                            </Link>
                            <Link href={`/`} className='rounded-full w-8 h-8 border border-[#F4F4F4]/10 flex justify-center items-center'>
                                <Mail className='w-[11px] h-[11px] text-[#F4F4F4]' />
                            </Link>
                            <Link href={`/`} className='rounded-full w-8 h-8 border border-[#F4F4F4]/10 flex justify-center items-center'>
                                <Phone className='w-[11px] h-[11px] text-[#F4F4F4]' />
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='font-bold'>VỀ CHÚNG TÔI</h2>
                        <div className='flex flex-col gap-4'>
                            <p>Giới thiệu công ty</p>
                            <p>Dịch vụ mà chúng tôi cung cấp</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='font-bold'>DỊCH VỤ</h2>
                        <div className='flex flex-col gap-4'>
                            <p>Dịch vụ suất ăn công nghiệp</p>
                            <p>Dịch vụ canteen</p>
                            <p>Dịch vụ máy bán hàng tự động</p>
                            <p>Cung cấp nguyên liệu thực phẩm</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='font-bold'>THÔNG TIN LIÊN HỆ</h2>
                        <div className='flex flex-col gap-4'>
                            <p>Hữu Bằng, Tam Hợp, Bình Xuyên, Vĩnh Phúc</p>
                            <p>dyfoodvina@gmail.com</p>
                            <p>0211 3535 009</p>
                        </div>
                        <p className='opacity-60'>Liên lạc với chúng tôi để được cung cấp thêm thông tin</p>
                        <div className='flex items-center w-full border-b border-[#F4F4F4]/20 pb-2'>
                            <input
                                type="email"
                                placeholder='Email address'
                                className='flex-1 bg-transparent outline-none focus:outline-none'
                            />
                            <ChevronRight className='text-secondary shrink-0' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full pt-8 border-t border-foreground/10 text-muted-foreground font-bold opacity-50'>
                    <div className='text-xs'>
                        COPYRIGHT @{new Date().getFullYear()} FOOD VINA
                    </div>
                    <div className='text-xs'>
                        POWERED BY FOOD VINA
                    </div>
                </div>
            </div>

        </footer>
    );
};

