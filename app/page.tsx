import Hero from "./components/Hero"
import StorySection from "./components/StorySection";

export default function Home() {
    return (
        <main className="bg-background text-textPrimary">
            {/* HERO */}
            <Hero />

            {/* SCROLL SECTIONS */}
            <StorySection title="Designed for clarity" subtitle="CrystalOS is built to remove noise, reduce friciton and let you focus on what truly matters. Every interaction feels intentional."/>
            <StorySection title="Power without complexity" subtitle="Advanced capabilities stay out of your way until you need them. Simple on the surface. Powerful underneath." align="right"/>
            <StorySection title="Ready for what comes next" subtitle="CrystalOS is not built for yesterday's workflow. It's designed to evolve with the way technology and people move forward"/>
        </main>
    );
}