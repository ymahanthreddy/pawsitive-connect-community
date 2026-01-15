import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Users,
  Calendar,
  Sparkles,
  Heart,
  ChevronDown,
  Info,
  Mail,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useNavigate } from "react-router-dom";

/* LOGO */
import logo from "@/assets/logo.jpg";

/* ================= EXPLORE LINKS ================= */
const exploreLinks = [
  { name: "Community", section: "community", icon: Users },
  { name: "AI Assistant", section: "ai-assistant", icon: Sparkles },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Adoption", path: "/adoption", icon: Heart },
  { name: "Groups", path: "/groups", icon: MessageCircle },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔑 SCROLL TO HOME SECTION */
  const handleScrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    setExploreOpen(false);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "glass-card shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pawsitive Community Logo"
              className="w-10 h-10 object-contain rounded-xl shadow-glow"
            />
            <span className="font-display font-bold text-xl">
              Pawsitive <span className="text-primary">Community</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {/* HOME */}
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Info className="w-4 h-4" />
              About Us
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>

            {/* EXPLORE */}
            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition">
                Explore
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 w-64 rounded-2xl glass-card shadow-medium p-2"
                  >
                    {exploreLinks.map((link) =>
                      link.section ? (
                        <button
                          key={link.name}
                          onClick={() =>
                            handleScrollToSection(link.section)
                          }
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-muted/50"
                        >
                          <link.icon className="w-4 h-4 text-primary" />
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          key={link.name}
                          to={link.path!}
                          onClick={() => setExploreOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-muted/50"
                        >
                          <link.icon className="w-4 h-4 text-primary" />
                          {link.name}
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/join">Join Community</Link>
            </Button>
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted/50"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
