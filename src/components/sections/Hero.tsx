import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, Users, Sparkles, Star, Play, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.jpg";
import { useRef } from "react";

const stats = [
  { value: "50K+", label: "Pet Parents", icon: Users, color: "from-primary to-accent" },
  { value: "120K+", label: "Pets Registered", icon: Heart, color: "from-paw-pink to-primary" },
  { value: "5K+", label: "Daily Posts", icon: Star, color: "from-accent to-sunset-orange" },
];

const floatingPets = ["🐕", "🐈", "🐹", "🦜", "🐰", "🦮", "🐈‍⬛"];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora mesh gradient background */}
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 paw-pattern opacity-40" />

      {/* Animated gradient orbs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 45, 0],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary) / 0.25) 0%, transparent 70%)",
          }}
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [0, -45, 0],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating pet emojis with better distribution */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingPets.map((pet, index) => (
          <motion.span
            key={index}
            className="absolute text-4xl md:text-5xl drop-shadow-lg"
            style={{
              left: `${10 + (index * 13)}%`,
              top: `${15 + (index % 4) * 22}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [-15, 15, -15],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          >
            {pet}
          </motion.span>
        ))}
      </div>

      <motion.div style={{ scale }} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-accent/10 to-secondary/15 border border-primary/20 backdrop-blur-sm mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                The Connected Pet Ecosystem
              </span>
              <Zap className="w-4 h-4 text-accent" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-8"
            >
              Your Digital{" "}
              <span className="relative inline-block">
                <span className="gradient-text-animated">Town Square</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>{" "}
              <br className="hidden lg:block" />
              for Pet Parents
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Connect, share, and support fellow pet lovers in a unified community. 
              Get <span className="text-primary font-semibold">AI-powered advice</span>, discover local events, 
              and celebrate your furry friends together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden shadow-glow">
                <span className="relative z-10 flex items-center">
                  Join the Community
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="glass" size="xl" className="group backdrop-blur-xl">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 mt-14"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.15, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glass-card-premium px-5 py-4 rounded-2xl cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-2xl md:text-3xl font-bold text-foreground block">
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-[2rem] blur-2xl opacity-60" />
              
              {/* Main Image Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-float border border-white/20 dark:border-white/10"
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={heroPets}
                  alt="Happy pets community"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -bottom-8 -left-8 glass-card-premium p-5 rounded-2xl shadow-float"
                initial={{ opacity: 0, y: 30, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.08, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                    <Heart className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Active Community</p>
                    <p className="text-sm text-muted-foreground">Join 50K+ members</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 glass-card-premium p-5 rounded-2xl shadow-float"
                initial={{ opacity: 0, y: -30, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.08, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-nature-green flex items-center justify-center animate-glow-pulse">
                    <Sparkles className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">AI-Powered</p>
                    <p className="text-sm text-muted-foreground">Smart pet advice</p>
                  </div>
                </div>
              </motion.div>

              {/* Live indicator */}
              <motion.div
                className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nature-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nature-green" />
                </span>
                <span className="text-xs font-medium text-foreground">Live Community</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
