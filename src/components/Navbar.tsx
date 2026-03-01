import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Menu, X } from "lucide-react";


const navItems = ["Home", "About", "Timeline", "Band Lineup", "Events", "Gallery"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[98%] mx-auto px-4 py-4 flex items-center justify-between">
        <span className="font-display text-2xl text-foreground">Sanskriti</span>
        <div className="hidden md:flex items-center gap-6 font-display text-base tracking-wider">
          <MagneticButton>
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:74e5a708-3e7e-4d61-8fe9-56888cc36942"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gold/30 text-gold hover:bg-gold hover:text-gold-foreground rounded-full transition-all duration-300 mr-2"
            >
              Sponsorship Brochure
            </a>
          </MagneticButton>
          {navItems.map((item) => (
            <MagneticButton key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            </MagneticButton>
          ))}

          <MagneticButton>
            <a
              href="#contact"
              className="text-accent hover:text-accent/80 transition-colors duration-300"
            >
              Contact
            </a>
          </MagneticButton>

        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-border/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center gap-4 py-6 font-display text-base tracking-wider">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 mb-2 border border-gold/30 text-gold hover:bg-gold hover:text-gold-foreground rounded-full transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                onClick={() => setMobileOpen(false)}
              >
                Sponsorship
              </motion.a>
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                className="text-accent hover:text-accent/80 transition-colors duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
