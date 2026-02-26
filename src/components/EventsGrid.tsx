import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";
import gallery11 from "@/assets/gallery-11.webp";
import gallery12 from "@/assets/gallery-12.webp";
import gallery13 from "@/assets/gallery-13.webp";
import gallery14 from "@/assets/gallery-14.webp";
import gallery15 from "@/assets/gallery-15.webp";
import gallery16 from "@/assets/gallery-16.webp";
import gallery17 from "@/assets/gallery-17.webp";
import gallery18 from "@/assets/gallery-18.webp";
import gallery19 from "@/assets/gallery-19.webp";
import gallery20 from "@/assets/gallery-20.webp";

const masonryImages = [
  { src: gallery1, span: "col-span-1 row-span-1 hidden md:block" },
  { src: gallery2, span: "col-span-2 row-span-2" },
  { src: gallery3, span: "col-span-1 row-span-1" },
  { src: gallery4, span: "col-span-1 row-span-1" },
  { src: gallery5, span: "col-span-1 row-span-1" },
  { src: gallery6, span: "col-span-1 row-span-2" },
  { src: gallery7, span: "col-span-1 row-span-1" },
  { src: gallery8, span: "col-span-1 row-span-1" },
  { src: gallery10, span: "col-span-1 row-span-1" },
  { src: gallery9, span: "col-span-2 row-span-1" },
];

const marqueeImages = [
  gallery11, gallery12, gallery13, gallery14, gallery15,
  gallery16, gallery17, gallery18, gallery19, gallery20,
];

const GalleryCard = ({ image, index }: { image: typeof masonryImages[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`${image.span} relative group overflow-hidden rounded-xl min-h-[200px] md:min-h-[280px]`}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={image.src}
        alt={`Gallery ${index + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
    </motion.div>
  );
};

const EventsGrid = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const doubledMarquee = [...marqueeImages, ...marqueeImages];

  return (
    <section id="gallery" className="relative z-30 min-h-screen py-32 px-6 md:px-12 bg-background shadow-[0_-30px_60px_-10px_rgba(0,0,0,0.8)]" style={{ marginTop: "-1px" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
            Moments
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black gradient-text">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {masonryImages.map((image, i) => (
            <GalleryCard key={i} image={image} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden max-w-6xl mx-auto">
        <motion.div
          className="flex gap-4"
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
              className="relative group flex-shrink-0 w-[300px] md:w-[400px] h-[220px] md:h-[300px] overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`Gallery marquee ${(i % marqueeImages.length) + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsGrid;
