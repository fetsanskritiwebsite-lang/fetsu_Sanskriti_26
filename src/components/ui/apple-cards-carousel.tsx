import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeftFn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRightFn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth snap-x snap-mandatory [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className={cn("flex flex-row justify-start gap-6 px-6 md:px-12")}>
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              key={index}
              className="last:pr-[5%] md:last:pr-[33%] snap-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-6 md:mr-12">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-foreground/10 border border-foreground/10 flex items-center justify-center disabled:opacity-30 transition-colors hover:bg-foreground/20"
          onClick={scrollLeftFn}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-foreground/10 border border-foreground/10 flex items-center justify-center disabled:opacity-30 transition-colors hover:bg-foreground/20"
          onClick={scrollRightFn}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};
