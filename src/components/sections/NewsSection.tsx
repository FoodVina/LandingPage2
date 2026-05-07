"use client"

import { ArrowRight, CalendarDays } from "lucide-react"
import Image from "next/image"

export const NewsSection = () => {
    return (
        <div className="w-full h-full bg-background">
            <div className="relative h-dvh bg-center bg-no-repeat bg-cover flex justify-center"
                style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 14.13%, rgba(0, 0, 0, 0) 65.32%), url('/images/newspage/hero.png')" }}
            >
                <h1 className="w-4xl font-(family-name:--font-noto-serif) text-[67px] text-center mt-20">Cập nhật những tin tức mới nhất từ FOOD VINA!</h1>
            </div>
            <div className="container mx-auto px-4 py-30 flex flex-col gap-16">
                <div className="grid grid-cols-5 gap-6">
                    <div className="col-span-3 relative bg-center bg-no-repeat bg-cover rounded-[8px] flex flex-col gap-8 justify-end"
                        style={{ backgroundImage: "url('/images/newspage/post-big.png')" }}
                    >
                        <div className="absolute inset-0 bg-background/50" />
                        <div className="z-1 p-6">
                            <h2 className="font-semibold font-(family-name:--font-noto-serif) text-[40px]">Kỷ niệm 80 năm Quốc khánh Việt Nam - nâng tầm ẩm thực Việt tại Stockholm</h2>
                            <p className="flex gap-2 items-center text-foreground"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-sm">October 4, 2025</span></p>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-[150px] h-[150px] bg-cover bg-no-repeat bg-center rounded-[8px] p-6"
                                style={{ backgroundImage: "url('/images/newspage/news1.png')" }}>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-(family-name:--font-noto-serif) font-medium">Kỷ niệm 80 năm Quốc khánh Việt Nam - nâng tầm ẩm...</h3>
                                <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays /> <span>October 4, 2025</span></p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[150px] h-[150px] bg-cover bg-no-repeat bg-center rounded-[8px] p-6"
                                style={{ backgroundImage: "url('/images/newspage/news2.png')" }}>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-(family-name:--font-noto-serif) font-medium">Kỷ niệm 80 năm Quốc khánh Việt Nam - nâng tầm ẩm...</h3>
                                <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays /> <span>October 4, 2025</span></p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[150px] h-[150px] bg-cover bg-no-repeat bg-center rounded-[8px]"
                                style={{ backgroundImage: "url('/images/newspage/news3.png')" }}>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-(family-name:--font-noto-serif) font-medium">Kỷ niệm 80 năm Quốc khánh Việt Nam - nâng tầm ẩm...</h3>
                                <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays /> <span>October 4, 2025</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex py-6 gap-12 text-sm ">
                    <p className="pb-1 border-b-2 border-primary text-primary">TẤT CẢ</p>
                    <p className="text-[#71717A]">TIN TỨC</p>
                    <p className="text-[#71717A]">THÔNG BÁO</p>
                </div>

                <div className="flex gap-6">
                    <div className="flex flex-col gap-4"  >
                        <div className="h-[368px] aspect-square bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/images/newspage/post.png')" }}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-XS">October 4, 2025</span></p>
                            <h3 className="font-(family-name:--font-noto-serif)">Ẩm thực Việt là &apos;ngôi sao&apos; mới nổi trên thế giới</h3>
                            <p className="text-[#71717A]">Ẩm thực Việt Nam dần định hình phong cách riêng trong khu vực và thế giới, nhờ sự đa dạng, làn sóng nhà hàng sáng tạo và sự ưu ái...</p>
                            <p className="text-primary flex gap-2 items-center"><span>Xem chi tiết</span><ArrowRight className="w-4"/></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4"  >
                        <div className="h-[368px] aspect-square bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/images/newspage/post.png')" }}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-XS">October 4, 2025</span></p>
                            <h3 className="font-(family-name:--font-noto-serif)">Ẩm thực Việt là &apos;ngôi sao&apos; mới nổi trên thế giới</h3>
                            <p className="text-[#71717A]">Ẩm thực Việt Nam dần định hình phong cách riêng trong khu vực và thế giới, nhờ sự đa dạng, làn sóng nhà hàng sáng tạo và sự ưu ái...</p>
                            <p className="text-primary flex gap-2 items-center"><span>Xem chi tiết</span><ArrowRight className="w-4"/></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4"  >
                        <div className="h-[368px] aspect-square bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/images/newspage/post.png')" }}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-XS">October 4, 2025</span></p>
                            <h3 className="font-(family-name:--font-noto-serif)">Ẩm thực Việt là &apos;ngôi sao&apos; mới nổi trên thế giới</h3>
                            <p className="text-[#71717A]">Ẩm thực Việt Nam dần định hình phong cách riêng trong khu vực và thế giới, nhờ sự đa dạng, làn sóng nhà hàng sáng tạo và sự ưu ái...</p>
                            <p className="text-primary flex gap-2 items-center"><span>Xem chi tiết</span><ArrowRight className="w-4"/></p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex flex-col gap-4"  >
                        <div className="h-[368px] aspect-square bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/images/newspage/post.png')" }}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-XS">October 4, 2025</span></p>
                            <h3 className="font-(family-name:--font-noto-serif)">Ẩm thực Việt là &apos;ngôi sao&apos; mới nổi trên thế giới</h3>
                            <p className="text-[#71717A]">Ẩm thực Việt Nam dần định hình phong cách riêng trong khu vực và thế giới, nhờ sự đa dạng, làn sóng nhà hàng sáng tạo và sự ưu ái...</p>
                            <p className="text-primary flex gap-2 items-center"><span>Xem chi tiết</span><ArrowRight className="w-4"/></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4"  >
                        <div className="h-[368px] aspect-square bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/images/newspage/post.png')" }}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-XS">October 4, 2025</span></p>
                            <h3 className="font-(family-name:--font-noto-serif)">Ẩm thực Việt là &apos;ngôi sao&apos; mới nổi trên thế giới</h3>
                            <p className="text-[#71717A]">Ẩm thực Việt Nam dần định hình phong cách riêng trong khu vực và thế giới, nhờ sự đa dạng, làn sóng nhà hàng sáng tạo và sự ưu ái...</p>
                            <p className="text-primary flex gap-2 items-center"><span>Xem chi tiết</span><ArrowRight className="w-4"/></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4"  >
                        <div className="h-[368px] aspect-square bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: "url('/images/newspage/post.png')" }}>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="flex gap-2 items-center text-[#71717A]"><CalendarDays className="w-[18px] h-[18px] " /> <span className="text-XS">October 4, 2025</span></p>
                            <h3 className="font-(family-name:--font-noto-serif)">Ẩm thực Việt là &apos;ngôi sao&apos; mới nổi trên thế giới</h3>
                            <p className="text-[#71717A]">Ẩm thực Việt Nam dần định hình phong cách riêng trong khu vực và thế giới, nhờ sự đa dạng, làn sóng nhà hàng sáng tạo và sự ưu ái...</p>
                            <p className="text-primary flex gap-2 items-center"><span>Xem chi tiết</span><ArrowRight className="w-4"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}