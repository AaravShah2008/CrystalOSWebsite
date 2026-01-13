"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Future() {
    return (
        <section className="relative py-64 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
            </div>

            <Container>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount : 0.3 }} transition={{duration: 1.1, ease: "easeOut"}} className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl mb-8">
                        The future, quietly forming
                    </h2>

                    <p className="text-textMuted text-xl leading-relaxed">
                        CrystalOS is being shaped with intention —
                        refined over time and released when it’s ready.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}