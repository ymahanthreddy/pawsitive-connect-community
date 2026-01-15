import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

/* LOGO */
import logo from "@/assets/logo.jpg";

/* ================= FOOTER LINKS ================= */
const footerLinks = {
  Community: [
    { label: "Groups", href: "/groups" },
    { label: "Events", href: "/events" },
    { label: "Pet of the Week", href: "/submit-pet" },
    { label: "Community Posts", href: "/posts" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
Legal: [
  { label: "Privacy Policy", href: "/legal#privacy" },
  { label: "Terms of Service", href: "/legal#terms" },
],

};

/* ================= SOCIAL LINKS (OFFICIAL) ================= */
const socialLinks = [
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com",
    label: "YouTube",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt="Pawsitive Community Logo"
                  className="w-10 h-10 object-contain rounded-xl shadow-glow"
                />

                <span className="font-display font-bold text-xl text-foreground">
                  Pawsitive <span className="text-primary">Community</span>
                </span>
              </Link>
            </motion.div>

            <p className="text-muted-foreground mb-4 max-w-xs">
              A safe, supportive digital community where pet parents connect,
              learn, and grow together.
            </p>

            {/* DEMO NOTE */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground mb-6">
              <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
              <p>
                This platform is presented in demo mode for evaluation purposes.
              </p>
            </div>

            {/* NEWSLETTER */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> for pet parents everywhere
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Pawsitive Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
