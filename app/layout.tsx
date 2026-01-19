import "./globals.css";
import Navbar from "./components/Navbar"
import SystemCursor from "./components/SystemCursor";

import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/600.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className="font-body bg-background text-textPrimary">
                <SystemCursor />
                <Navbar />
                {children}
            </body>
        </html>
    );
}