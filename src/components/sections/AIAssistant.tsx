import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestedQuestions = [
  "What should I feed my new puppy?",
  "How do I train my cat to use a scratching post?",
  "My dog is scared of thunder, what can I do?",
  "Best exercises for an indoor cat?",
];

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "ai",
    content:
      "Hello! I'm PawAI, your intelligent pet care assistant. I can help with training tips, health advice, nutrition guidance, and more. What would you like to know about your furry friend?",
  },
];

export const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: messageText,
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        "What should I feed my new puppy?":
          "Great question! For puppies, I recommend high-quality puppy food appropriate for their breed size. Feed them 3–4 times daily until 6 months, then 2–3 times. Always avoid chocolate, grapes, and onions.",
        "How do I train my cat to use a scratching post?":
          "Place the scratching post near current scratching spots, apply catnip, and reward positive behavior. Consistency is key!",
        "My dog is scared of thunder, what can I do?":
          "Thunder anxiety is common. Create a safe space, use calming sounds, and consider gentle pressure wraps. For severe anxiety, consult a vet.",
        "Best exercises for an indoor cat?":
          "Interactive toys, climbing trees, puzzle feeders, and short daily play sessions help keep indoor cats healthy and stimulated.",
      };

      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content:
          aiResponses[messageText] ||
          "That's a great pet care question! I can provide general guidance, but for medical concerns, always consult a professional veterinarian.",
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-30" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Assistance
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Meet <span className="gradient-text">PawAI</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PawAI uses Generative AI to provide instant, personalized guidance
            for everyday pet care — from nutrition and training to behavior and
            wellness.
          </p>
        </motion.div>

        {/* AI VALUE EXPLANATION */}
        <div className="max-w-4xl mx-auto mb-10 grid md:grid-cols-3 gap-4 text-center">
          <div className="glass-card rounded-2xl p-4">
            <h4 className="font-semibold mb-1">Instant Advice</h4>
            <p className="text-sm text-muted-foreground">
              Get answers to common pet questions in seconds, anytime.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-4">
            <h4 className="font-semibold mb-1">Personalized Guidance</h4>
            <p className="text-sm text-muted-foreground">
              Tailored suggestions based on real pet care scenarios.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-4">
            <h4 className="font-semibold mb-1">Trusted Knowledge</h4>
            <p className="text-sm text-muted-foreground">
              AI-assisted responses designed to support responsible pet ownership.
            </p>
          </div>
        </div>

        {/* CHAT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-3xl overflow-hidden shadow-float">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold">PawAI Assistant</h3>
                  <span className="text-sm text-muted-foreground">
                    Online • AI-Powered
                  </span>
                </div>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        message.type === "ai"
                          ? "bg-gradient-to-br from-primary to-secondary"
                          : "bg-muted"
                      }`}
                    >
                      {message.type === "ai" ? (
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>

                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.type === "ai"
                          ? "bg-muted"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* SUGGESTIONS */}
            <div className="px-4 py-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Try asking:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask anything about your pet..."
                  className="flex-1 bg-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button onClick={() => handleSend()} disabled={!input || isTyping}>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SAFETY DISCLAIMER */}
        <div className="max-w-3xl mx-auto mt-6 flex items-start gap-3 text-xs text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
          <p>
            PawAI provides general guidance using Generative AI and does not
            replace professional veterinary advice. Always consult a qualified
            veterinarian for medical concerns.
          </p>
        </div>
      </div>
    </section>
  );
};
