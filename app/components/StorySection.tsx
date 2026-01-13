"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SystemVisual from "./SystemVisual"

type StorySectionProps = {
    title: string;
    subtitle: string;
    align?: "left" | "right";
};

export default function StorySection({
    title,
    subtitle,
    align = "left",
}: StorySectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start end", "center center", "end start"]});

    // TEXT: move + fade + scale
    const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
    const textScale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);

    // VISUAL: stronger parallax
    const visualY = useTransform(scrollYProgress, [0, 1], [140, -140]);
    const visualScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Text */}
                <motion.div style={{y: textY, opacity: textOpacity, scale: textScale}} className={`flex flex-col justify-center ${align === "right" ? "md:order-2" : ""}`}>
                    <h2 className="font-heading text-4xl md:text-5xl mb-6">
                        {title}
                    </h2>
                    <p className="text-textMuted text-lg md:text-xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Visual */}
                <motion.div style={{y: visualY, scale: visualScale}} className={`relative h-[300px] md:h-[400px] rounded-3xl glass flex items-center justify-center ${align === "right" ? "md:order-1" : ""}`}>
                    <SystemVisual />
                </motion.div>
            </div>
        </section>
    );
}