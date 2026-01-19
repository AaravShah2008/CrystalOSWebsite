"use client";

import { motion } from "framer-motion";
import SectionFrame from "./SectionFrame";

export default function Philosophy() {
    return (
        <SectionFrame>
            <motion.div className="relative glass-panel p-12 md:p-16 text-center overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.4 }} transition={{ duration: 0.9, ease: "easeOut" }}>
                {/* Subtle ambient layer */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)] opacity-70" />

                {/* Minimal visual cue */}
                <div className="flex justify-center mb-6">
                    <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-[2px] w-20 rounded-full bg-accent/60" />
                </div>

                <span className="relative block text-sm tracking-widest text-textMuted mb-4">
                    PHILOSOPHY
                </span>

                <h2 className="relative font-heading text-4xl md:text-5xl mb-6">
                    Design that respects the user
                </h2>

                <p className="relative text-textMuted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Every decision in CrystalOS is driven by clarity,
                    performance, and respect for the user's attention.
                    Power is present — but never imposed.
                </p>
            </motion.div>
        </SectionFrame>
    );
}