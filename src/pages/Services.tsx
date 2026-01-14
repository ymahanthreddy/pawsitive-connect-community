import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Stethoscope, Scissors, Home, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  const categories = [
    { icon: Stethoscope, label: "Veterinarians", count: 234 },
    { icon: Scissors, label: "Groomers", count: 156 },
    { icon: Home, label: "Pet Sitting", count: 89 },
    { icon: ShoppingBag, label: "Pet Stores", count: 112 },
  ];

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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nature-green to-secondary flex items-center justify-center mx-auto mb-4 shadow-glow">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Pet Services Near You
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover trusted veterinarians, groomers, pet sitters, and more in your neighborhood
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-left hover:border-primary/30 transition-all"
              >
                <cat.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display font-bold text-foreground">{cat.label}</h3>
                <p className="text-sm text-muted-foreground">{cat.count} nearby</p>
              </motion.button>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="glass-card rounded-3xl p-8 h-96 flex items-center justify-center mb-8">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map coming soon</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl">
                    {i % 3 === 0 ? "🏥" : i % 3 === 1 ? "✂️" : "🏨"}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">Service #{i}</h3>
                    <p className="text-sm text-muted-foreground">Category • 0.5 mi</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
