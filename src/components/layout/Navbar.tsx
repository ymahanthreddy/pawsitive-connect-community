import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PawPrint, MessageCircle, Users, Calendar, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Community", href: "#community", icon: Users },
  { name: "Events", href: "#events", icon: Calendar },
  { name: "AI Assistant", href: "#ai-assistant", icon: Sparkles },
  { name: "Adoption", href: "#adoption", icon: Heart },
  { name: "Groups", href: "#groups", icon: MessageCircle },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                  <PawPrint className="w-5 h-5 text-primary-foreground" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Pawsitive<span className="text-primary">Community</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 font-medium"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/join">Join Community</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted/50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <div className="flex justify-center mb-4">
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>Sign In</Link>
                  </Button>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/join" onClick={() => setIsOpen(false)}>Join Community</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
