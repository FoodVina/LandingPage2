"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import ScrollVelocity from "../ui/scroll-velocity";
import { SlideUpSection } from "../layout/SlideUpSection";

const services = [
    {
        key: "1",
        title: "Nhà hàng & khách sạn",
        description: "Vận hành nhà ăn nội bộ, cung cấp bữa ăn tăng ca, đồ ăn nhẹ và các suất ăn đặc biệt.",
        picture: "/images/homepage/service1.png",
    },
    {
        key: "2",
        title: "Trường học",
        description: "Vận hành căng tin cho học sinh, sinh viên và giáo viên; quản lý bữa ăn ký túc xá.",
        picture: "/images/homepage/service2.png",
    },
    {
        key: "3",
        title: "Nhà hàng & khách sạn",
        description: "Vận hành nhà ăn nội bộ, cung cấp bữa ăn tăng ca, đồ ăn nhẹ và các suất ăn đặc biệt.",
        picture: "/images/homepage/service3.png",
    },
    {
        key: "4",
        title: "Nhà hàng & khách sạn",
        description: "Vận hành nhà ăn nội bộ, cung cấp bữa ăn tăng ca, đồ ăn nhẹ và các suất ăn đặc biệt.",
        picture: "/images/homepage/service4.png",
    },
]

const brands = [
    "brand1.png",
    "brand2.png",
    "brand3.png",
    "brand4.png",
]

