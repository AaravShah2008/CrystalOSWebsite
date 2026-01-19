"use client";

import { useEffect } from "react";

export default function SystemCursor() {
    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const root = document.documentElement;

        const move = (e: MouseEvent) => {
            root.style.setProperty("--cx", `${e.clientX}px`);
            root.style.setProperty("--cy", `${e.clientY}px`);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return null;
}