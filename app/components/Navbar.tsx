"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [dark, setDark] = useState(true);
    const toggleTheme = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    }
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "top-4" : "top-0"}`}>
            {/* FIXED (edge-to-edge) */}
            {!scrolled && (
                <div className="w-full glass py-6 px-10">
                    <div className="relative flex items-center">
                        {/* Left */}
                        <div className="flex-1">
                            <span className="font-heading text-xl">CrystalOS</span>
                        </div>
                        {/* Center */}
                        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-textMuted">
                            <a className="hover:text-white transition">Home</a>
                            <a className="hover:text-white transition">About</a>
                            <a className="hover:text-white transition">Updates</a>
                            <a className="hover:text-white transition">Community</a>
                        </div>
                        {/* Right */}
                        <div className="flex-1 flex justify-end gap-4">
                            <button onClick={toggleTheme} className="p-2 rounded-full glass hover:scale-105 transition">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
                            <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition text-sm">
                                Login
                            </button>
                        </div>

                        {/* For mobile versions */}
                        <div className="md:hidden">
                            <button className="p-2 rounded-lg glass">
                                ☰
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* FLOATING (contained island) */}
            {scrolled && (
                <div className="max-w-6xl mx-auto glass rounded-2xl py-3 transition-all duration-500">
                    <Container>
                        <div className="flex items-center justify-between">
                            <span className="font-heading text-lg">CrystalOS</span>
                            <div className="flex gap-6 text-sm text-textMuted">
                                <a className="hover:text-white transition">Home</a>
                                <a className="hover:text-white transition">About</a>
                                <a className="hover:text-white transition">Updates</a>
                                <a className="hover:text-white transition">Community</a>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={toggleTheme} className="p-2 rounded-full glass hover:scale-105 transition">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
                                <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition text-sm">
                                    Login
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}