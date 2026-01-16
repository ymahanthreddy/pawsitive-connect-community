import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Phone,
  MapPin,
  Clock,
  Navigation,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const emergencyVets = [
  {
    id: 1,
    name: "PetCare Emergency Hospital",
    address: "123 Vet Street, Downtown",
    phone: "+1 (555) 123-4567",
    distance: "0.8 km",
    rating: 4.9,
    open: true,
    hours: "24/7 Emergency",
    specialties: ["Surgery", "ICU", "Toxicology"],
  },
  {
    id: 2,
    name: "Animal Emergency Clinic",
    address: "456 Care Boulevard",
    phone: "+1 (555) 234-5678",
    distance: "1.2 km",
    rating: 4.8,
    open: true,
    hours: "24/7 Emergency",
    specialties: ["Critical Care", "Cardiology"],
  },
  {
    id: 3,
    name: "VetNow Urgent Care",
    address: "789 Health Avenue",
    phone: "+1 (555) 345-6789",
    distance: "2.5 km",
    rating: 4.7,
    open: true,
    hours: "6 AM - 12 AM",
    specialties: ["Urgent Care", "X-Ray"],
  },
];

const emergencyTips = [
  { emoji: "🩹", tip: "Keep a pet first-aid kit ready" },
  { emoji: "📞", tip: "Save emergency vet numbers" },
  { emoji: "🚗", tip: "Know the fastest route to the vet" },
  { emoji: "📋", tip: "Keep pet medical records accessible" },
];

export const EmergencyVet = () => {
  const [locating, setLocating] = useState(false);

  const handleLocate = () => {
    setLocating(true);
    setTimeout(() => setLocating(false), 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-orange-500/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 font-medium text-sm mb-4">
            <AlertCircle className="w-4 h-4" />
            Emergency Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Emergency <span className="text-rose-500">Vet Locator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find 24/7 emergency veterinary care near you. Every second counts when your pet needs help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Location Button & Tips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass-card-premium rounded-3xl p-6 mb-6">
              <h3 className="text-lg font-display font-bold mb-4">Quick Actions</h3>

              {/* 🔁 REDIRECT TO SERVICES */}
              <Button
                variant="hero"
                className="w-full mb-4 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600"
                onClick={handleLocate}
                disabled={locating}
                asChild
              >
                <Link to="/services">
                  {locating ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Navigation className="w-5 h-5 mr-2" />
                      </motion.div>
                      Locating...
                    </>
                  ) : (
                    <>
                      <MapPin className="w-5 h-5 mr-2" />
                      Find Nearest Vet
                    </>
                  )}
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+15551234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Hotline
                </a>
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <h4 className="font-semibold mb-4">🚨 Emergency Tips</h4>
              <div className="space-y-3">
                {emergencyTips.map((tip, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-lg">{tip.emoji}</span>
                    <span className="text-muted-foreground">{tip.tip}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vet List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {emergencyVets.map((vet, idx) => (
                <motion.div
                  key={vet.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card-premium rounded-2xl p-5 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-display font-bold text-lg">{vet.name}</h4>
                        {vet.open && (
                          <span className="px-2 py-0.5 rounded-full bg-nature-green/20 text-nature-green text-xs font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-nature-green animate-pulse" />
                            Open Now
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {vet.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {vet.hours}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500" />
                          {vet.rating}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{vet.address}</p>

                      <div className="flex flex-wrap gap-2">
                        {vet.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-1 rounded-lg bg-muted text-xs font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2">
                      <Button size="sm" variant="hero" asChild className="flex-1">
                        <a href={`tel:${vet.phone.replace(/\D/g, "")}`}>
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </a>
                      </Button>

                      {/* 🔁 REDIRECT TO SERVICES */}
                      <Button size="sm" variant="glass" className="flex-1" asChild>
                        <Link to="/services">
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Important:</strong> If your pet is experiencing a life-threatening emergency, 
                call ahead while traveling to the vet so they can prepare for your arrival.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
