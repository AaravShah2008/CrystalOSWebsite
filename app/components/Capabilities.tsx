"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const layers = [
    {
        title: "Core System Layer",
        description: "Stability. Performance. Longevity.",
    },
    {
        title: "Intelligence Layer",
        description: "Context-aware. Adaptive. Evolving.",
    },
    {
        title: "Experience Layer",
        description: "Clarity through motion and restraint.",
    },
];

export default function Capabilities() {
    return (
        <section className="relative py-56">
            <Container>
                {/* Section header */}
                <div className="text-center mb-32">
                    <span className="block text-sm tracking-widest text-textMuted mb-4">
                        SYSTEM ARCHITECTURE
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl">
                        Designed in layers
                    </h2>
                </div>

                {/* Architecture layout */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Energy spine */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--divider)] to-transparent -translate-x-1/2" />
                    <div className="flex flex-col gap-40">
                        {layers.map((layer, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} viewport={{ amount: 0.4 }} transition={{ duration: 0.8, ease: "easeOut" }} className={`relative max-w-md ${isRight ? "ml-auto text-left pr-24" : "mr-auto text-right pl-24"}`}>
                                    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--surface)]/70 backdrop-blur px-8 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                                        <h3 className="font-heading text-3xl mb-4">
                                            {layer.title}
                                        </h3>
                                        <p className="text-textMuted text-lg leading-relaxed">
                                            {layer.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}