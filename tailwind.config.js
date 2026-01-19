/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Orbitron", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            colors: {
                background: {
                    dark: "#0B0F14",
                    light: "#F8FAFC"
                },
                surface: {
                    dark: "#111827",
                    light: "#FFFFFF"
                },
                textPrimary: {
                    dark: "#E5E7EB",
                    light: "#0F172A"
                },
                textMuted: {
                    dark: "#9CA3AF",
                    light: "#475569"
                },
                divider: {
                    light: "rgba(0,0,0,0.08)",
                    dark: "rgba(255,255,255,0.12)"
                },
                accent: "#38BDF8",
            },
        },
    },
    plugins: [],
};