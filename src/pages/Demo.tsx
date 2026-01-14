import { motion } from "framer-motion";
import { Play, ArrowLeft, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 paw-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl mx-4"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="glass-card-premium rounded-3xl p-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
            <Play className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Watch the Demo
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how Pawsitive Community brings pet parents together with AI-powered tools, local discovery, and a vibrant community.
          </p>

          {/* Video Placeholder */}
          <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center mb-8 border border-border">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center cursor-pointer shadow-glow"
            >
              <Play className="w-12 h-12 text-primary-foreground ml-1" />
            </motion.div>
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/join">
              <PawPrint className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Demo;
