"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const experiences = [
    {
        title: "Feels effortless",
        description:"Everything responds instantly, without friction or hesitation."
    },
    {
        title: "Moves with you",
        description:"Subtle motion guides attention, never distracts from intent."
    },
    {
        title: "Quietly powerful",
        description:"Advanced capabilities remain invisible until you need them."
    }
];

export default function Experience() {
    return (
        <section className="relative py-40 overflow-hidden">
            <Container>
                <div className="flex flex-col gap-32">
                    {experiences.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount : 0.3 }} transition={{duration: 0.8, ease: "easeOut"}} className="max-w-2xl">
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