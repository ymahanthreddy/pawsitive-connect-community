import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Clock,
  Phone,
  Stethoscope,
  Scissors,
  Home,
  ShoppingBag,
  Dumbbell,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* ================= CATEGORIES ================= */
const CATEGORIES = [
  { icon: Stethoscope, label: "Veterinarians" },
  { icon: Scissors, label: "Groomers" },
  { icon: Home, label: "Pet Sitting" },
  { icon: ShoppingBag, label: "Pet Stores" },
  { icon: Dumbbell, label: "Training" },
  { icon: Camera, label: "Photography" },
];

/* ================= SERVICES ================= */
const SERVICES = [
  {
    name: "Happy Paws Vet Clinic",
    type: "Veterinarians",
    rating: 4.9,
    reviews: 234,
    distance: "0.6 km",
    hours: "Open until 8 PM",
    phone: "+919876543210",
    icon: "🏥",
  },
  {
    name: "Fluffy Tails Grooming",
    type: "Groomers",
    rating: 4.8,
    reviews: 189,
    distance: "1.1 km",
    hours: "Open until 6 PM",
    phone: "+919988776655",
    icon: "✂️",
  },
  {
    name: "Pet Paradise Boarding",
    type: "Pet Sitting",
    rating: 4.9,
    reviews: 156,
    distance: "2.0 km",
    hours: "24/7",
    phone: "+919922334455",
    icon: "🏠",
  },
  {
    name: "Paws & Tails Store",
    type: "Pet Stores",
    rating: 4.7,
    reviews: 142,
    distance: "1.8 km",
    hours: "Open until 9 PM",
    phone: "+919944556677",
    icon: "🛍️",
  },
  {
    name: "Elite K9 Training",
    type: "Training",
    rating: 4.8,
    reviews: 98,
    distance: "2.5 km",
    hours: "By appointment",
    phone: "+919933221100",
    icon: "🐕",
  },
  {
    name: "Pawtraits Studio",
    type: "Photography",
    rating: 4.9,
    reviews: 64,
    distance: "3.2 km",
    hours: "Open until 7 PM",
    phone: "+919900112233",
    icon: "📸",
  },
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visibleServices = (activeCategory
    ? SERVICES.filter((s) => s.type === activeCategory)
    : SERVICES
  ).slice(0, 3); // 👈 LIMIT TO 3

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/20 text-nature-green text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Local Services
          </span>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Pet Services <span className="gradient-text">Near You</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover trusted vets, groomers, trainers, and more — nearby and reliable.
          </p>
        </motion.div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.label}
              variant={activeCategory === cat.label ? "hero" : "outline"}
              size="sm"
              onClick={() =>
                setActiveCategory(
                  activeCategory === cat.label ? null : cat.label
                )
              }
              className="flex items-center gap-2 rounded-xl"
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </Button>
          ))}
        </div>

        {/* ================= MAP + LIST ================= */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* MAP (COMPACT) */}
          <div className="glass-card rounded-3xl overflow-hidden h-[260px]">
            <iframe
              title="Pet services near me"
              src="https://www.google.com/maps?q=pet%20services%20near%20me&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* SERVICES LIST */}
          <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-2xl p-3 flex items-center gap-4 hover:shadow-glow transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-xl">
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold">{service.name}</h4>
                  <p className="text-xs text-muted-foreground">{service.type}</p>

                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs font-medium">
                        {service.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({service.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {service.distance}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-nature-green mt-1">
                    <Clock className="w-3 h-3" />
                    {service.hours}
                  </div>
                </div>

                <Button asChild variant="ghost" size="icon">
                  <a href={`tel:${service.phone}`}>
                    <Phone className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}

            {/* CTA */}
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/services">
                <MapPin className="w-4 h-4 mr-2" />
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
