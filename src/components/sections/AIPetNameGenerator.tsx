import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wand2, RefreshCw, Copy, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const petTypes = ["Dog", "Cat", "Rabbit", "Bird", "Hamster", "Fish"];
const personalities = ["Playful", "Calm", "Adventurous", "Cuddly", "Mischievous", "Royal"];
const themes = ["Classic", "Food-inspired", "Nature", "Mythical", "Pop Culture", "Unique"];

const nameDatabase: Record<string, string[]> = {
  "Dog-Playful": ["Bounce", "Ziggy", "Dash", "Pepper", "Scout"],
  "Dog-Calm": ["Sage", "Willow", "Jasper", "Zen", "Luna"],
  "Dog-Adventurous": ["Atlas", "Everest", "Storm", "Blaze", "Maverick"],
  "Cat-Playful": ["Whiskers", "Mochi", "Noodle", "Pickle", "Biscuit"],
  "Cat-Calm": ["Shadow", "Velvet", "Moonlight", "Misty", "Serenity"],
  "Cat-Mischievous": ["Trouble", "Bandit", "Jinx", "Loki", "Chaos"],
  "Rabbit-Cuddly": ["Snuggles", "Cottontail", "Marshmallow", "Cuddles", "Fluffy"],
  "Bird-Royal": ["Phoenix", "Majesty", "Emperor", "Crown", "Noble"],
  default: ["Lucky", "Buddy", "Coco", "Max", "Bella", "Charlie", "Daisy", "Rocky"],
};

export const AIPetNameGenerator = () => {
  const [petType, setPetType] = useState("");
  const [personality, setPersonality] = useState("");
  const [generating, setGenerating] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const generateNames = () => {
    if (!petType || !personality) return;
    
    setGenerating(true);
    setNames([]);

    setTimeout(() => {
      const key = `${petType}-${personality}`;
      const baseNames = nameDatabase[key] || nameDatabase.default;
      
      // Shuffle and pick 5 names
      const shuffled = [...baseNames].sort(() => Math.random() - 0.5);
      const extraNames = nameDatabase.default.sort(() => Math.random() - 0.5);
      const combined = [...new Set([...shuffled, ...extraNames])].slice(0, 5);
      
      setNames(combined);
      setGenerating(false);
    }, 1500);
  };

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pet-purple/5 via-paw-pink/5 to-primary/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pet-purple/20 text-pet-purple font-medium text-sm mb-4">
            <Wand2 className="w-4 h-4" />
            AI-Powered Generator
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            AI Pet <span className="gradient-text">Name Generator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let our AI suggest the perfect name for your new furry, feathered, or scaly friend!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card-premium rounded-3xl p-8">
            {/* Pet Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">What type of pet?</label>
              <div className="flex flex-wrap gap-2">
                {petTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setPetType(type)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      petType === type
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Personality Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Their personality?</label>
              <div className="flex flex-wrap gap-2">
                {personalities.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPersonality(p)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      personality === p
                        ? "bg-secondary text-secondary-foreground shadow-lg"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <Button
              variant="hero"
              size="lg"
              className="w-full shadow-glow"
              onClick={generateNames}
              disabled={!petType || !personality || generating}
            >
              {generating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                  </motion.div>
                  AI is thinking...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Names
                </>
              )}
            </Button>

            {/* Generated Names */}
            <AnimatePresence>
              {names.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Suggested Names</h4>
                    <Button variant="ghost" size="sm" onClick={generateNames}>
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Regenerate
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {names.map((name, idx) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <span className="text-2xl">
                          {["🐾", "✨", "💫", "🌟", "⭐"][idx]}
                        </span>
                        <span className="flex-1 text-lg font-display font-bold">
                          {name}
                        </span>
                        
                        <button
                          onClick={() => toggleFavorite(name)}
                          className={`p-2 rounded-lg transition-colors ${
                            favorites.includes(name)
                              ? "text-rose-500"
                              : "text-muted-foreground hover:text-rose-500"
                          }`}
                        >
                          <Heart
                            className={`w-5 h-5 ${favorites.includes(name) ? "fill-current" : ""}`}
                          />
                        </button>

                        <button
                          onClick={() => copyName(name)}
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          {copied === name ? (
                            <Check className="w-5 h-5 text-nature-green" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Favorites */}
            {favorites.length > 0 && (
              <div className="mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                <p className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  Your Favorites
                </p>
                <div className="flex flex-wrap gap-2">
                  {favorites.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1 rounded-full bg-rose-500/20 text-sm font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
