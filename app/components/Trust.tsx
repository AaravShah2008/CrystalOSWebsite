"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Trust() {
    return (
        <section className="relative py-52">
            <Container>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount : 0.3 }} transition={{duration: 1.2, ease: "easeOut"}} className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-4xl md:text-5xl mb-8">
                        Built to endure
                    </h2>

                    <p className="text-textMuted text-xl leading-relaxed">
                        CrystalOS is designed with long-term reliability at its core —
                        systems that remain stable, predictable and dependable
                        regardless of scale or complexity.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}