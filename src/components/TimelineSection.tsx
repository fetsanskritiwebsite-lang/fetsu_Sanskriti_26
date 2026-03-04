import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import heroBg from "@/assets/hero-bg.jpg";
import culture1 from "@/assets/culture-1.jpg";
import culture2 from "@/assets/culture-2.jpg";
import culture3 from "@/assets/culture-3.jpg";
import culture4 from "@/assets/culture-4.jpg";
import culture5 from "@/assets/culture-5.jpg";
import Eastern_night from "@/assets/Eastern_Night.jpeg"
import Western_night from "@/assets/Western_Night.webp"
import Reunion_night from "@/assets/Reunion_Night4.jpg"
import Final_night from "@/assets/Final_Night.webp"

const images = [heroBg, culture3, culture2, culture1, culture4, Eastern_night, Western_night, Reunion_night, Final_night];

const schedule = [
  {
    day: "Day 1",
    date: "28th March",
    subtitle: "Curtain Raiser",
    events: [
      //{ name: "Band Performance", time: "" },
    ],
  },
  {
    day: "Day 2",
    date: "29th March",
    subtitle: "Prelims",
    events: [
      { name: "RAAG N JOSH (OAT)", time: "11:00 AM" },
      { name: "THINK TWICE (Teqip 101)", time: "12:00 PM" },
      { name: "SHOOT AT SIGHT (OAT)", time: "12:00 PM" },
      { name: "JAM IT (OAT)", time: "04:30 PM" },
    ],
  },
  {
    day: "Day 3",
    date: "30th March",
    subtitle: "Students Performance",
    events: [
      { name: "TARANA - Prelims (OAT)", time: "10:00 AM" },
      { name: "GRAFFITI WAR (OAT)", time: "12:00 PM" },
      { name: "CREATIVE WRITING (Teqip 101)", time: "12:00 PM" },
      { name: "NATYALAYA (OAT)", time: "04:00 PM" },
      { name: "Students Performance (OAT)", time: "06:30 PM" },
    ],
  },
  {
    day: "Day 4",
    date: "31st March",
    subtitle: "Dance Night",
    events: [
      { name: "GHONGROOZ (OAT)", time: "10:00 AM" },
      { name: "T-shirt / Face / Poster Painting (OAT)", time: "12:00 PM" },
      { name: "SKETCHOPHILE (Teqip 101)", time: "12:00 PM" },
      { name: "RANGOLI (OAT)", time: "12:00 PM" },
      { name: "ORIGAMI (OAT)", time: "01:00 PM" },
      { name: "MOON WALK (OAT)", time: "02:20 PM" },
    ],
  },
  {
    day: "Day 5",
    date: "1st April",
    subtitle: "All Events Day",
    events: [
      { name: "RENDITION - Prelims (OAT)", time: "10:00 AM" },
      { name: "QUIZ (Teqip 101)", time: "12:00 PM" },
      { name: "BEAT BOX (OAT)", time: "02:00 PM" },
      { name: "RAP BATTLE (OAT)", time: "03:30 PM" },
      { name: "DANCE BOUT (OAT)", time: "05:00 PM" },
    ],
  },
  {
    day: "Day 6",
    date: "2nd April",
    subtitle: "Eastern Night",
    events: [
      { name: "TARANA - Finals (OAT)", time: "10:00 AM" },
      { name: "RAAG N JOSH - Finals (OAT)", time: "12:00 PM" },
      //{ name: "Band Performance", time: "" },
    ],
  },
  {
    day: "Day 7",
    date: "3rd April",
    subtitle: "Western Night",
    events: [
      { name: "RENDITION - Finals (OAT)", time: "10:00 AM" },
      { name: "JAM IT - Finals (OAT)", time: "12:00 PM" },
      //{ name: "Band Performance", time: "" },
    ],
  },
  {
    day: "Day 8",
    date: "4th April",
    subtitle: "Reunion Night",
    events: [
      { name: "GUITAR WARS (OAT)", time: "10:00 AM" },
      { name: "INSTRUMENTAL (OAT)", time: "01:00 PM" },
      //{ name: "Band Performance", time: "" },
    ],
  },
  {
    day: "Day 9",
    date: "5th April",
    subtitle: "Final Night",
    events: [
      //{ name: "Band Performance", time: "" },
    ],
  },
];

const DayCard = ({ day, index }: { day: typeof schedule[0]; index: number }) => {
  return (
    <div className="flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[340px] md:w-[440px] h-[420px] md:h-[480px] relative group">
      <div className="relative h-full rounded-2xl overflow-hidden glass">
        <div className="absolute inset-0 opacity-20">
          <img
            src={images[index % images.length]}
            alt=""
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="relative z-10 p-8 h-full flex flex-col">
          <div className="mb-6">
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase">
              {day.day}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
              {day.date}
            </h3>
            {day.subtitle && (
              <span className="text-accent/80 font-body text-sm mt-1 block italic">
                {day.subtitle}
              </span>
            )}
          </div>

          <div className="h-[1px] bg-gradient-to-r from-accent/50 to-transparent mb-5" />

          <div className="flex flex-col gap-3 flex-1">
            {day.events.map((evt, j) => (
              <div
                key={j}
                className="flex items-start justify-between gap-3"
              >
                <span className="font-body text-sm text-foreground/80 leading-snug flex-1">
                  {evt.name}
                </span>
                <span className="font-body text-xs text-gold/70 whitespace-nowrap mt-0.5">
                  {evt.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const cards = schedule.map((day, index) => (
    <DayCard key={day.day} day={day} index={index} />
  ));

  return (
    <section
      id="timeline"
      className="relative z-20 bg-background shadow-[0_-30px_60px_-10px_rgba(0,0,0,0.8)] py-20"
    >
      <motion.div
        ref={titleRef}
        className="px-6 md:px-12 mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4 block">
            Schedule
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black gradient-text">
            Nine Days of<br />Magic
          </h2>
        </div>
      </motion.div>

      <Carousel items={cards} />
    </section>
  );
};

export default TimelineSection;
