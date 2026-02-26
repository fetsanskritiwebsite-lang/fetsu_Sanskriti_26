import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import sanskritiImg from "@/assets/sanskriti-about.png";

const paragraphText = "is a celebration of hope. The very word (origin Sanskrit: Sanskaar) contains a hint of mending, and reconstruction and is a relentless effort towards upliftment and perfection. From its mere facade, Sanskriti is a fest, a cultural festival but to us, the students of Jadavpur University, Sanskriti is a guiding force, a path we take in our attempt to redefine culture. It is an endeavor to break down the shackles of defined cultural norms and to set new boundaries, only to reinvent against those. Through its living heritage of 48 years, Sanskriti has given shape to ideas - new and bright and cradled feelings of warmth and endearment. It has spread its wings to include much more - a film festival (Chhayanat), a tech fest (Srijan), and a freshers' welcome U-Turn. Sanskriti is the literal unfolding of the magic that life is.";

const stats = [
  { year: "1978", label: "Founded" },
  { year: "50K+", label: "Annual Visitors" },
  { year: "200+", label: "Events" },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="font-display text-4xl md:text-6xl font-black gradient-text">
        {stat.year}
      </div>
      <div className="mt-2 text-sm font-body tracking-widest uppercase text-muted-foreground">
        {stat.label}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);
  const titleOpacityScroll = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <section ref={sectionRef} id="about" className="relative z-10 bg-background py-16 md:py-32 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          className="mb-10 md:mb-20 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: titleScale, opacity: titleOpacityScroll }}
        >
          <h2 className="font-display text-3xl md:text-8xl lg:text-9xl font-black hero-title-gradient">
            : What is Sanskriti ? :
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-center">
          <motion.div
            className="relative overflow-hidden rounded-xl"
            style={{ y: imgY }}
            initial={{ opacity: 0, x: -100, rotate: -2 }}
            animate={contentInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={sanskritiImg}
              alt="Sanskriti 2026 - Redefining Culture"
              className="w-full h-[200px] md:h-[450px] object-cover rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-xl pointer-events-none" />
          </motion.div>

          <motion.div
            ref={contentRef}
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ filter: "blur(12px)", opacity: 0, y: 60 }}
              animate={contentInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-2xl md:text-5xl font-black hero-title-gradient leading-tight">
                Sanskriti
              </span>
            </motion.div>

            <motion.p
              className="text-sm md:text-lg font-body leading-relaxed text-foreground/80"
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              animate={contentInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {paragraphText}
            </motion.p>

            <motion.div
              className="h-[2px] bg-gradient-to-r from-destructive via-accent to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={contentInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>

        <div className="mt-12 md:mt-28 grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
