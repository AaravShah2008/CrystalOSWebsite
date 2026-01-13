"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start start", "end start"]});

    // Glow reacts to scroll
    const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 0]);

    // Text motion
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <motion.div style={{scale: glowScale, opacity: glowOpacity}} className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-[700px] w-[700px] rounded-full bg-accent/20 blur-[160px]" />
            </motion.div>

            {/* Content */}
            <motion.div style={{y: titleY, opacity: titleOpacity}} className="text-center px-6">
                <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
                    CrystalOS
                </h1>

                <p className="text-textMuted text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                    A next generation operating system, <br />
                    designed for what comes next.
                </p>
            </motion.div>
        </section>
    );
}