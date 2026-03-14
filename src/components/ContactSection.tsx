import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="relative z-30 pt-32 pb-16 px-6 md:px-12 border-t border-border bg-background">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="w-full">
                        <div className="text-center mb-16">
                            <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
                                Get In Touch
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-black gradient-text">
                                CONTACT THE TEAM
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                            {/* General Convenors */}
                            <div className="glass p-8 rounded-2xl relative overflow-hidden hover:border-gold/30 transition-colors duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="relative z-10 font-display text-xl md:text-2xl text-gold mb-8 uppercase tracking-widest text-center border-b border-gold/20 pb-4">
                                    General Convenors
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex flex-col gap-1 items-center text-center">
                                        <span className="font-body text-xl md:text-2xl text-foreground font-semibold tracking-wide">Amit Dhibar</span>
                                        <a href="tel:+917551858423" className="font-body text-muted-foreground hover:text-gold transition-colors duration-300">+91 75518 58423</a>
                                    </li>
                                    <li className="flex flex-col gap-1 items-center text-center">
                                        <span className="font-body text-xl md:text-2xl text-foreground font-semibold tracking-wide">Arindol Ghosh</span>
                                        <a href="tel:+919382073934" className="font-body text-muted-foreground hover:text-gold transition-colors duration-300">+91 93820 73934</a>
                                    </li>
                                    <li className="flex flex-col gap-1 items-center text-center">
                                        <span className="font-body text-xl md:text-2xl text-foreground font-semibold tracking-wide">Ayaskanta Mallik</span>
                                        <a href="tel:+918293491336" className="font-body text-muted-foreground hover:text-gold transition-colors duration-300">+91 82934 91336</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Finance Convenors */}
                            <div className="glass p-8 rounded-2xl relative overflow-hidden hover:border-gold/30 transition-colors duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="relative z-10 font-display text-xl md:text-2xl text-gold mb-8 uppercase tracking-widest text-center border-b border-gold/20 pb-4">
                                    Finance Convenors
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex flex-col gap-1 items-center text-center">
                                        <span className="font-body text-xl md:text-2xl text-foreground font-semibold tracking-wide">Saikat Chowdhury</span>
                                        <a href="tel:+918509660368" className="font-body text-muted-foreground hover:text-gold transition-colors duration-300">+91 85096 60368</a>
                                    </li>
                                    <li className="flex flex-col gap-1 items-center text-center">
                                        <span className="font-body text-xl md:text-2xl text-foreground font-semibold tracking-wide">Prithwish Das</span>
                                        <a href="tel:+916290869954" className="font-body text-muted-foreground hover:text-gold transition-colors duration-300">+91 62908 69954</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Event Coordinators */}
                            <div className="glass p-8 rounded-2xl relative overflow-hidden hover:border-gold/30 transition-colors duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="relative z-10 font-display text-xl md:text-2xl text-gold mb-8 uppercase tracking-widest text-center border-b border-gold/20 pb-4">
                                    Event Coordinators
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex flex-col gap-1 items-center text-center">
                                        <span className="font-body text-xl md:text-2xl text-foreground font-semibold tracking-wide">Dipesh Mahato</span>
                                        <a href="tel:+917029014262" className="font-body text-muted-foreground hover:text-gold transition-colors duration-300">+91 70290 14262</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
