import { motion } from "framer-motion";
import { Trophy, ArrowLeft, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SubmitPet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card-premium rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Trophy className="w-8 h-8 text-accent-foreground" />
              </div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Submit Your Pet
              </h1>
              <p className="text-muted-foreground">
                Enter your furry friend for Pet of the Week!
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Pet's Name</label>
                <input
                  type="text"
                  placeholder="Enter your pet's name"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Breed</label>
                <input
                  type="text"
                  placeholder="Enter breed"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Upload Photo</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Why should your pet win?</label>
                <textarea
                  placeholder="Tell us about your pet..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                <Upload className="w-5 h-5 mr-2" />
                Submit Pet
              </Button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitPet;
