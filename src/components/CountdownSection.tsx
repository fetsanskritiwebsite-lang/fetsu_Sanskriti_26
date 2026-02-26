import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date("2026-03-28T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (): TimeLeft => {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const FlipDigit = ({ value, label }: { value: number; label: string }) => {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />

        <div className="relative glass rounded-2xl md:rounded-3xl px-6 py-8 md:px-14 md:py-12 min-w-[90px] md:min-w-[160px] lg:min-w-[200px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-border/30 z-10" />

          <AnimatePresence mode="popLayout">
            <motion.span
              key={value}
              className="font-display text-5xl md:text-8xl lg:text-9xl font-black gradient-text block"
              initial={{ y: -20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <span className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-gold/70">
        {label}
      </span>
    </div>
  );
};

const Separator = () => (
  <motion.span
    className="font-display text-4xl md:text-7xl lg:text-8xl gradient-text self-start mt-8 md:mt-12"
    animate={{ opacity: [1, 0.2, 1] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  >
    :
  </motion.span>
);

const CountdownSection = () => {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="sticky top-0 z-10 h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-sm md:text-base font-body tracking-[0.3em] uppercase text-gold mb-6 block">
          Mark Your Calendar
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-4">
          The Wait Is Almost Over
        </h2>
        <p className="font-body text-foreground/50 text-base md:text-lg mb-16 md:mb-20 max-w-lg mx-auto">
          28th March, 2026 — Be there when the magic begins
        </p>

        <div className="flex flex-wrap items-start justify-center gap-3 md:gap-6">
          <div className="flex items-start gap-3 md:gap-6">
            <FlipDigit value={time.days} label="Days" />
            <Separator />
            <FlipDigit value={time.hours} label="Hours" />
          </div>
          <div className="flex items-start gap-3 md:gap-6">
            <FlipDigit value={time.minutes} label="Minutes" />
            <Separator />
            <FlipDigit value={time.seconds} label="Seconds" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
