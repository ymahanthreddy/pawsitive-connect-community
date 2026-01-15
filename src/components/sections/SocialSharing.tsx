import { motion } from "framer-motion";
import { Share2, Gift, Users, ChevronRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const shareStats = [
  { label: "Members joined via referrals", value: "12,500+" },
  { label: "Average reward per referral", value: "50 points" },
  { label: "Top referrer this month", value: "Sarah M. (45)" },
];

const rewards = [
  { level: 1, referrals: 1, reward: "50 Community Points", icon: "🌟" },
  { level: 2, referrals: 5, reward: "Exclusive Badge", icon: "🏅" },
  { level: 3, referrals: 10, reward: "Premium Features (1 month)", icon: "👑" },
  { level: 4, referrals: 25, reward: "Lifetime VIP Status", icon: "💎" },
];

export const SocialSharing = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "pawsitive.app/join/USER123";

  const copyLink = () => {
    navigator.clipboard.writeText(`https://${referralLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 font-medium text-sm mb-4">
            <Gift className="w-4 h-4" />
            Referral Program
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Invite Friends, <span className="gradient-text">Earn Rewards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help grow our pet-loving community and unlock exclusive rewards for every friend you bring!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Referral Link Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium rounded-3xl p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Share2 className="w-6 h-6 text-primary" />
              Your Referral Link
            </h3>

            <div className="flex gap-2 mb-6">
              <div className="flex-1 p-4 rounded-xl bg-muted/50 border border-border font-mono text-sm truncate">
                {referralLink}
              </div>
              <Button onClick={copyLink} variant="hero" className="shrink-0">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-3 mb-8">
              <Button variant="outline" className="flex-1 bg-[#1DA1F2]/10 border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/20">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" className="flex-1 bg-[#4267B2]/10 border-[#4267B2]/30 hover:bg-[#4267B2]/20">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" className="flex-1 bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {shareStats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl bg-muted/50">
                  <p className="text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rewards Tiers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium rounded-3xl p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-secondary" />
              Reward Tiers
            </h3>

            <div className="space-y-4">
              {rewards.map((tier, idx) => (
                <motion.div
                  key={tier.level}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                    {tier.icon}
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold">Level {tier.level}</p>
                    <p className="text-sm text-muted-foreground">
                      {tier.referrals} referral{tier.referrals > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{tier.reward}</p>
                  </div>

                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">Your Progress</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You've referred <strong className="text-foreground">3 friends</strong> — 
                2 more to unlock the Exclusive Badge! 🏅
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
