import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  Stethoscope,
  Scissors,
  Home,
  ShoppingBag,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* =========================================================
   SERVICE DATA — 6 CENTRES EACH
========================================================= */
const SERVICE_DATA: Record<string, any[]> = {
  Veterinarians: [
    { name: "Happy Paws Vet Clinic", distance: "0.8 km", phone: "+91 98765 43210", icon: "🏥" },
    { name: "City Pet Hospital", distance: "1.5 km", phone: "+91 91234 56789", icon: "🏥" },
    { name: "Care & Cure Vets", distance: "2.1 km", phone: "+91 90000 11122", icon: "🏥" },
    { name: "Animal Wellness Centre", distance: "2.9 km", phone: "+91 98888 77665", icon: "🏥" },
    { name: "GreenCross Vet", distance: "3.4 km", phone: "+91 94444 33322", icon: "🏥" },
    { name: "24x7 Pet Emergency", distance: "4.0 km", phone: "+91 91111 22233", icon: "🏥" },
  ],
  Groomers: [
    { name: "Fluffy Cuts", distance: "0.6 km", phone: "+91 99887 66554", icon: "✂️" },
    { name: "Pawfect Groomers", distance: "1.4 km", phone: "+91 93456 77889", icon: "✂️" },
    { name: "Fur & Shine Studio", distance: "2.0 km", phone: "+91 95555 88899", icon: "✂️" },
    { name: "The Groom Room", distance: "2.7 km", phone: "+91 96666 44455", icon: "✂️" },
    { name: "Urban Pet Salon", distance: "3.3 km", phone: "+91 97777 33311", icon: "✂️" },
    { name: "Luxury Paws Spa", distance: "4.1 km", phone: "+91 98888 99900", icon: "✂️" },
  ],
  "Pet Sitting": [
    { name: "HomeAway Pet Care", distance: "0.9 km", phone: "+91 90909 11122", icon: "🏠" },
    { name: "Happy Tails Boarding", distance: "1.6 km", phone: "+91 92222 33344", icon: "🏠" },
    { name: "PetNest Sitters", distance: "2.4 km", phone: "+91 93333 55566", icon: "🏠" },
    { name: "SafePaws Hostel", distance: "3.1 km", phone: "+91 94444 66677", icon: "🏠" },
    { name: "Cozy Pet Homes", distance: "3.8 km", phone: "+91 95555 77788", icon: "🏠" },
    { name: "Urban Pet Stay", distance: "4.5 km", phone: "+91 96666 88899", icon: "🏠" },
  ],
  "Pet Stores": [
    { name: "PetMart Central", distance: "0.7 km", phone: "+91 95555 44433", icon: "🛍️" },
    { name: "Paws & Tails Store", distance: "1.3 km", phone: "+91 98888 22211", icon: "🛍️" },
    { name: "Happy Pets Shop", distance: "2.1 km", phone: "+91 97777 11100", icon: "🛍️" },
    { name: "PetZone", distance: "2.9 km", phone: "+91 96666 00099", icon: "🛍️" },
    { name: "Furry Friends Mart", distance: "3.6 km", phone: "+91 95555 33322", icon: "🛍️" },
    { name: "All4Pets Superstore", distance: "4.2 km", phone: "+91 94444 22211", icon: "🛍️" },
  ],
};

const categories = [
  { icon: Stethoscope, label: "Veterinarians" },
  { icon: Scissors, label: "Groomers" },
  { icon: Home, label: "Pet Sitting" },
  { icon: ShoppingBag, label: "Pet Stores" },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* BACK */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nature-green to-secondary flex items-center justify-center mx-auto mb-4 shadow-glow">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Pet Services Near You
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quickly find trusted pet services around your location — from vets
              to groomers and boarding facilities.
            </p>
          </motion.div>

          {/* WHY SERVICES MATTER */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-muted-foreground text-lg">
              Access to reliable pet services ensures better health, safety, and
              quality of life for pets — especially during emergencies.
            </p>
          </div>

          {/* MAP */}
          <div className="glass-card rounded-3xl overflow-hidden mb-10 h-80">
            <iframe
              title="map"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=pet%20services%20near%20me&output=embed"
            />
          </div>

          {/* CATEGORY BUTTONS */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {categories.map((cat) => (
              <motion.button
                key={cat.label}
                whileHover={{ scale: 1.04 }}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.label ? null : cat.label)
                }
                className={`glass-card rounded-2xl p-6 text-left ${
                  activeCategory === cat.label ? "border-primary/40" : ""
                }`}
              >
                <cat.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display font-bold">{cat.label}</h3>
              </motion.button>
            ))}
          </div>

          {/* SERVICE LIST */}
          <AnimatePresence>
            {activeCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">
                  {activeCategory}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICE_DATA[activeCategory].map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="glass-card rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <h3 className="font-bold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.distance} away
                          </p>
                        </div>
                      </div>

                      <Button asChild variant="outline" size="sm" className="w-full mt-3">
                        <a href={`tel:${service.phone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call {service.phone}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TRUST NOTE */}
          <div className="max-w-3xl mx-auto mt-16 flex gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
            <p>
              Service listings are shown for demonstration purposes and represent
              verified local providers in a real-world deployment.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
