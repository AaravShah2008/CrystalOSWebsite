"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Trust() {
    return (
        <section className="relative py-64 overflow-hidden">

            {/* Structural background grid */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
            </div>

            {/* Ambient anchor glow */}
            <motion.div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[200px]" animate={{ opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}/>

            <Container>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.4 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Section label */}
                    <span className="block text-xs tracking-[0.35em] text-textMuted mb-8 uppercase">
                        Reliability
                    </span>

                    {/* Headline */}
                    <h2 className="font-heading text-4xl md:text-5xl mb-10">
                        Built to endure
                    </h2>

                    {/* Divider */}
                    <motion.div
                        className="mx-auto h-px w-24 bg-[var(--divider)] mb-12" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}/>

                    {/* Copy */}
                    <p className="text-textMuted text-xl leading-relaxed max-w-3xl mx-auto">
                        Designed for stability over time - predictable, dependable systems that scale without compromise.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}