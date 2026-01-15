import { motion } from "framer-motion";
import { Trophy, Award, Star, Crown, Heart, Zap, Target, Gift } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const badges = [
  { icon: Heart, name: "First Love", description: "Liked your first post", unlocked: true, color: "from-rose-400 to-pink-500" },
  { icon: Star, name: "Rising Star", description: "Got 10 likes on a post", unlocked: true, color: "from-amber-400 to-orange-500" },
  { icon: Zap, name: "Active Member", description: "7-day login streak", unlocked: true, color: "from-yellow-400 to-amber-500" },
  { icon: Award, name: "Helpful Hero", description: "Answered 5 questions", unlocked: false, color: "from-blue-400 to-cyan-500" },
  { icon: Trophy, name: "Top Contributor", description: "100 community points", unlocked: false, color: "from-emerald-400 to-green-500" },
  { icon: Crown, name: "Pet Champion", description: "Won Pet of the Week", unlocked: false, color: "from-purple-400 to-violet-500" },
  { icon: Target, name: "Goal Getter", description: "Complete your profile", unlocked: true, color: "from-cyan-400 to-blue-500" },
  { icon: Gift, name: "Generous Soul", description: "Donated to shelter", unlocked: false, color: "from-pink-400 to-rose-500" },
];

const leaderboard = [
  { rank: 1, name: "Sarah M.", points: 2450, avatar: "🐕", streak: 45 },
  { rank: 2, name: "Alex K.", points: 2120, avatar: "🐱", streak: 32 },
  { rank: 3, name: "Jordan P.", points: 1890, avatar: "🐰", streak: 28 },
  { rank: 4, name: "Casey R.", points: 1650, avatar: "🦜", streak: 21 },
  { rank: 5, name: "You", points: 850, avatar: "🐾", streak: 7, isUser: true },
];

export const Gamification = () => {
  const userPoints = 850;
  const nextLevel = 1000;
  const progress = (userPoints / nextLevel) * 100;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 paw-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-medium text-sm mb-4">
            <Trophy className="w-4 h-4" />
            Gamification
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Earn Badges & <span className="gradient-text">Level Up</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay engaged, help others, and unlock achievements as you grow in our community!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Badges Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-bold">Your Badges</h3>
              <span className="text-sm text-muted-foreground">
                {badges.filter((b) => b.unlocked).length}/{badges.length} unlocked
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {badges.map((badge, idx) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={badge.unlocked ? { scale: 1.1, y: -5 } : {}}
                  className={`relative group ${!badge.unlocked && "opacity-40"}`}
                >
                  <div
                    className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg ${
                      badge.unlocked ? "cursor-pointer" : "grayscale"
                    }`}
                  >
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-popover text-popover-foreground text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                      <p className="font-semibold">{badge.name}</p>
                      <p className="text-muted-foreground">{badge.description}</p>
                    </div>
                  </div>

                  {!badge.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg">🔒</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress to next level */}
            <div className="mt-8 p-4 rounded-2xl bg-muted/50">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Level 3 Progress</span>
                <span className="text-muted-foreground">{userPoints}/{nextLevel} XP</span>
              </div>
              <Progress value={progress} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {nextLevel - userPoints} XP to reach Level 4 🎯
              </p>
            </div>
          </motion.div>

          {/* Leaderboard Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-bold">Leaderboard</h3>
              <span className="text-sm text-muted-foreground">This Week</span>
            </div>

            <div className="space-y-3">
              {leaderboard.map((user, idx) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                    user.isUser
                      ? "bg-primary/10 border border-primary/30"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                      user.rank === 1
                        ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white"
                        : user.rank === 2
                        ? "bg-gradient-to-br from-gray-300 to-gray-400 text-white"
                        : user.rank === 3
                        ? "bg-gradient-to-br from-amber-600 to-orange-700 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {user.rank <= 3 ? ["🥇", "🥈", "🥉"][user.rank - 1] : user.rank}
                  </div>

                  <div className="text-2xl">{user.avatar}</div>

                  <div className="flex-1">
                    <p className="font-semibold">
                      {user.name}
                      {user.isUser && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                          You
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      🔥 {user.streak} day streak
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-primary">{user.points.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 text-center">
              <p className="text-sm">
                🚀 Keep engaging to climb the ranks!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
