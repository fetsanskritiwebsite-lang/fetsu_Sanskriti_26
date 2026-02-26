import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { events } from "@/data/events";

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden glass"
    >
      <Link to={`/event/${event.slug}`}>
        <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="font-display text-2xl md:text-3xl font-black gradient-text leading-tight">
            {event.title}
          </h3>
          <p className="font-body text-[10px] md:text-sm text-foreground/60 tracking-widest uppercase mt-1 mb-3 md:mb-4">
            {event.subtitle}
          </p>
          <span className="block w-full text-center font-display text-[11px] md:text-lg font-black tracking-wider md:tracking-widest uppercase whitespace-nowrap px-2 md:px-6 py-2 md:py-3 rounded-xl bg-gold/90 text-gold-foreground group-hover:bg-gold group-hover:shadow-[0_0_25px_hsl(var(--gold)/0.4)] transition-all duration-300">
            Register Now
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      className="relative z-25 min-h-[60vh] py-32 px-6 md:px-12 bg-background shadow-[0_-30px_60px_-10px_rgba(0,0,0,0.8)]"
      style={{ marginTop: "-1px", zIndex: 25 }}
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center mb-16">
          <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
            What Awaits
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black gradient-text mb-4">
            Events
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {events.map((event, i) => (
            <EventCard key={event.slug} event={event} index={i} />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default EventsSection;
