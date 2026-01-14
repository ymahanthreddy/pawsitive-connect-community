import { motion } from "framer-motion";
import { Heart, ArrowLeft, Filter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Adoption = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-paw-pink to-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Adoptable Pets
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect furry companion and give them a loving home
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              All Pets
            </Button>
            <Button variant="ghost" size="sm">🐕 Dogs</Button>
            <Button variant="ghost" size="sm">🐈 Cats</Button>
            <Button variant="ghost" size="sm">🐰 Others</Button>
            <Button variant="ghost" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Near Me
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-6xl">{i % 2 === 0 ? "🐈" : "🐕"}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-foreground">Pet #{i}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Breed • Age</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Adoption;
