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
                    Designed with intent. <br />
                    Built with restraint.
                </h2>

                <div className="relative mt-12 flex flex-col items-center gap-10">
                    <p className="relative text-textMuted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                        Technology should feel calm.
                        <span className="block mt-2 opacity-70">Not loud. Not demanding.</span>
                    </p>

                    {/* Subtle divider pulse */}
                    <motion.div className="h-px w-24 bg-[var(--divider)]" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}/>

                    <p className="text-textPrimary text-lg md:text-xl max-w-2xl leading-relaxed">
                        Every interaction should earn its place.
                        <br />
                        Nothing exists without reason.
                    </p>

                    {/* Subtle divider pulse */}
                    <motion.div className="h-px w-16 bg-[var(--divider)]" animate={{ opacity: [0.25, 0.6, 0.25] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}/>

                    <p className="relative text-textMuted text-lg md:text-xl max-w-3xl max-auto leading-relaxed opacity-80">
                        The best systems disappear.
                        <br />
                        Only the experience remains.
                    </p>
                </div>
            </motion.div>
        </SectionFrame>
    );
}