"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const[dark, setDark] = useState(true);
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
    }, []);
    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setDark(isDark);
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
                            <span className="font-heading text-xl cursor-pointer" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}>CrystalOS</span>
                        </div>
                        {/* Center */}
                        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-textMuted">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">Home</button>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">About</button>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">Updates</button>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">Community</button>
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
                            <span className="font-heading text-xl cursor-pointer" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}>CrystalOS</span>
                            <div className="flex gap-6 text-sm text-textMuted">
                                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">Home</button>
                                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">About</button>
                                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">Updates</button>
                                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition cursor-pointer">Community</button>
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
            {/* Scroll To Top Button Arrow */}
            {scrolled && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 glass p-3 rounded-full hover:scale-110 transition">↑</button>
            )}
        </header>
    );
}