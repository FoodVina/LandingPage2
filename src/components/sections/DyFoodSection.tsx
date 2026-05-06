"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { StickyCard } from "../layout/StickyCard";
import { Footer } from "../layout/Footer";


export const DyFoodSection = () => {
    return (
        <div className="relative w-full ">
            {/* Hero */}
            <div className="sticky top-0 z-0 w-full h-dvh bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 14.13%, rgba(0, 0, 0, 0) 65.32%), url('/images/dyfoodpage/hero.png')" }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col pt-10 gap-4 max-w-4xl items-center mx-auto">
                        <div className="pb-20">
                            <Image src="/logo/logo-dy-food.png" alt="logo" width={430} height={60} />
                        </div>
                        <h1 className="font-(family-name:--font-noto-serif) text-foreground text-[67px] text-center">
                            Tinh hoa ẩm thực Việt, trọn vẹn hương vị truyền thống
                        </h1>
                        <p className="text-muted-foreground">
                            Kiến tạo chuẩn mực ẩm thực đẳng cấp, nâng tầm giá trị bữa ăn.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <StickyCard i={0}>
                <div className="grid grid-cols-2 w-full h-full">
                    <div
                        className="relative bg-no-repeat bg-center bg-cover p-16 flex items-end"
                        style={{ backgroundImage: "url('/images/dyfoodpage/about1.png')" }}
                    >
                        <div className="absolute inset-0 bg-background/50" />
                        <h2 className="relative z-1 font-(family-name:--font-noto-serif) text-[#FCFCFC] text-[67px]">
                            Về DY FOOD
                        </h2>
                    </div>
                    <div
                        className="relative bg-no-repeat bg-center bg-cover p-16 flex flex-col justify-start gap-8"
                        style={{ backgroundImage: "url('/images/dyfoodpage/about2.png')" }}
                    >
                        <div className="absolute inset-0 bg-background/50" />
                        <div className="relative z-1 flex flex-col gap-2">
                            <p className="font-bold text-sm text-[#CDAF69]">BRAND IDENTITY</p>
                            <h2 className="font-(family-name:--font-noto-serif) text-[40px]" >Giới thiệu bối cảnh ra đời và triết lý thương hiệu</h2>
                        </div>
                        <p className="relative z-1">
                            Giới thiệu bối cảnh ra đời và triết lý thương hiệu của DY FOOD (tinh hoa ẩm thực Việt).
                        </p>
                    </div>
                </div>
            </StickyCard>

            {/* Section 2 */}
            <StickyCard i={1} className="h-full bg-background py-30 flex flex-col gap-16">
                <div className="container mx-auto px-4 flex flex-col gap-16 items-center" >
                    <div className="flex flex-col gap-2 text-center w-2xl">
                        <p className="font-bold text-sm text-primary ">PART OF SOMETHING BIGGER</p>
                        <h2 className="font-(family-name:--font-noto-serif) pb-4 text-[40px]">
                            DY FOOD & FOOD VINA <br />
                            A Partnership Built on Trust
                        </h2>
                        <p className="pb-16">Từ năm 2024, DY FOOD đã trở thành một phần trong gia đình của FOOD VINA. DY FOOD vẫn giữ nguyên bản sắc thương hiệu Việt Nam và văn hóa đội ngũ riêng biệt của mình, đồng thời ngày càng phát triển mạnh mẽ hơn nhờ sự hậu thuẫn vững chắc từ tập đoàn FOOD VINA.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src={`/images/dyfoodpage/puzzle.png`} alt="puzzle" width={636} height={636} />
                </div>
                <div className="pt-4 pb-16 flex flex-col items-center">
                    <p className="w-2xl text-center text-[#E5E2E1]">
                        Sự hợp tác này mang đến cho khách hàng nguồn lực phong phú hơn, năng lực dịch vụ rộng lớn hơn và sự tin tưởng từ một tập đoàn vững mạnh.
                        <br />
                        <br />
                        Chúng tôi là DY FOOD. Và chúng tôi mạnh mẽ hơn khi cùng nhau.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="font-bold text-sm text-primary">CUNG CẤP CÁC DỊCH VỤ</p>
                    <h2 className="font-(family-name:--font-noto-serif) text-[40px] w-2xl text-center">Giải pháp suất ăn & catering cao cấp, đậm hồn Việt</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 container mx-auto px-4">
                    <div className="group relative flex items-end p-6 h-[450px] col-span-3 rounded-[8px] overflow-hidden">
                        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('/images/dyfoodpage/service1.png')" }} />
                        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/0 transition-colors duration-500 ease-in-out" />
                        <div className="relative flex flex-col gap-4 pb-4">
                            <p className="text-xl">Suất ăn doanh nghiệp</p>
                            <p>Nguyên liệu chọn lọc, thực đơn tinh tế</p>
                        </div>
                    </div>
                    <div className="group relative flex items-end p-6 h-[450px] col-span-2 rounded-[8px] overflow-hidden">
                        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('/images/dyfoodpage/service2.png')" }} />
                        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/0 transition-colors duration-500 ease-in-out" />
                        <div className="relative flex flex-col gap-4 pb-4">
                            <p className="text-xl">Suất ăn doanh nghiệp</p>
                            <p>Nguyên liệu chọn lọc, thực đơn tinh tế</p>
                        </div>
                    </div>
                    <div className="group relative flex items-end p-6 h-[450px] col-span-2 rounded-[8px] overflow-hidden">
                        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('/images/dyfoodpage/service3.png')" }} />
                        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/0 transition-colors duration-500 ease-in-out" />
                        <div className="relative flex flex-col gap-4 pb-4">
                            <p className="text-xl">Suất ăn doanh nghiệp</p>
                            <p>Nguyên liệu chọn lọc, thực đơn tinh tế</p>
                        </div>
                    </div>
                    <div className="group relative flex items-end p-6 h-[450px] col-span-3 rounded-[8px] overflow-hidden">
                        <div className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('/images/dyfoodpage/service4.png')" }} />
                        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/0 transition-colors duration-500 ease-in-out" />
                        <div className="relative flex flex-col gap-4 pb-4">
                            <p className="text-xl">Suất ăn doanh nghiệp</p>
                            <p>Nguyên liệu chọn lọc, thực đơn tinh tế</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-dvh">

                </div>
            </StickyCard>
            {/* <StickyCard i={2} className="bg-red-200 h-[200dvh]" tall >
                <div className="container mx-auto px-4 h-dvh bg-yellow-300" >
                    a
                </div>
                <div className="container mx-auto px-4 h-dvh bg-orange-300" >
                    a
                </div>

            </StickyCard> */}
            {/* <StickyCard i={3} className="bg-white" >
                <Footer />
            </StickyCard> */}
        </div>
    );
};
