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
import { Link } from "react-router-dom";

/* =========================================================
   FEATURES DATA — FIXED LINKS
========================================================= */
const features = [
  {
    icon: MessageSquare,
    title: "Community Feed",
    description: "Share moments, ask questions, and connect with pet parents worldwide.",
    gradient: "from-primary via-primary to-accent",
    bgGradient: "from-primary/10 to-accent/10",
    link: "/features/community-feed",
  },
  {
    icon: Sparkles,
    title: "AI Pet Assistant",
    description: "Get instant, AI-powered advice for pet care, health tips, and training.",
    gradient: "from-secondary via-secondary to-nature-green",
    bgGradient: "from-secondary/10 to-nature-green/10",
    link: "/features/ai-assistant",
  },
  {
    icon: MapPin,
    title: "Local Discovery",
    description: "Find pet-friendly places, vets, groomers, and parks near you.",
    gradient: "from-nature-green via-nature-green to-secondary",
    bgGradient: "from-nature-green/10 to-secondary/10",
    link: "/features/local-discovery",
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    description: "Discover and organize pet playdates, adoption events, and meetups.",
    gradient: "from-accent via-accent to-sunset-orange",
    bgGradient: "from-accent/10 to-sunset-orange/10",
    link: "/features/events",
  },
  {
    icon: Trophy,
    title: "Pet of the Week",
    description: "Showcase your furry friend and vote for the cutest pets.",
    gradient: "from-sunset-orange via-sunset-orange to-paw-pink",
    bgGradient: "from-sunset-orange/10 to-paw-pink/10",
    link: "/features/pet-of-the-week",
  },
  {
    icon: Users,
    title: "Interest Groups",
    description: "Join breed-specific groups, training clubs, and special interest communities.",
    gradient: "from-pet-purple via-pet-purple to-paw-pink",
    bgGradient: "from-pet-purple/10 to-paw-pink/10",
    link: "/features/groups",
  },
  {
    icon: Heart,
    title: "Pet Profiles",
    description: "Create detailed profiles for your pets with photos, health records, and milestones.",
    gradient: "from-paw-pink via-paw-pink to-primary",
    bgGradient: "from-paw-pink/10 to-primary/10",
    link: "/features/pet-profiles",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get reminders for vet appointments, vaccinations, and community events.",
    gradient: "from-sky-blue via-sky-blue to-secondary",
    bgGradient: "from-sky-blue/10 to-secondary/10",
    link: "/features/notifications",
  },
];

/* =========================================================
   ANIMATION VARIANTS (UNCHANGED)
========================================================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 backdrop-blur-sm font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="gradient-text">Powerful Features</span>
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Everything Your Pet{" "}
            <span className="gradient-text-animated">Community</span> Needs
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified platform designed to make pet parenting more connected,
            informed, and joyful.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Link to={feature.link}>
                <div className="h-full glass-card-premium rounded-3xl p-7 hover:shadow-glow relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition`} />

                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-display font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
