import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const adoptablePets = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Labrador Mix",
    age: "2 years",
    location: "San Francisco, CA",
    distance: "2.5 miles",
    image: "🐕",
    traits: ["Friendly", "Trained", "Good with kids"],
    urgency: "Featured",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "1 year",
    location: "Oakland, CA",
    distance: "5 miles",
    image: "🐈",
    traits: ["Playful", "Indoor", "Affectionate"],
    urgency: "New",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Dog",
    breed: "Beagle",
    age: "4 years",
    location: "Berkeley, CA",
    distance: "8 miles",
    image: "🐶",
    traits: ["Calm", "Senior-friendly", "Quiet"],
    urgency: "Urgent",
  },
  {
    id: 4,
    name: "Mochi",
    type: "Cat",
    breed: "Persian",
    age: "3 years",
    location: "San Jose, CA",
    distance: "12 miles",
    image: "🐱",
    traits: ["Fluffy", "Lazy", "Sweet"],
    urgency: null,
  },
];

const urgencyColors: Record<string, string> = {
  Featured: "bg-accent text-accent-foreground",
  New: "bg-secondary text-secondary-foreground",
  Urgent: "bg-destructive text-destructive-foreground",
};

export const Adoption = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30">
      {/* Decorative hearts */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ❤️
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🐾
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paw-pink/20 text-paw-pink font-medium text-sm mb-4">
            <Heart className="w-4 h-4 fill-paw-pink" />
            Find Your Forever Friend
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Pets Looking for <span className="gradient-text">Love</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover adoptable pets near you and give them the loving home they deserve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {adoptablePets.map((pet, index) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full border border-transparent hover:border-primary/30 transition-all duration-300">
                {/* Pet "Image" */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
                  <motion.span
                    className="text-8xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {pet.image}
                  </motion.span>
                  
                  {pet.urgency && (
                    <Badge className={`absolute top-3 right-3 ${urgencyColors[pet.urgency]}`}>
                      {pet.urgency}
                    </Badge>
                  )}

                  {/* Favorite button */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 left-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-paw-pink transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground">{pet.name}</h3>
                    <span className="text-sm text-muted-foreground">{pet.age}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{pet.breed}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{pet.distance}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pet.traits.map((trait) => (
                      <span
                        key={trait}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                    <Link to="/adoption">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/adoption">
              <Sparkles className="w-5 h-5 mr-2" />
              View All Adoptable Pets
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
