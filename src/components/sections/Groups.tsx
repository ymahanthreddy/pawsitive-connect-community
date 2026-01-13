import { motion } from "framer-motion";
import { Users, ArrowRight, MessageSquare, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const groups = [
  {
    name: "Golden Retriever Lovers",
    members: 3420,
    posts: 156,
    description: "For all golden retriever enthusiasts!",
    icon: "🐕",
    isPrivate: false,
  },
  {
    name: "Cat Health & Wellness",
    members: 2890,
    posts: 98,
    description: "Tips and discussions about feline health.",
    icon: "🐱",
    isPrivate: false,
  },
  {
    name: "Puppy Training 101",
    members: 1567,
    posts: 234,
    description: "Help and advice for new puppy parents.",
    icon: "🦮",
    isPrivate: false,
  },
  {
    name: "Senior Pet Care",
    members: 987,
    posts: 67,
    description: "Support for owners of aging pets.",
    icon: "🐾",
    isPrivate: true,
  },
  {
    name: "Exotic Pets Club",
    members: 756,
    posts: 45,
    description: "Birds, reptiles, and unusual companions.",
    icon: "🦜",
    isPrivate: false,
  },
  {
    name: "Pet Photography",
    members: 2134,
    posts: 312,
    description: "Share your best pet photos!",
    icon: "📸",
    isPrivate: false,
  },
];

export const Groups = () => {
  return (
    <section id="groups" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pet-purple/20 text-pet-purple font-medium text-sm mb-4">
            <Users className="w-4 h-4" />
            Interest Groups
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Find Your <span className="gradient-text">Tribe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join specialized communities based on breed, interests, or pet care topics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl">
                  {group.icon}
                </div>
                {group.isPrivate && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    Private
                  </div>
                )}
              </div>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {group.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {group.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {group.members.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {group.posts} posts/week
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Join Group
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Explore All Groups
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
