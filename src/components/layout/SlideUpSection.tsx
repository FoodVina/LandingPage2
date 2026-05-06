"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const SlideUpSection = ({
    children,
    className,
    zIndex,
}: {
    children: React.ReactNode;
    className?: string;
    zIndex: number;
}) => {
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
            className={cn("relative w-full min-h-dvh", className)}
        >
            {children}
        </motion.div>
    );
}