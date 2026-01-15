import { motion } from "framer-motion";
import { Activity, Pill, Calendar, TrendingUp, Heart, Weight, Droplet, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const healthMetrics = [
  { icon: Weight, label: "Weight", value: "12.5 kg", status: "healthy", trend: "+0.2 kg", color: "bg-blue-500" },
  { icon: Activity, label: "Activity", value: "45 min", status: "good", trend: "+15%", color: "bg-green-500" },
  { icon: Droplet, label: "Hydration", value: "Good", status: "optimal", trend: "Stable", color: "bg-cyan-500" },
  { icon: Heart, label: "Mood", value: "Happy", status: "excellent", trend: "⬆️", color: "bg-pink-500" },
];

const upcomingReminders = [
  { icon: Pill, title: "Heartworm Prevention", date: "Tomorrow", urgent: false },
  { icon: Calendar, title: "Annual Checkup", date: "In 5 days", urgent: false },
  { icon: AlertTriangle, title: "Vaccination Due", date: "In 2 weeks", urgent: true },
];

const weeklyActivity = [
  { day: "Mon", value: 85 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 95 },
  { day: "Sat", value: 100 },
  { day: "Sun", value: 75 },
];

export const PetHealthTracker = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-nature-green/5 via-transparent to-sky-blue/5" />
      <div className="absolute inset-0 paw-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/20 text-nature-green font-medium text-sm mb-4">
            <Activity className="w-4 h-4" />
            Health Tracking
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Pet <span className="gradient-text">Health Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your pet's health metrics, set reminders, and stay on top of their wellness journey.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Pet Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-premium rounded-3xl p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl shadow-lg"
              >
                🐕
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold">Max</h3>
                <p className="text-muted-foreground">Golden Retriever • 3 years old</p>
                <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-nature-green/20 text-nature-green text-sm font-medium">
                    ✓ Healthy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Active Today
                  </span>
                </div>
              </div>
              <div className="md:ml-auto text-center">
                <p className="text-4xl font-bold gradient-text">92</p>
                <p className="text-sm text-muted-foreground">Health Score</p>
              </div>
            </div>

            {/* Health Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {healthMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-2xl bg-muted/50 border border-border/50"
                >
                  <div className={`w-10 h-10 rounded-xl ${metric.color} flex items-center justify-center mb-3`}>
                    <metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-xl font-bold">{metric.value}</p>
                  <p className="text-xs text-nature-green flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    {metric.trend}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Weekly Activity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Weekly Activity
              </h4>

              <div className="flex items-end justify-between h-40 gap-2">
                {weeklyActivity.map((day, idx) => (
                  <motion.div
                    key={day.day}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${day.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/60 transition-all ${
                        day.value >= 90 ? "shadow-glow" : ""
                      }`}
                      style={{ height: "100%" }}
                    />
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-primary/10 text-center">
                <p className="text-sm">
                  🎯 <strong>Goal:</strong> 60 min daily activity • <strong>Average:</strong> 82%
                </p>
              </div>
            </motion.div>

            {/* Reminders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Reminders
              </h4>

              <div className="space-y-3">
                {upcomingReminders.map((reminder, idx) => (
                  <motion.div
                    key={reminder.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                      reminder.urgent
                        ? "bg-amber-500/10 border border-amber-500/30"
                        : "bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        reminder.urgent ? "bg-amber-500" : "bg-primary"
                      }`}
                    >
                      <reminder.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{reminder.title}</p>
                      <p className="text-sm text-muted-foreground">{reminder.date}</p>
                    </div>
                    {reminder.urgent && (
                      <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
                        Upcoming
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  📱 Get push notifications for all reminders
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
