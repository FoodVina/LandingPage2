"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function SlideUpSection({
    children,
    className,
    zIndex,
}: {
    children: React.ReactNode;
    className?: string;
    zIndex: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    const spring = useSpring(scrollYProgress, { stiffness: 60, damping: 18, restDelta: 0.0005 });
    const y = useTransform(spring, [0, 1], ["8%", "0%"]);

    return (
        <motion.div
            ref={ref}
            style={{ y, zIndex }}
            className={cn("relative w-full h-dvh", className)}
        >
            {children}
        </motion.div>
    );
}

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
            <SlideUpSection zIndex={10} className="bg-background">
                <div className="container mx-auto px-4 flex flex-col gap-16 h-full justify-center">
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
            <div className="sticky top-0 z-20 w-full h-dvh bg-yellow-200">
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

            {/* Operation */}
            <SlideUpSection zIndex={30} className="h-full">
                <div className="h-dvh bg-blue-200 w-full">
                    <div className="container mx-auto px-4"></div>
                </div>
                <div className="h-dvh bg-orange-200 w-full">
                    <div className="container mx-auto px-4"></div>
                </div>
            </SlideUpSection>

        </div>
    );
}
