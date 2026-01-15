import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Check, RotateCcw, Dog, Cat, Bird, Rabbit } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: 1,
    question: "How much time can you dedicate to pet care daily?",
    options: [
      { text: "30 mins - 1 hour", pets: ["cat", "fish"] },
      { text: "1-2 hours", pets: ["cat", "rabbit", "bird"] },
      { text: "2-4 hours", pets: ["dog", "rabbit"] },
      { text: "4+ hours", pets: ["dog"] },
    ],
  },
  {
    id: 2,
    question: "What's your living space like?",
    options: [
      { text: "Small apartment", pets: ["cat", "fish", "bird"] },
      { text: "Medium apartment", pets: ["cat", "rabbit", "bird"] },
      { text: "House with yard", pets: ["dog", "rabbit", "cat"] },
      { text: "Large property", pets: ["dog", "horse"] },
    ],
  },
  {
    id: 3,
    question: "How active is your lifestyle?",
    options: [
      { text: "Mostly sedentary", pets: ["cat", "fish"] },
      { text: "Moderately active", pets: ["cat", "rabbit", "bird"] },
      { text: "Very active", pets: ["dog", "horse"] },
      { text: "Outdoor enthusiast", pets: ["dog"] },
    ],
  },
  {
    id: 4,
    question: "Do you have experience with pets?",
    options: [
      { text: "First-time owner", pets: ["cat", "fish", "bird"] },
      { text: "Some experience", pets: ["cat", "dog", "rabbit"] },
      { text: "Experienced owner", pets: ["dog", "rabbit", "horse"] },
      { text: "Professional level", pets: ["any"] },
    ],
  },
];

const petResults = {
  dog: {
    icon: Dog,
    name: "Dog",
    emoji: "🐕",
    description: "Dogs are loyal companions perfect for active owners who want a best friend for adventures!",
    traits: ["Loyal", "Active", "Social", "Trainable"],
    color: "from-amber-500 to-orange-500",
  },
  cat: {
    icon: Cat,
    name: "Cat",
    emoji: "🐱",
    description: "Cats are independent yet affectionate companions, ideal for those with busy lifestyles!",
    traits: ["Independent", "Low-maintenance", "Playful", "Cozy"],
    color: "from-purple-500 to-pink-500",
  },
  bird: {
    icon: Bird,
    name: "Bird",
    emoji: "🦜",
    description: "Birds bring music and color to your home, perfect for smaller spaces!",
    traits: ["Musical", "Colorful", "Social", "Intelligent"],
    color: "from-sky-500 to-blue-500",
  },
  rabbit: {
    icon: Rabbit,
    name: "Rabbit",
    emoji: "🐰",
    description: "Rabbits are gentle and quiet companions, great for families and apartment living!",
    traits: ["Gentle", "Quiet", "Soft", "Sociable"],
    color: "from-pink-400 to-rose-500",
  },
};

export const PetQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (pets: string[]) => {
    const newAnswers = [...answers, pets];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate result
      const allPets = newAnswers.flat();
      const counts: Record<string, number> = {};
      allPets.forEach((pet) => {
        if (pet !== "any") {
          counts[pet] = (counts[pet] || 0) + 1;
        }
      });
      const topPet = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "dog";
      setResult(topPet);
    }
  };

  const reset = () => {
    setStarted(false);
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  const resultData = result ? petResults[result as keyof typeof petResults] : null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      <div className="absolute inset-0 paw-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Quiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Find Your <span className="gradient-text">Perfect Pet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions and our AI will match you with your ideal companion!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card-premium rounded-3xl p-8 md:p-12 shadow-float">
            <AnimatePresence mode="wait">
              {!started && !result && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-6">🐾</div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Ready to find your perfect match?
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Take our quick 4-question quiz powered by AI to discover which pet suits your lifestyle best!
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => setStarted(true)}
                    className="shadow-glow"
                  >
                    Start Quiz
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              )}

              {started && !result && (
                <motion.div
                  key={`q-${currentQ}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Progress */}
                  <div className="flex gap-2 mb-8">
                    {questions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          idx <= currentQ ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    Question {currentQ + 1} of {questions.length}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-8">
                    {questions[currentQ].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQ].options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.pets)}
                        className="w-full p-4 text-left rounded-xl bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all flex items-center justify-between group"
                      >
                        <span className="font-medium">{option.text}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {result && resultData && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${resultData.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <span className="text-5xl">{resultData.emoji}</span>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    Your Perfect Match: {resultData.name}!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {resultData.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {resultData.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-1"
                      >
                        <Check className="w-3 h-3" />
                        {trait}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button variant="glass" onClick={reset}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Retake Quiz
                    </Button>
                    <Button variant="hero" asChild>
                      <a href="/adoption">
                        Adopt a {resultData.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
