import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, Loader2 } from "lucide-react";
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
    content: "Hello! I'm PawAI, your intelligent pet care assistant. I can help with training tips, health advice, nutrition guidance, and more. What would you like to know about your furry friend?",
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        "What should I feed my new puppy?":
          "Great question! For puppies, I recommend high-quality puppy food appropriate for their breed size. Feed them 3-4 times daily until 6 months, then 2-3 times. Look for foods with protein as the first ingredient. Avoid grapes, chocolate, and onions. Would you like specific brand recommendations?",
        "How do I train my cat to use a scratching post?":
          "Here's my proven method: 1) Place the post near where they currently scratch. 2) Rub catnip on it to attract them. 3) Use positive reinforcement with treats when they use it. 4) Redirect them gently when they scratch elsewhere. Most cats learn within 1-2 weeks!",
        "My dog is scared of thunder, what can I do?":
          "Thunder anxiety is common! Try these: 1) Create a safe space with familiar bedding. 2) Use calming music or white noise. 3) Consider a ThunderShirt for gentle pressure. 4) Stay calm yourself - dogs pick up on our anxiety. 5) Distract with treats or play. For severe cases, consult your vet about calming supplements.",
        "Best exercises for an indoor cat?":
          "Indoor cats need 15-20 minutes of daily exercise! Try: 1) Interactive feather wands. 2) Laser pointer sessions (end with a real toy). 3) Puzzle feeders for mental stimulation. 4) Cat trees for climbing. 5) Hide treats around the house. Rotate toys weekly to keep things interesting!",
      };

      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content:
          aiResponses[messageText] ||
          "That's a great question about pet care! Based on my knowledge, I'd recommend consulting with your local veterinarian for personalized advice. In the meantime, I can help with general tips about nutrition, training, and behavior. What specific aspect would you like to explore?",
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-30" />
      
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Meet <span className="gradient-text">PawAI</span> Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your 24/7 intelligent companion for all pet-related questions. Powered by advanced AI to provide personalized advice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Chat Container */}
          <div className="glass-card rounded-3xl overflow-hidden shadow-float">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">PawAI Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-nature-green animate-pulse" />
                    <span className="text-sm text-muted-foreground">Online & Ready to Help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
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
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        message.type === "ai"
                          ? "bg-gradient-to-br from-primary to-secondary"
                          : "bg-muted"
                      }`}
                    >
                      {message.type === "ai" ? (
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <User className="w-4 h-4 text-foreground" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.type === "ai"
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggested Questions */}
            <div className="px-4 py-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask anything about your pet..."
                  className="flex-1 bg-muted rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
