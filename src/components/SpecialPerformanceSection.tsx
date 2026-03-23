import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import specialPerformanceImg from "@/assets/performance/Special Performance.jpeg";

const SpecialPerformanceSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="special-performance"
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
                <div className="mb-12 text-center">
                    <span className="text-xl md:text-2xl font-body tracking-[0.2em] uppercase text-white font-medium mb-3 block drop-shadow-md">
                        31st March 2026
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-black gradient-text mb-4">
                        Special Performance
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img
                        src={specialPerformanceImg}
                        alt="Special Performance"
                        className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-cover rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-gold/20 transition-transform duration-500 hover:scale-105"
                    />
                    <h4 className="mt-6 font-display text-2xl md:text-3xl text-gold font-semibold text-center tracking-wide">
                        Chauu Nach
                    </h4>
                </div>
            </motion.div>
        </section>
    );
};

export default SpecialPerformanceSection;
