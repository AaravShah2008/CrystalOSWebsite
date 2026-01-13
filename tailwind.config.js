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
                background: "#0B0F14",
                surface: "#111827",
                glass: "rgba(255,255,255,0.08)",
                glassBorder: "rgba(255,255,255,0.15)",
                textPrimary: "#E5E7EB",
                textMuted: "#9CA3AF",
                accent: "#38BDF8",
            },
        },
    },
    plugins: [],
};