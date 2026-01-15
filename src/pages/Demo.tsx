import { motion } from "framer-motion";
import { Play, ArrowLeft, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* 🎥 DEMO VIDEO */
import demoVideo from "@/assets/video.mp4";

const Demo = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 aurora-bg" />
        <div className="absolute inset-0 paw-pattern opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl"
        >
          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* CARD */}
          <div className="glass-card-premium rounded-3xl p-8 md:p-10 text-center shadow-float">
            {/* ICON */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Play className="w-10 h-10 text-primary-foreground" />
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Watch the Demo
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how Pawsitive Community helps pet parents connect, discover
              services, adopt pets, and use AI-powered guidance — all in one
              place.
            </p>

            {/* 🎬 VIDEO PLAYER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-2xl overflow-hidden mb-10 border border-border shadow-medium"
            >
              <video
                src={demoVideo}
                controls
                autoPlay={false}
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  <PawPrint className="w-5 h-5 mr-2" />
                  Get Started Now
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/posts">
                  Explore Community
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
};

export default Demo;
