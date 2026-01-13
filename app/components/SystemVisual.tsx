export default function SystemVisual() {
    return (
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px"}} />

            {/* Floating glass layers */}
            <div className="absolute top-6 left-6 w-2/3 h-24 rounded-xl glass" />
            <div className="absolute bottom-8 right-8 w-1/2 h-20 rounded-xl glass" />

            {/* Center core */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            </div>
        </div>
    );
}