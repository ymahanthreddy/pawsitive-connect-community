import { motion } from "framer-motion";
import { Users, ArrowLeft, MessageSquare, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Groups = () => {
  const groups = [
    { name: "Golden Retriever Lovers", members: 3420, posts: 156, icon: "🐕" },
    { name: "Cat Health & Wellness", members: 2890, posts: 98, icon: "🐱" },
    { name: "Puppy Training 101", members: 1567, posts: 234, icon: "🦮" },
    { name: "Senior Pet Care", members: 987, posts: 67, icon: "🐾" },
    { name: "Exotic Pets Club", members: 756, posts: 45, icon: "🦜" },
    { name: "Pet Photography", members: 2134, posts: 312, icon: "📸" },
    { name: "Dog Agility Training", members: 1234, posts: 89, icon: "🏃" },
    { name: "Cat Behavior Tips", members: 1876, posts: 123, icon: "😺" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pet-purple to-paw-pink flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Interest Groups
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join specialized communities based on breed, interests, or pet care topics
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search groups..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="hero" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Group
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl mb-4">
                  {group.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {group.name}
                </h3>
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
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Groups;
