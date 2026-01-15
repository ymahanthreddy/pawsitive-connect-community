import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accessibility as AccessibilityIcon, 
  Eye, 
  Volume2, 
  Type, 
  Contrast, 
  MousePointer2,
  Check
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const accessibilityFeatures = [
  {
    icon: Type,
    title: "Large Text Mode",
    description: "Increase text size for better readability",
    key: "largeText",
  },
  {
    icon: Contrast,
    title: "High Contrast",
    description: "Enhanced color contrast for visibility",
    key: "highContrast",
  },
  {
    icon: MousePointer2,
    title: "Reduced Motion",
    description: "Minimize animations for sensitive users",
    key: "reducedMotion",
  },
  {
    icon: Volume2,
    title: "Screen Reader Optimized",
    description: "Full ARIA support for assistive tech",
    key: "screenReader",
    enabled: true,
  },
  {
    icon: Eye,
    title: "Focus Indicators",
    description: "Enhanced focus states for keyboard navigation",
    key: "focusIndicators",
    enabled: true,
  },
];

export const Accessibility = () => {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    largeText: false,
    highContrast: false,
    reducedMotion: false,
    screenReader: true,
    focusIndicators: true,
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <AccessibilityIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Accessibility First</h3>
                <p className="text-muted-foreground">
                  Pawsitive Community is built for everyone
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {feature.enabled ? (
                    <div className="flex items-center gap-1 text-nature-green">
                      <Check className="w-4 h-4" />
                      <span className="text-xs font-medium">Built-in</span>
                    </div>
                  ) : (
                    <Switch
                      checked={settings[feature.key]}
                      onCheckedChange={() => toggleSetting(feature.key)}
                      aria-label={`Toggle ${feature.title}`}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">♿</span>
                <div>
                  <p className="font-semibold">WCAG 2.1 AA Compliant</p>
                  <p className="text-sm text-muted-foreground">
                    Our platform meets international accessibility standards, ensuring 
                    everyone can connect with the pet community regardless of ability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
