import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import images
import curtainRaiserImg from "@/assets/performance/Curtain Raiser.jpeg";
import easternNight1Img from "@/assets/performance/Eastern Night.jpeg";
import easternNight2Img from "@/assets/performance/Eastern Night 2.jpeg";
import westernNightImg from "@/assets/performance/Western Night.jpeg";
import curtainraiser2Img from "@/assets/performance/equilibrium.jpeg";
import western2Img from "@/assets/performance/arogya.jpeg";
const BandLineupSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const ImageSlot = ({ src, alt, bandName }: { src?: string; alt: string; bandName?: string }) => (
        <div className="flex flex-col items-center">
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] object-cover rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.2)] border border-gold/20 transition-transform duration-500 hover:scale-105"
                />
            ) : (
                <div className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex items-center justify-center border border-gold/20 rounded-2xl bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105">
                    <span className="font-display text-3xl text-gold animate-pulse">Revealing Soon</span>
                </div>
            )}
            <h4 className="mt-6 font-display text-2xl md:text-3xl text-gold font-medium text-center tracking-wide">
                {bandName || ""}
            </h4>
        </div>
    );

    const NightSection = ({ title, date, images, bandNames = [], slots = 2 }: { title: string, date: string, images: (string | undefined)[], bandNames?: string[], slots?: number }) => {
        // Create an array of length `slots`, filled with available images and undefined for the rest.
        const displayImages = Array.from({ length: slots }, (_, i) => images[i]);

        return (
            <motion.div
                className="flex flex-col items-center mb-32 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center mb-8">
                    {displayImages.map((src, idx) => (
                        <ImageSlot key={idx} src={src} alt={`${title} ${idx + 1}`} bandName={bandNames[idx]} />
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl md:text-2xl font-body tracking-[0.2em] uppercase text-white font-medium mb-3 block text-center drop-shadow-md">
                        {date}
                    </span>
                    <h3 className="font-display text-4xl md:text-6xl font-bold text-gold tracking-wide text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        );
    };

    return (
        <section
            id="band-lineup"
            className="relative z-25 min-h-[60vh] flex flex-col items-center justify-center py-32 px-6 md:px-12 bg-background shadow-[0_-30px_60px_-10px_rgba(0,0,0,0.8)]"
            style={{ marginTop: "-1px", zIndex: 25 }}
        >
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    ref={ref}
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
                        The Stars Align
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-black gradient-text">
                        Band Lineup
                    </h2>
                </motion.div>

                <div className="flex flex-col w-full">
                    <NightSection title="Curtain Raiser" date="28th March 2026" images={[curtainraiser2Img, curtainRaiserImg]} slots={2} bandNames={["Ekuil- i - brium", "Swastik"]} />
                    <NightSection title="Eastern Night" date="2nd April 2026" images={[easternNight2Img, easternNight1Img]} slots={2} bandNames={["Arabhi", "Pakshee"]} />
                    <NightSection title="Western Night" date="3rd April 2026" images={[westernNightImg, western2Img]} slots={2} bandNames={["The Paper Planes", "Arogya"]} />
                    <NightSection title="Reunion Night" date="4th April 2026" images={[]} slots={1} bandNames={[""]} />
                    <NightSection title="Final Night" date="5th April 2026" images={[]} slots={1} bandNames={[""]} />
                </div>
            </div>
        </section>
    );
};

export default BandLineupSection;
