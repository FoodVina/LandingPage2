"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const StickyCard = ({ i, children, className, tall }: { i: number; children: React.ReactNode; className?: string; tall?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });
    const spring = useSpring(scrollYProgress, { stiffness: 60, damping: 18, restDelta: 0.0005 });
    const y = useTransform(spring, [0, 1], ["6%", "0%"]);

    useEffect(() => {
        if (!tall || !ref.current) return;
        const el = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transform = "translateY(0)";
                    el.style.opacity = "1";
                }
            },
            { threshold: 0.05 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [tall]);

    if (tall) {
        return (
            <div
                ref={ref}
                style={{
                    zIndex: 10 + i,
                    transform: "translateY(6%)",
                    opacity: 0,
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
                }}
                className={cn("relative w-full", className)}
            >
                {children}
            </div>
        );
    }

    return (
        <motion.div ref={ref} style={{ y, zIndex: 10 + i }} className={cn("sticky top-0 h-dvh w-full overflow-hidden", className)}>
            {children}
        </motion.div>
    );
};
