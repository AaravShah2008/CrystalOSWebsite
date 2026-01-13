"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const principles = [
    {
        title: "Clarity over complexity",
        description:"Every decision is intentional. Nothing exists without purpose."
    },
    {
        title: "Technology should adapt",
        description:"Your system should understand you, not demand that you adapt to it."
    },
    {
        title: "Built for the long term",
        description:"Designed to evolve quietly, without breaking what already works."
    }
];

export default function Philosophy() {
    return (
        <section className="relative py-32">
            <Container>
                <div className="max-w-3xl space-y-16">
                    {principles.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount : 0.3 }} transition={{duration: 0.7, ease: "easeOut", delay: i * 0.1}}>
                            <h3 className="font-heading text-2xl md:text-3xl mb-3">
                                {item.title}
                            </h3>
                            <p className="text-textMuted text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}