import { motion } from "framer-motion";
import { 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Trophy, 
  Sparkles, 
  Users, 
  Heart,
  Bell,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Community Feed",
    description: "Share moments, ask questions, and connect with pet parents worldwide.",
    gradient: "from-primary via-primary to-accent",
    bgGradient: "from-primary/10 to-accent/10",
  },
  {
    icon: Sparkles,
    title: "AI Pet Assistant",
    description: "Get instant, AI-powered advice for pet care, health tips, and training.",
    gradient: "from-secondary via-secondary to-nature-green",
    bgGradient: "from-secondary/10 to-nature-green/10",
  },
  {
    icon: MapPin,
    title: "Local Discovery",
    description: "Find pet-friendly places, vets, groomers, and parks near you.",
    gradient: "from-nature-green via-nature-green to-secondary",
    bgGradient: "from-nature-green/10 to-secondary/10",
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    description: "Discover and organize pet playdates, adoption events, and meetups.",
    gradient: "from-accent via-accent to-sunset-orange",
    bgGradient: "from-accent/10 to-sunset-orange/10",
  },
  {
    icon: Trophy,
    title: "Pet of the Week",
    description: "Showcase your furry friend and vote for the cutest pets.",
    gradient: "from-sunset-orange via-sunset-orange to-paw-pink",
    bgGradient: "from-sunset-orange/10 to-paw-pink/10",
  },
  {
    icon: Users,
    title: "Interest Groups",
    description: "Join breed-specific groups, training clubs, and special interest communities.",
    gradient: "from-pet-purple via-pet-purple to-paw-pink",
    bgGradient: "from-pet-purple/10 to-paw-pink/10",
  },
  {
    icon: Heart,
    title: "Pet Profiles",
    description: "Create detailed profiles for your pets with photos, health records, and milestones.",
    gradient: "from-paw-pink via-paw-pink to-primary",
    bgGradient: "from-paw-pink/10 to-primary/10",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get reminders for vet appointments, vaccinations, and community events.",
    gradient: "from-sky-blue via-sky-blue to-secondary",
    bgGradient: "from-sky-blue/10 to-secondary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const Features = () => {
  return (
    <section id="community" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora-bg opacity-50" />
      <div className="absolute inset-0 paw-pattern opacity-30" />
      
      {/* Decorative orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 backdrop-blur-sm font-semibold text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="gradient-text">Powerful Features</span>
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Everything Your Pet{" "}
            <span className="relative inline-block">
              <span className="gradient-text-animated">Community</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.path
                  d="M0 6 Q 50 0, 100 6 T 200 6"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>{" "}
            Needs
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A unified platform designed to make pet parenting more connected, informed, and joyful.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className={`h-full glass-card-premium rounded-3xl p-7 transition-all duration-500 hover:shadow-glow relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div 
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </motion.div>
                
                {/* Content */}
                <h3 className="relative text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Learn more link */}
                <motion.div 
                  className="relative flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
                
                {/* Corner decoration */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
