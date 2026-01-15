import { motion } from "framer-motion";
import { Trophy, Heart, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import petDog1 from "@/assets/pet-dog-1.jpg";
import petCat1 from "@/assets/pet-cat-1.jpg";
import petDog2 from "@/assets/pet-dog-2.jpg";
import petCat2 from "@/assets/pet-cat-2.jpg";

const nominees = [
  {
    name: "Max",
    owner: "Sarah M.",
    breed: "Golden Retriever",
    votes: 1234,
    image: petDog1,
    isWinner: true,
  },
  {
    name: "Whiskers",
    owner: "James C.",
    breed: "Orange Tabby",
    votes: 987,
    image: petCat1,
  },
  {
    name: "Snowball",
    owner: "Emma W.",
    breed: "Pomeranian",
    votes: 856,
    image: petDog2,
  },
  {
    name: "Shadow",
    owner: "Mike T.",
    breed: "Tuxedo Cat",
    votes: 743,
    image: petCat2,
  },
];

export const PetOfWeek = () => {
  const winner = nominees[0];
  const runnersUp = nominees.slice(1);

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm mb-4">
            <Trophy className="w-4 h-4" />
            Weekly Spotlight
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Pet of the <span className="gradient-text">Week</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vote for your favorite furry friend and celebrate the most adorable pets in our community!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Winner Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Crown */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-glow">
                  <Crown className="w-8 h-8 text-accent-foreground" />
                </div>
              </motion.div>

              {/* Winner Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-float"
              >
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Winner Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/90 text-accent-foreground text-sm font-medium mb-3">
                      <Star className="w-4 h-4" />
                      This Week's Winner
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary-foreground mb-1">
                      {winner.name}
                    </h3>
                    <p className="text-primary-foreground/80 mb-2">
                      {winner.breed} • Owner: {winner.owner}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5 text-paw-pink fill-paw-pink" />
                      <span className="text-lg font-bold text-primary-foreground">
                        {winner.votes.toLocaleString()} votes
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Runners Up */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Top Contenders
            </h3>

            {runnersUp.map((pet, index) => (
              <motion.div
                key={pet.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    #{index + 2}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {pet.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {pet.breed} • {pet.owner}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary">
                    <Heart className="w-4 h-4" />
                    <span className="font-bold">{pet.votes.toLocaleString()}</span>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Vote
                  </button>
                </div>
              </motion.div>
            ))}

            <div className="pt-6">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/submit-pet">Submit Your Pet</Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                New voting round starts every Monday!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
