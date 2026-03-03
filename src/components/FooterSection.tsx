import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { PinContainer } from "./ui/pin";
import jadavpurCampus from "@/assets/jadavpur-campus.png";
import saltLakeCampus from "@/assets/salt-lake-campus.png";

const FooterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/fetsu_presents_sanskriti/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/fetsanskritiju", label: "Facebook" },
  ];

  return (
    <footer className="relative z-30 pt-16 pb-32 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 w-full">
            <div className="flex-1">
              <h2 className="font-display text-6xl md:text-[8rem] leading-none font-black gradient-text mb-8">
                JOIN THE<br />MOVEMENT.
              </h2>
              <div className="flex gap-6 mt-8 items-center">
                {socials.map((social) => (
                  <MagneticButton key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="text-foreground/50 hover:text-accent transition-colors duration-300"
                    >
                      <social.icon size={24} strokeWidth={1.5} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full lg:w-auto">
              <PinContainer
                title="Jadavpur Campus"
                href="https://maps.google.com/?q=Jadavpur+University+188+Raja+SC+Mallick+Road+Kolkata+700032"
                containerClassName="w-full max-w-[20rem] h-[20rem]"
                imageUrl={jadavpurCampus}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg text-foreground font-bold">
                    Jadavpur University
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    Jadavpur Campus: 188, Raja S.C. Mallick Road,
                    <br />
                    Jadavpur, Kolkata — 700032
                  </p>
                </div>
              </PinContainer>
              <PinContainer
                title="Salt Lake Campus"
                href="https://maps.google.com/?q=Jadavpur+University+Salt+Lake+Campus+Kolkata+700098"
                containerClassName="w-full max-w-[20rem] h-[20rem]"
                imageUrl={saltLakeCampus}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg text-foreground font-bold">
                    Jadavpur University
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    Salt Lake Campus: Plot No. 8, Salt Lake Bypass,
                    <br />
                    LB Block, Sector III, Kolkata — 700098
                  </p>
                </div>
              </PinContainer>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-border flex items-center justify-center">
            <span className="font-body text-xs text-muted-foreground">
              © 2026 Sanskriti. All rights reserved.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
