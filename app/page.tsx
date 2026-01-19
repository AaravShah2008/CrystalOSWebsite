import SectionFrame from "./components/SectionFrame";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Trust from "./components/Trust";
import Future from "./components/Future";

export default function Home() {
    return (
        <main id="top" className="bg-background text-textPrimary">
            <Hero />
            <Philosophy />
            <Experience />
            <Capabilities />
            <Trust />
            <Future />
        </main>
    );
}