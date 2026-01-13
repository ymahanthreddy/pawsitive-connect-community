import { motion } from "framer-motion";
import { 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Trophy, 
  Sparkles, 
  Users, 
  Heart,
  Bell
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Community Feed",
    description: "Share moments, ask questions, and connect with pet parents worldwide.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "AI Pet Assistant",
    description: "Get instant, AI-powered advice for pet care, health tips, and training.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: MapPin,
    title: "Local Discovery",
    description: "Find pet-friendly places, vets, groomers, and parks near you.",
    color: "bg-nature-green/20 text-nature-green",
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    description: "Discover and organize pet playdates, adoption events, and meetups.",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Trophy,
    title: "Pet of the Week",
    description: "Showcase your furry friend and vote for the cutest pets.",
    color: "bg-sunset-orange/20 text-sunset-orange",
  },
  {
    icon: Users,
    title: "Interest Groups",
    description: "Join breed-specific groups, training clubs, and special interest communities.",
    color: "bg-pet-purple/20 text-pet-purple",
  },
  {
    icon: Heart,
    title: "Pet Profiles",
    description: "Create detailed profiles for your pets with photos, health records, and milestones.",
    color: "bg-paw-pink/20 text-paw-pink",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get reminders for vet appointments, vaccinations, and community events.",
    color: "bg-sky-blue/20 text-sky-blue",
  },
];

export const Features = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Everything Your Pet{" "}
            <span className="gradient-text">Community</span> Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified platform designed to make pet parenting more connected, informed, and joyful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-medium">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
