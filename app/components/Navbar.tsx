"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

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
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* ================= MOBILE NAVBAR ================= */}
            <header className="fixed top-0 left-0 w-full z-[10001] md:hidden glass px-4 py-4">
                <div className="flex items-center justify-between">
                    <span className="font-heading text-lg">CrystalOS</span>

                    <div className="flex items-center gap-3">
                        <button onClick={toggleTheme} className="p-2 rounded-full glass">
                            {dark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <button onClick={() => setMenuOpen(true)}>
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= MOBILE MENU POPUP ================= */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)}/>

                        {/* Popup Container */}
                        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed inset-0 z-[10001] flex items-center justify-center md:hidden">
                            {/* 🔴 THIS IS THE ACTUAL POPUP BOX */}
                            <div onClick={(e) => e.stopPropagation()} className="w-[85%] max-w-sm glass rounded-2xl p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="block font-heading text-lg">
                                            Navigation
                                        </span>
                                    </div>
                                    <button onClick={() => setMenuOpen(false)}>
                                        <X size={20} />
                                    </button>
                                </div>
                                {/* Menu Items */}
                                <nav className="flex flex-col gap-5 text-base">
                                    {["Home", "About", "Updates", "Community"].map(item => (
                                        <button key={item} onClick={() => {setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" });}} className="py-2 text-left text-textMuted hover:text-white transition flex justify-between items-center">
                                            <span>{item}</span>
                                            <span className="opacity-40">→</span>
                                        </button>
                                    ))}
                                </nav>
                                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ================= DESKTOP NAVBAR ================= */}
            <header className={`fixed w-full z-[9999] transition-all duration-500 hidden md:block ${scrolled ? "top-4" : "top-0"}`}>
                {/* Fixed */}
                {!scrolled && (
                    <div className="w-full glass py-6 px-10">
                        <div className="relative flex items-center">
                            <div className="flex-1">
                                <span className="font-heading text-xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    CrystalOS
                                </span>
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-textMuted">
                                {["Home", "About", "Updates", "Community"].map(item => (
                                    <button key={item} className="hover:text-white transition">
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 flex justify-end gap-4">
                                <button onClick={toggleTheme} className="p-2 rounded-full glass">
                                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                                </button>
                                <button className="px-4 py-1.5 rounded-full bg-white/10 text-sm">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Floating */}
                {scrolled && (
                    <div className="max-w-6xl mx-auto glass rounded-2xl py-3">
                        <Container>
                            <div className="flex items-center justify-between">
                                <span className="font-heading text-xl">CrystalOS</span>

                                <div className="flex gap-6 text-sm text-textMuted">
                                    {["Home", "About", "Updates", "Community"].map(item => (
                                        <button key={item} className="hover:text-white transition">
                                            {item}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button onClick={toggleTheme} className="p-2 rounded-full glass">
                                        {dark ? <Sun size={16} /> : <Moon size={16} />}
                                    </button>
                                    <button className="px-4 py-1.5 rounded-full bg-white/10 text-sm">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </div>
                )}
            </header>
        </>
    );
}