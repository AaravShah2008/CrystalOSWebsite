import Vision from "./components/Vision";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Trust from "./components/Trust";
import Future from "./components/Future";

export default function Home() {
    return (
        <main className="bg-background text-textPrimary">
            <Hero />
            <Vision />
            <Philosophy />
            <Experience />
            <Capabilities />
            <Trust />
            <Future />
        </main>
    );
}