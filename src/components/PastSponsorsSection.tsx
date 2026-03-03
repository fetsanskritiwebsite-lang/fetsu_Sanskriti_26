import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import all sponsor images
import abpAnanda from "@/assets/sponsorimages/ABP Ananda.jfif";
import byjus from "@/assets/sponsorimages/BYJU's.png";
import ceat from "@/assets/sponsorimages/CEAT.png";
import careerLauncher from "@/assets/sponsorimages/Career Launcher.png";
import cocaCola from "@/assets/sponsorimages/Coca Cola.png";
import cognizant from "@/assets/sponsorimages/Cognizant.png";
import gionee from "@/assets/sponsorimages/Gionee.png";
import indianOil from "@/assets/sponsorimages/Indian Oil.png";
import mahindra from "@/assets/sponsorimages/Mahindra and Mahindra.png";
import pepsico from "@/assets/sponsorimages/Pepsico.png";
import redFm from "@/assets/sponsorimages/Red FM.png";
import sbi from "@/assets/sponsorimages/SBI.png";
import tata from "@/assets/sponsorimages/TATA.png";
import timesOfIndia from "@/assets/sponsorimages/The Times of India.png";
import telegraph from "@/assets/sponsorimages/The telegraph.jfif";
import vodafone from "@/assets/sponsorimages/Vodafone.png";
import yamaha from "@/assets/sponsorimages/Yahama.png";
import zoomcar from "@/assets/sponsorimages/Zoomcar.png";
import spencers from "@/assets/sponsorimages/spencers.jfif";
import spykarz from "@/assets/sponsorimages/spykarz.png";

const PastSponsorsSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const marqueeImages = [
        abpAnanda,
        byjus,
        ceat,
        careerLauncher,
        cocaCola,
        cognizant,
        gionee,
        indianOil,
        mahindra,
        pepsico,
        redFm,
        sbi,
        tata,
        timesOfIndia,
        telegraph,
        vodafone,
        yamaha,
        zoomcar,
        spencers,
        spykarz,
    ];

    const doubledMarquee = [...marqueeImages, ...marqueeImages];

    return (
        <section className="relative z-30 py-24 pb-32 px-6 md:px-12 border-t border-border bg-background overflow-hidden" id="sponsors">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
                        Our Partners
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-black gradient-text">
                        PAST SPONSORS
                    </h2>
                </motion.div>
            </div>

            <div className="relative w-full max-w-[100vw] overflow-hidden -mx-6 md:-mx-12">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-4 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {doubledMarquee.map((src, i) => (
                        <div
                            key={i}
                            className="relative flex items-center justify-center p-6 flex-shrink-0 w-[200px] md:w-[250px] h-[120px] md:h-[150px] rounded-xl bg-background/50 border border-border/50 hover:bg-background/80 transition-colors duration-300"
                        >
                            <img
                                src={src}
                                alt={`Past Sponsor ${(i % marqueeImages.length) + 1}`}
                                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PastSponsorsSection;
