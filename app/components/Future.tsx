"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Future() {
    return (
        <section className="relative py-80 overflow-hidden">
            {/* Atmospheric fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface)]/50 to-transparent" />

            <Container>
                {/* Text block */}
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.6 }} transition={{ duration: 1.4, ease: "easeOut" }} className="relative z-10 text-center max-w-3xl mx-auto mb-32">
                    <h2 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight">
                        The system doesn’t demand attention.
                        <br />
                        <span className="text-textMuted">
                            It earns trust.
                        </span>
                    </h2>

                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.2 }} className="mt-20 text-xs tracking-[0.35em] text-textMuted uppercase">
                        Beyond the horizon
                    </motion.p>
                </motion.div>
            </Container>

            {/* Horizon lines — layered depth */}
            <motion.div className="absolute left-1/2 top-[64%] w-[160vw] h-px bg-gradient-to-r from-transparent via-[var(--divider)]/30 to-transparent -translate-x-1/2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}/>

            <motion.div className="absolute left-1/2 top-[66%] w-[140vw] h-px bg-gradient-to-r from-transparent via-[var(--divider)]/60 to-transparent -translate-x-1/2" animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}/>

            {/* Dominant glow core */}
            <motion.div className="absolute left-1/2 top-[65%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/15 blur-[180px]" animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut"}}/>

            {/* Secondary asymmetrical glow (mystery) */}
            <motion.div className="absolute left-[60%] top-[68%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-[200px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}/>
        </section>
    );
}