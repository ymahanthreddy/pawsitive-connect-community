import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, UserPlus, Star, PawPrint, Bell } from "lucide-react";

interface Activity {
  id: number;
  type: "like" | "comment" | "join" | "vote" | "adopt" | "post";
  user: string;
  action: string;
  target?: string;
  timestamp: Date;
}

const activityTemplates = [
  { type: "like" as const, users: ["Sarah M.", "Alex K.", "Jordan P.", "Casey R."], action: "liked", targets: ["Max's photo", "Luna's video", "a cute puppy post", "Bella's milestone"] },
  { type: "comment" as const, users: ["Mike T.", "Emma L.", "Chris D.", "Taylor S."], action: "commented on", targets: ["training tips post", "vet advice thread", "adoption story", "pet diet discussion"] },
  { type: "join" as const, users: ["New member", "Pet lover", "Dog enthusiast", "Cat parent"], action: "joined the community", targets: [] },
  { type: "vote" as const, users: ["Jamie H.", "Riley N.", "Morgan F.", "Drew B."], action: "voted for", targets: ["Max", "Luna", "Charlie", "Milo"] },
  { type: "adopt" as const, users: ["Happy family", "Lisa & John", "The Smiths", "Anna W."], action: "adopted", targets: ["a golden retriever", "a tabby cat", "a rescue bunny", "twin kittens"] },
  { type: "post" as const, users: ["Vet Dr. Kim", "Trainer Bob", "Pet Expert Sue", "Groomer Ann"], action: "shared", targets: ["health tips", "training advice", "nutrition guide", "grooming tutorial"] },
];

const iconMap = {
  like: Heart,
  comment: MessageCircle,
  join: UserPlus,
  vote: Star,
  adopt: PawPrint,
  post: Bell,
};

const colorMap = {
  like: "bg-rose-500",
  comment: "bg-blue-500",
  join: "bg-green-500",
  vote: "bg-amber-500",
  adopt: "bg-purple-500",
  post: "bg-teal-500",
};

export const LiveActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Generate initial activities
    const initial: Activity[] = Array.from({ length: 4 }, (_, i) => generateActivity(i));
    setActivities(initial);

    // Add new activity every 3-5 seconds
    const interval = setInterval(() => {
      const newActivity = generateActivity(Date.now());
      setActivities((prev) => [newActivity, ...prev.slice(0, 5)]);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  function generateActivity(id: number): Activity {
    const template = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
    const user = template.users[Math.floor(Math.random() * template.users.length)];
    const target = template.targets.length > 0
      ? template.targets[Math.floor(Math.random() * template.targets.length)]
      : undefined;

    return {
      id,
      type: template.type,
      user,
      action: template.action,
      target,
      timestamp: new Date(),
    };
  }

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/20 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nature-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nature-green" />
            </span>
            Live Community Activity
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            See What's Happening <span className="gradient-text">Right Now</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {activities.map((activity) => {
                const Icon = iconMap[activity.type];
                const bgColor = colorMap[activity.type];

                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: "auto" }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        <span className="text-muted-foreground">{activity.action}</span>
                        {activity.target && (
                          <span className="font-medium"> {activity.target}</span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">Just now</p>
                    </div>

                    <motion.div
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-lg"
                    >
                      {activity.type === "like" && "❤️"}
                      {activity.type === "comment" && "💬"}
                      {activity.type === "join" && "🎉"}
                      {activity.type === "vote" && "⭐"}
                      {activity.type === "adopt" && "🏠"}
                      {activity.type === "post" && "📢"}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
