import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* HERO BACKGROUND */}
      <main className="pt-32 pb-24 relative aurora-bg">
        <section className="container mx-auto px-4 md:px-6 relative">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get in touch
            </h1>

            <p className="text-muted-foreground text-lg">
              Questions, feedback, or ideas?  
              <br />
              We’d love to hear from you.
            </p>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card-premium shadow-float rounded-3xl p-8 max-w-xl mx-auto card-hover grain-overlay"
          >
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 glass-input focus-ring"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 glass-input focus-ring"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 glass-input focus-ring resize-none"
              />

              <Button
                variant="hero"
                className="w-full flex items-center gap-2 btn-premium animate-glow-pulse"
              >
                <MessageSquare className="w-4 h-4" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Demo only — messages are not sent.
              </p>
            </form>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
