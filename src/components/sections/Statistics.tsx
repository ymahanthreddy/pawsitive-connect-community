import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Heart, Calendar, MessageSquare, MapPin, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Active Members", color: "from-primary to-accent" },
  { icon: Heart, value: 120000, suffix: "+", label: "Pets Registered", color: "from-paw-pink to-primary" },
  { icon: MessageSquare, value: 2500000, suffix: "+", label: "Messages Shared", color: "from-secondary to-nature-green" },
  { icon: Calendar, value: 8500, suffix: "+", label: "Events Hosted", color: "from-accent to-sunset-orange" },
  { icon: MapPin, value: 15000, suffix: "+", label: "Local Services", color: "from-sky-blue to-secondary" },
  { icon: Award, value: 99, suffix: "%", label: "Happy Users", color: "from-pet-purple to-paw-pink" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-display">
      {formatNumber(count)}{suffix}
    </span>
  );
};

export const Statistics = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Growing <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our community of pet lovers is thriving and growing every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 text-center h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <div className="text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
