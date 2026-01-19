"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const experiences = [
    {
        title: "Feels effortless",
        description: "Everything responds instantly, without friction or hesitation.",
    },
    {
        title: "Moves with you",
        description: "Subtle motion guides attention, never distracts from intent.",
    },
    {
        title: "Quietly powerful",
        description: "Advanced capabilities remain invisible until you need them.",
    },
];

export default function Experience() {
    return (
        <section className="relative py-44 overflow-hidden">
            {/* Vertical system line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--divider)] -translate-x-1/2" />

            <Container>
                <div className="flex flex-col gap-40">
                    {experiences.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.9, ease: "easeOut" }}
                            className={`max-w-xl ${
                                i % 2 === 0
                                    ? "ml-auto text-right"
                                    : "mr-auto text-left"}`}>
                            <h3 className="font-heading text-3xl md:text-4xl mb-4">
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