import { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowLeft, MessageSquare, Search, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ALL_GROUPS = [
  { name: "Golden Retriever Lovers", members: 3420, posts: 156, icon: "🐕", trending: true },
  { name: "Cat Health & Wellness", members: 2890, posts: 98, icon: "🐱" },
  { name: "Puppy Training 101", members: 1567, posts: 234, icon: "🦮", trending: true },
  { name: "Senior Pet Care", members: 987, posts: 67, icon: "🐾" },
  { name: "Exotic Pets Club", members: 756, posts: 45, icon: "🦜" },
  { name: "Pet Photography", members: 2134, posts: 312, icon: "📸", trending: true },
  { name: "Dog Agility Training", members: 1234, posts: 89, icon: "🏃" },
  { name: "Cat Behavior Tips", members: 1876, posts: 123, icon: "😺" },
  { name: "First-Time Pet Parents", members: 3210, posts: 210, icon: "🐶", trending: true },
  { name: "Rescue & Adoption Support", members: 2765, posts: 198, icon: "❤️" },
  { name: "Pet Nutrition & Diet", members: 1987, posts: 144, icon: "🥩" },
  { name: "Small Breed Dog Club", members: 1456, posts: 92, icon: "🐩" },
  { name: "Bird Lovers Community", members: 832, posts: 61, icon: "🦉" },
  { name: "Aquatic Pets Hub", members: 674, posts: 38, icon: "🐠" },
];

const Groups = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredGroups = ALL_GROUPS.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pet-purple to-paw-pink flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Interest Groups
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn, share, and grow with pet parents who care about the same things you do.
            </p>
          </motion.div>

          {/* WHY GROUPS MATTER */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-muted-foreground text-lg">
              Groups help pet parents exchange real-world advice, discover best practices,
              and support each other through every stage of pet ownership.
            </p>
          </div>

          {/* SEARCH */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search groups..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* GROUPS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGroups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl">
                    {group.icon}
                  </div>

                  {group.trending && (
                    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
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
                  onClick={() => navigate("/auth")}
                >
                  Join Group
                </Button>
              </motion.div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredGroups.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No groups found — try a different keyword 🐾
            </p>
          )}

          {/* SAFETY / ACCESS NOTE */}
          <div className="max-w-3xl mx-auto mt-16 flex gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
            <p>
              Joining groups requires sign-in to ensure safe, respectful community interactions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Groups;
