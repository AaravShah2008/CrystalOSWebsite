"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Vision() {
    return (
        <section className="relative py-32">
            <Container>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount : 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-3xl">
                    {/* Label */}
                    <p className="text-sm tracking-widest text-textMuted mb-6">
                        OUR VISION
                    </p>

                    {/* Heading */}
                    <h2 className="font-heading text-4xl md:text-5xl mb-6">
                        Computing should feel intentional.
                    </h2>

                    {/* Description */}
                    <p className="text-textMuted text-lg leading-relaxed">
                        CrystalOS is built around clarity, focus and control.
                        An operating system that adapts to you — not the other
                        way around. Every interaction is designed to feel calm,
                        deliberate and future-ready.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}