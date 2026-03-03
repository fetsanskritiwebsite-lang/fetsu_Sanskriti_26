import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { events } from "@/data/events";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="noise-bg min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-display text-5xl gradient-text mb-4">Event Not Found</h1>
          <Link to="/#events" className="text-gold font-body underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const renderBold = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-foreground font-bold">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="noise-bg min-h-screen">
      <Navbar />

      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <Link
          to="/#events"
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 font-body text-sm text-foreground/70 hover:text-gold transition-colors z-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>
      </div>

      <motion.div
        className="text-center -mt-16 relative z-10 mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-display text-6xl md:text-8xl font-black gradient-text">
          {event.title}
        </h1>
        <div className="w-32 h-[2px] bg-gold mx-auto mt-2" />
        <p className="font-body text-sm md:text-base text-foreground/50 tracking-widest uppercase mt-3">
          {event.subtitle}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-2 space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-6 tracking-wide">
                Event Guidelines
              </h2>
              <ul className="space-y-3">
                {event.guidelines.map((g, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-sm md:text-base text-foreground/70">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{renderBold(g)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {event.dates ? (
              <div>
                <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-3 tracking-wide">
                  Date
                </h3>
                <div className="w-20 h-[2px] bg-foreground/20 mb-4" />
                <div className="font-body text-sm md:text-base space-y-1 text-foreground/80">
                  <p>Date : {event.dates.date}</p>
                  <p>Time : {event.dates.time}</p>
                  <p>Venue : {event.dates.venue}</p>
                </div>
              </div>
            ) : (
              <>
                {event.prelims && (
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-3 tracking-wide">
                      Prelims
                    </h3>
                    <div className="w-20 h-[2px] bg-foreground/20 mb-4" />
                    <div className="font-body text-sm md:text-base space-y-1 text-foreground/80">
                      <p>Date : {event.prelims.date}</p>
                      <p>Time : {event.prelims.time}</p>
                      <p>Venue : {event.prelims.venue}</p>
                    </div>
                  </div>
                )}

                {event.finals && (
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-3 tracking-wide">
                      Finals
                    </h3>
                    <div className="w-20 h-[2px] bg-foreground/20 mb-4" />
                    <div className="font-body text-sm md:text-base space-y-1 text-foreground/80">
                      <p>Date : {event.finals.date}</p>
                      <p>Time : {event.finals.time}</p>
                      <p>Venue : {event.finals.venue}</p>
                    </div>
                  </div>
                )}
              </>
            )}

            <p className="font-body text-base md:text-lg text-destructive font-bold tracking-wide">
              Participants must reach 30 minutes prior to the event
            </p>
            <p className="font-body text-sm md:text-base text-foreground/50">
              *On Spot Registrations To Be Done On The Day Of Event
            </p>
          </motion.div>

          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4 tracking-wide">
                Coordinators
              </h2>
              <div className="space-y-2">
                {event.coordinators.map((c, i) => (
                  <p key={i} className="font-body text-sm md:text-base text-foreground/80">
                    {c.name} - {c.phone}
                  </p>
                ))}
              </div>
            </div>
            {/*
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-3 tracking-wide">
                Deadline
              </h2>
              <p className="font-display text-lg text-destructive font-bold">
                {event.deadline}
              </p>
            </div>

            {event.reglink !== "TBA" ? (
              <a
                href={event.reglink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center font-display text-lg md:text-xl font-black tracking-widest uppercase px-8 py-4 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90 hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)] transition-all duration-300"
              >
                Register Now
              </a>
            ) : (
              <button disabled className="w-full font-display text-lg md:text-xl font-black tracking-widest uppercase px-8 py-4 rounded-xl bg-gold/50 text-gold-foreground/50 cursor-not-allowed transition-all duration-300">
                Registration TBA
              </button>
            )}
            */
            }
          </motion.div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default EventPage;
