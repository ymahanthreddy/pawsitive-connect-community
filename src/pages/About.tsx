import { motion } from "framer-motion";
import { PawPrint, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* ================= TEAM IMAGES =================
   Put images here:
   src/assets/team/member1.jpg
   src/assets/team/member2.jpg
   src/assets/team/member3.jpg
================================================ */
import member1 from "@/assets/team/member1.jpg";
import member2 from "@/assets/team/member2.jpg";
import member3 from "@/assets/team/member3.jpg";

/* ================= TEAM DATA ================= */
const TEAM = [
  {
    name: "Naman Gupta",
    grade: "Grade 11",
    photo: member1,
  },
  {
    name: "Mahanth Reddy",
    grade: "Grade 8",
    photo: member2,
  },
  {
    name: "Dhruva Mandavilli",
    grade: "Grade 10",
    photo: member3,
  },
];

/* ================= FEATURES ================= */
const FEATURES = [
  {
    icon: Users,
    title: "Community Driven",
    description:
      "A safe space where pet parents connect and learn from real experiences.",
  },
  {
    icon: Sparkles,
    title: "AI Assistance",
    description:
      "Responsible AI guidance for everyday pet care questions.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Clear disclaimers and emergency awareness built into the platform.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 relative aurora-bg">
        <section className="container mx-auto px-4 md:px-6">
          {/* ========== HERO ========== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border mb-6">
              <PawPrint className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">About Us</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
              A smarter way to care for pets
            </h1>
            
            

            <p className="text-muted-foreground text-lg">
              PawsitiveCommunity blends AI and community to help pet parents
              make informed, compassionate decisions.
            </p>
          </motion.div>

          {/* ========== MISSION ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card-premium shadow-float rounded-3xl p-10 max-w-4xl mx-auto mb-24 card-hover grain-overlay"
          >
            <h2 className="font-display text-2xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg">
              To support pet owners through an AI-assisted community where reliable guidance
              , shared experiences, and professional veterinary advice come together for better pet care.
            </p>
          </motion.div>

          {/* ========== TEAM ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-5xl mx-auto mb-24"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Meet the Team
            </h2>

            <p className="text-muted-foreground mb-12">
              The people behind PawsitiveCommunity
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {TEAM.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card-premium rounded-2xl p-6 text-center card-hover"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border border-muted"
                  />

                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {member.grade}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ========== FEATURES ========== */}
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card-premium rounded-2xl p-6 text-center card-hover"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4 animate-sparkle" />
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
