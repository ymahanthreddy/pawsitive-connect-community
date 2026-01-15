import { motion } from "framer-motion";
import { PawPrint, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* ✅ IMPORT LOGO */
import logo from "@/assets/logo.jpg";

const GetStarted = () => {
  const features = [
    "Create unlimited pet profiles",
    "Access AI-powered pet advice",
    "Join interest groups & communities",
    "Discover local pet services",
    "Attend events & meetups",
    "Submit pets for Pet of the Week",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 paw-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl mx-4"
      >
        <div className="glass-card-premium rounded-3xl p-8">
          {/* HEADER */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              {/* ✅ LOGO */}
              <img
                src={logo}
                alt="Pawsitive Community Logo"
                className="w-12 h-12 object-contain"
              />
            </motion.div>

            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Get Started for Free
            </h1>

            <p className="text-muted-foreground">
              Join 50,000+ pet parents on Pawsitive Community
            </p>
          </div>

          {/* FEATURES */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button variant="hero" className="w-full" size="lg" asChild>
              <Link to="/join">
                <PawPrint className="w-5 h-5 mr-2" />
                Create Free Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/auth"
                className="text-primary font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* FOOTER LINK */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;
