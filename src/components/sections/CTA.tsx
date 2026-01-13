import { motion } from "framer-motion";
import { PawPrint, ArrowRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />
      <div className="absolute inset-0 paw-pattern opacity-10" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary-foreground/10 backdrop-blur-sm"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm mb-8"
          >
            <PawPrint className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Join the Pack?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Connect with thousands of pet parents, get AI-powered advice, and give your furry friends the community they deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-float hover:-translate-y-1 transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              Watch Demo
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Heart className="w-5 h-5" />
              <span>50K+ Happy Pet Parents</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Star className="w-5 h-5" />
              <span>4.9 Star Rating</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <PawPrint className="w-5 h-5" />
              <span>Free Forever Plan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
