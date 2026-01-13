"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const capabilities = [
    {
        title: "Built for scale",
        description:"From personal devices to complex environments, CrystalOS adapts without compromise."
    },
    {
        title: "Designed for intelligence",
        description:"Systems that learn, anticipate and optimize — without exposing complexity."
    },
    {
        title: "Engineered for trust",
        description:"Security and stability are embedded at the core, not added later."
    }
];

export default function Capabilities() {
    return (
        <section className="relative py-44">
            <Container>
                <div className="max-w-3xl mx-auto text-center space-y-28">
                    {capabilities.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount : 0.3 }} transition={{duration: 0.9, ease: "easeOut", delay: i * 0.1}}>
                            <h3 className="font-heading text-4xl md:text-5xl mb-6">
                                {item.title}
                            </h3>
                            <p className="text-textMuted text-xl leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}