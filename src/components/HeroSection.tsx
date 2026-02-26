import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sanskritiLogo from "@/assets/sanskriti-logo-hero.png";
import gallery1 from "@/assets/gallery-1.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery9 from "@/assets/gallery-9.webp";
import culture1 from "@/assets/culture-1.jpg";
import culture3 from "@/assets/culture-3.jpg";
import culture5 from "@/assets/culture-5.jpg";

const floatingImages = [
  { src: gallery1, x: "2%", y: "5%", w: "22%", mw: "46%", my: "5%", mx: "2%", speed: 0.3, delay: 0, showMobile: true },
  { src: culture1, x: "27%", y: "3%", w: "20%", mw: "46%", my: "5%", mx: "52%", speed: 0.5, delay: 0.2, showMobile: true },
  { src: gallery3, x: "50%", y: "6%", w: "22%", mw: "46%", my: "25%", mx: "2%", speed: 0.35, delay: 0.4, showMobile: true },
  { src: culture3, x: "75%", y: "4%", w: "23%", mw: "46%", my: "25%", mx: "52%", speed: 0.6, delay: 0.1, showMobile: true },
  { src: gallery5, x: "2%", y: "52%", w: "23%", mw: "0%", my: "0%", mx: "0%", speed: 0.4, delay: 0.3, showMobile: false },
  { src: gallery7, x: "28%", y: "55%", w: "20%", mw: "0%", my: "0%", mx: "0%", speed: 0.45, delay: 0.5, showMobile: false },
  { src: culture5, x: "51%", y: "53%", w: "22%", mw: "0%", my: "0%", mx: "0%", speed: 0.25, delay: 0.15, showMobile: false },
  { src: gallery9, x: "76%", y: "54%", w: "22%", mw: "0%", my: "0%", mx: "0%", speed: 0.55, delay: 0.35, showMobile: false },
];

const FloatingImage = ({
  img,
  index,
  scrollYProgress,
}: {
  img: (typeof floatingImages)[0];
  index: number;
  scrollYProgress: any;
}) => {
  const isEven = index % 2 === 0;
  const y = useTransform(scrollYProgress, [0, 1], [0, -250 * img.speed]);
  const x = useTransform(scrollYProgress, [0, 1], [0, (isEven ? 40 : -40) * img.speed]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [isEven ? 25 : -20, 0, isEven ? -10 : 10]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [isEven ? -30 : 25, 0, isEven ? 15 : -10]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5], [isEven ? -8 : 6, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 1.05, 0.95]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  if (isMobile && !img.showMobile) return null;

  return (
    <motion.div
      className="absolute rounded-xl overflow-hidden shadow-2xl"
      style={{
        left: isMobile ? img.mx : img.x,
        top: isMobile ? img.my : img.y,
        width: isMobile ? img.mw : img.w,
        y,
        x,
        rotateX,
        rotateY,
        rotateZ,
        scale,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.7, rotateX: isEven ? 35 : -30, rotateY: isEven ? -40 : 35 }}
      animate={{ opacity: 0.55, scale: 0.85, rotateX: isEven ? 25 : -20, rotateY: isEven ? -30 : 25 }}
      transition={{ duration: 1.8, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={img.src}
        alt=""
        className="w-full h-full object-cover"
        style={{ filter: "brightness(0.7) saturate(1.2)" }}
      />
    </motion.div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 15]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {floatingImages.map((img, i) => (
          <FloatingImage key={i} img={img} index={i} scrollYProgress={scrollYProgress} />
        ))}

        <div className="absolute inset-0 bg-background/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity }}
          >
            <motion.img
              src={sanskritiLogo}
              alt="Sanskriti 2026 - F.E.T.S.U. Presents - Redefining Culture"
              className="w-[80vw] md:w-[50vw] lg:w-[40vw] max-w-[700px] h-auto drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-foreground/30 text-xs font-body tracking-[0.3em] uppercase"
            >
              Scroll to Explore ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
