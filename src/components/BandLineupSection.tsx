import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BandLineupSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="band-lineup"
            className="relative z-25 min-h-[60vh] flex items-center justify-center py-32 px-6 md:px-12 bg-background shadow-[0_-30px_60px_-10px_rgba(0,0,0,0.8)]"
            style={{ marginTop: "-1px", zIndex: 25 }}
        >
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="mb-12">
                    <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
                        The Stars Align
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-black gradient-text mb-4">
                        Band Lineup
                    </h2>
                </div>

                <div className="p-16 md:p-24 border border-gold/20 rounded-2xl bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <h3 className="font-display text-4xl md:text-6xl text-gold animate-pulse">
                        Coming Soon
                    </h3>
                </div>
            </motion.div>
        </section>
    );
};

export default BandLineupSection;
