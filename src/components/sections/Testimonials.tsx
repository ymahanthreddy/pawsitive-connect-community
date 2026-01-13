import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Amanda Rodriguez",
    role: "Dog Mom to Luna & Bella",
    avatar: "AR",
    content: "PawConnect changed how I care for my dogs! The AI assistant helped me understand Luna's anxiety issues, and I found an amazing support group for reactive dogs.",
    rating: 5,
    pets: "2 Golden Retrievers",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Cat Dad to Mr. Whiskers",
    avatar: "MT",
    content: "Finally, a platform that gets cat people! The community is amazing, and I've discovered so many local cat cafes and adoption events through the app.",
    rating: 5,
    pets: "1 British Shorthair",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Multi-pet Parent",
    avatar: "SC",
    content: "Managing 3 dogs and 2 cats was chaos until I found PawConnect. The health reminders and vet scheduling features are absolute lifesavers!",
    rating: 5,
    pets: "3 Dogs, 2 Cats",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "First-time Pet Owner",
    avatar: "JW",
    content: "As a new puppy parent, I was overwhelmed. The AI answered all my questions, and the community made me feel supported every step of the way.",
    rating: 5,
    pets: "1 Labrador Puppy",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm mb-4">
            <Star className="w-4 h-4 fill-accent text-accent" />
            Loved by Pet Parents
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy pet parents who've found their tribe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group perspective-1000"
            >
              <div className="relative glass-card rounded-2xl p-6 h-full border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 ml-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.pets}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
