"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { describe } from "node:test";
import { section } from "framer-motion/client";

const experiences = [
    {
        title: "Instant Response",
        description: "Every interaction feels immediate. Motion follows intent, not delay."
    },
    {
        title: "Adaptive Intelligence",
        description: "CrystalOS learns patterns quietly and improves without interruption."
    },
    {
        title: "Effortless Flow",
        description: "Nothing pulls focus. The system stays out of the way until needed."
    }
];

export default function Experience() {
    return(
        <section className="relative py-56 overflow-hidden">
            {/* Soft atmosphere background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)]/40 to-transparent" />

            <Container>
                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.6 }} className="text-center max-w-3xl mx-auto mb-32">
                    <span className="block text-sm tracking-widest text-textMuted mb-4">
                        EXPERIENCE
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl">
                        Designed to disappear.
                    </h2>
                </motion.div>

                {/* Experience cards */}
                <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {experiences.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.4 }} transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.15 }} className="relative group">
                            {/* Glass Panel */}
                            <div className="glass-panel p-10 h-full transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="font-heading text-2xl mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-textMuted loading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Subtle Glow on Hover */}
                            <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}