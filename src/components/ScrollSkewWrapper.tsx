import { useEffect, useState, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

const ScrollSkewWrapper = ({ children }: { children: ReactNode }) => {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const skew = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const velocity = window.scrollY - lastScroll;
          const clampedSkew = Math.max(-2, Math.min(2, velocity * 0.05));
          skew.set(clampedSkew);
          lastScroll = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skew]);

  return (
    <motion.div style={{ skewY: skew }} className="scroll-skew">
      {children}
    </motion.div>
  );
};

export default ScrollSkewWrapper;
