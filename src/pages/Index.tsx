import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CountdownSection from "@/components/CountdownSection";
import TimelineSection from "@/components/TimelineSection";
import BandLineupSection from "@/components/BandLineupSection";
import EventsSection from "@/components/EventsSection";
import EventsGrid from "@/components/EventsGrid";
import PastSponsorsSection from "@/components/PastSponsorsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
const Index = () => {
  return (
    <div className="noise-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CountdownSection />
      <TimelineSection />
      <BandLineupSection />
      <EventsSection />
      <EventsGrid />
      <PastSponsorsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
