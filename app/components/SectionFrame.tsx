import React from "react";

export default function SectionFrame({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={`relative py-32 px-6 ${className}`}
        >
            <div className="max-w-5xl mx-auto">
                {children}
            </div>
        </section>
    );
}