function ServiceCards({ services }: { services: { key: string; title: string; description: string; picture: string }[] }) {
    const [active, setActive] = useState<number | null>(null);
    const isHovering = active !== null;

    return (
        <div className="flex w-full items-stretch gap-4 ">
            {services.map((service, index) => {
                const expanded = active === index;
                return (
                    <motion.div
                        key={service.key}
                        className="relative cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                        style={{ height: "450px" }}
                        animate={{
                            flex: isHovering ? (expanded ? 2 : 1) : 1,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onHoverStart={() => setActive(index)}
                        onHoverEnd={() => setActive(null)}
                    >
                        <Image src={service.picture} alt={service.title} fill className="object-cover" />

                        <motion.div
                            animate={{ opacity: expanded ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-background/50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
                            {/* title */}
                            <p style={{ color: "#F4F4F4", fontSize: 20, fontWeight: 400 }} className="leading-tight">
                                {service.title}
                            </p>

                            {/* description: ẩn khi hover */}
                            <AnimatePresence>
                                {!expanded && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ color: "#F4F4F4", fontSize: 16 }}
                                        className="line-clamp-2 overflow-hidden opacity-70"
                                    >
                                        {service.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            {/* button */}
                            <motion.button
                                animate={{
                                    backgroundColor: expanded ? "var(--color-secondary)" : "#F4F4F401",
                                    borderColor: expanded ? "var(--color-secondary)" : "#F4F4F4",
                                    color: expanded ? "var(--color-background)" : "#F4F4F4",
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ height: 56, fontSize: 18 }}
                                className="w-full flex items-center px-6 justify-between gap-2 border rounded-full cursor-pointer"
                            >
                                Chi tiết
                                <ChevronRight />
                            </motion.button>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}



export function HomeSection() {
    return (
        <div className="w-full">
            {/* Hero — sticky */}
            <div
                className="sticky top-0 z-0 w-full h-dvh bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/homepage/hero.png')" }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col pt-10 gap-4 max-w-4xl items-center mx-auto">
                        <h1 className="font-(family-name:--font-noto-serif) text-foreground text-[67px] text-center">
                            <span className="text-secondary">FOOD VINA</span>
                            – Khởi nguồn thay đổi từ bữa ăn ngon, lành mạnh
                        </h1>
                        <p className="text-muted-foreground">
                            Chúng tôi kiến tạo chuẩn mực mới cho văn hóa ẩm thực, nâng tầm chất lượng cuộc sống.
                        </p>
                    </div>
                </div>
            </div>

            {/* Service */}
            <SlideUpSection zIndex={10} className="bg-background ">
                <div className="container mx-auto px-4 flex flex-col gap-16 h-dvh justify-center">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-sm text-secondary">DỊCH VỤ</p>
                        <h2 className="w-lg font-(family-name:--font-noto-serif) text-[40px]">
                            Cung cấp giải pháp suất ăn & catering chuyên nghiệp
                        </h2>
                    </div>
                    <ServiceCards services={services} />
                </div>
            </SlideUpSection>

            {/* Guarantee  */}
            <div className="sticky top-0 z-20 w-full h-dvh bg-black">
                <div className="relative h-full w-full">
                    <Image src="/images/homepage/guarantee.png" alt="guarantee" fill className="object-cover opacity-50" />
                    <div className="container mx-auto px-4 flex flex-col h-full justify-center relative">
                        <div className="w-full grid grid-cols-2 gap-[90px]">
                            <div className="flex flex-col gap-8 pb-16 ">
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-sm ">CAM KẾT TỪ FOOD VINA</p>
                                    <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Kiến tạo mỗi ngày khỏe mạnh tại Việt Nam</h2>
                                </div>
                                <p className="w-md">Chúng tôi đặt sự thành công của khách hàng và sức khỏe của các thành viên lên hàng đầu. Dựa trên tính chuyên môn tiên phong và quản lý vệ sinh có hệ thống, chúng tôi đề xuất giải pháp ẩm thực tối ưu nhằm tiếp thêm sức sống cho các địa điểm kinh doanh trên khắp Việt Nam.</p>
                            </div>
                            <div className="flex flex-col gap-8">
                                <motion.div
                                    whileHover={{
                                        borderColor: "var(--color-secondary)",
                                        boxShadow: "0px 0px 40px 0px #3DB54A80",
                                        backdropFilter: "blur(20px)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-4 rounded-[12px] p-6 bg-foreground/20 border border-transparent"
                                >
                                    <p className="text-secondary text-[86px]">TEXT</p>
                                    <p>Cung cấp bữa ăn lành mạnh cho hơn 50.000 khách hàng mỗi ngày</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        borderColor: "var(--color-secondary)",
                                        boxShadow: "0px 0px 40px 0px #3DB54A80",
                                        backdropFilter: "blur(20px)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-4 rounded-[12px] p-6 bg-foreground/20 border border-transparent"
                                >
                                    <p className="text-secondary text-[86px]">TEXT</p>
                                    <p>Cung cấp bữa ăn lành mạnh cho hơn 50.000 khách hàng mỗi ngày</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Operation */}
            <SlideUpSection zIndex={30} className="h-full">
                <div className=" bg-background w-full py-32">
                    <div className="container mx-auto px-4 grid grid-cols-2 ">
                        <div className="flex flex-col gap-8 pb-30">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-secondary">HỆ THÓNG VẬN HÀNH</p>
                                <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Hệ thống vận hành hiện đại, đồng bộ, đảm bảo chất lượng ổn định.</h2>
                            </div>
                            <div className="relative rounded-[8px] overflow-hidden">
                                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                                    <Image src={`/images/homepage/operation1.png`} alt="Operation 1" width={612} height={315} className="object-cover" />
                                </motion.div>
                            </div>
                        </div>
                        <div className="py-24 pl-30 flex flex-col gap-8">
                            <div className="relative rounded-[8px] overflow-hidden">
                                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                                    <Image src={`/images/homepage/operation2.png`} alt="Operation 1" width={612} height={315} className="object-cover" />
                                </motion.div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-sm text-secondary">ĐA DẠNG ẨM THỰC</p>
                                <h2 className="font-(family-name:--font-noto-serif) text-[40px]">Thực đơn kiểm chứng khoa học, đa dạng ẩm thực (Việt, Hàn, Trung, Nhật…).</h2>

                            </div>
                        </div>
                    </div>

                    <div className="group container mx-auto px-4 relative rounded-xl overflow-hidden">
                        <Image
                            src="/images/homepage/system.png"
                            alt="System"
                            width={1280}
                            height={500}
                            className="w-full h-auto max-h-137.5 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />

                        {/* gradient dưới để chữ đọc được */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        {/* chữ nằm phía dưới container, trên ảnh */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 w-3xl">
                            <p className="font-bold text-sm text-secondary tracking-widest uppercase">Chất lượng hàng đầu</p>
                            <h2 className="font-(family-name:--font-noto-serif) text-foreground text-[40px] leading-tight">Cam kết an toàn vệ sinh và nguyên liệu đạt chuẩn.</h2>
                        </div>
                    </div>
                </div>


                <div className=" bg-blue-200 w-full">
                    <div className="relative w-full bg-center bg-no-repeat bg-cover h-137.5"
                        style={{ backgroundImage: "linear-gradient(180deg, #001A0C 0%, rgba(0, 26, 12, 0) 44.37%, #00763B 100%), url('/images/homepage/contact.png')" }}>
                        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent" />
                        <div className="relative container mx-auto px-4 flex flex-col gap-18 items-center justify-center h-full">
                            <h2 className="text-center font-(family-name:--font-noto-serif) text-[40px] w-3xl">Được nhiều doanh nghiệp tin chọn, cùng FOOD VINA xây dựng văn hóa ẩm thực riêng cho bạn.</h2>
                            <Button variant={`secondary`} className="px-10 py-4 text-sm rounded-full text-background">
                                CONTACT
                            </Button>
                        </div>
                    </div>
                    <div className="bg-[#00763B] pt-16 pb-30 flex flex-col w-full gap-12 items-center">
                        <h2 className="text-center text-foreground opacity-50 text-xs">ĐỐI TÁC DOANH NGHIỆP</h2>
                        <ScrollVelocity
                            texts={[
                                <span key="brands" className="flex items-center gap-24 opacity-40">
                                    {brands.map((brand) => (
                                        <Image key={brand} src={`/images/homepage/${brand}`} alt={brand} width={120} height={40} className="object-contain h-10 w-auto" />
                                    ))}
                                </span>
                            ]}
                            velocity={50}
                            numCopies={4}
                            damping={50}
                            stiffness={400}
                        />
                    </div>
                </div>
            </SlideUpSection>

        </div>
    );
}
