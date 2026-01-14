import { motion } from "framer-motion";
import { MapPin, Star, Clock, Phone, Stethoscope, Scissors, Home, ShoppingBag, Dumbbell, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceCategories = [
  { icon: Stethoscope, label: "Veterinarians", count: 234, color: "from-secondary to-nature-green" },
  { icon: Scissors, label: "Groomers", count: 156, color: "from-paw-pink to-primary" },
  { icon: Home, label: "Pet Sitting", count: 89, color: "from-accent to-sunset-orange" },
  { icon: ShoppingBag, label: "Pet Stores", count: 112, color: "from-sky-blue to-secondary" },
  { icon: Dumbbell, label: "Training", count: 67, color: "from-pet-purple to-paw-pink" },
  { icon: Camera, label: "Photography", count: 45, color: "from-primary to-accent" },
];

const nearbyServices = [
  {
    id: 1,
    name: "Happy Paws Vet Clinic",
    type: "Veterinarian",
    rating: 4.9,
    reviews: 234,
    distance: "0.5 mi",
    hours: "Open until 8 PM",
    image: "🏥",
  },
  {
    id: 2,
    name: "Fluffy Tails Grooming",
    type: "Groomer",
    rating: 4.8,
    reviews: 189,
    distance: "1.2 mi",
    hours: "Open until 6 PM",
    image: "✂️",
  },
  {
    id: 3,
    name: "Pet Paradise Hotel",
    type: "Pet Sitting",
    rating: 4.9,
    reviews: 156,
    distance: "2.1 mi",
    hours: "24/7",
    image: "🏨",
  },
];

export const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 paw-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/20 text-nature-green font-medium text-sm mb-4">
            <MapPin className="w-4 h-4" />
            Local Discovery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Find <span className="gradient-text">Pet Services</span> Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover trusted veterinarians, groomers, pet sitters, and more in your neighborhood.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-transparent hover:border-primary/30 transition-all group"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <category.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{category.label}</p>
                <p className="text-xs text-muted-foreground">{category.count} nearby</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Map Preview */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-primary/10">
              {/* Stylized map */}
              <div className="w-full h-full bg-gradient-to-br from-muted via-background to-muted relative">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border border-border/20" />
                  ))}
                </div>

                {/* Map pins */}
                <motion.div
                  className="absolute top-[30%] left-[40%] w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <motion.div
                  className="absolute top-[50%] left-[60%] w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  <Stethoscope className="w-4 h-4 text-secondary-foreground" />
                </motion.div>
                <motion.div
                  className="absolute top-[70%] left-[30%] w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  <Scissors className="w-4 h-4 text-accent-foreground" />
                </motion.div>

                {/* "You are here" label */}
                <div className="absolute top-[25%] left-[42%] bg-primary text-primary-foreground text-xs px-2 py-1 rounded-lg shadow-lg">
                  You are here
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nearby Services List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Top Rated Near You
            </h3>

            {nearbyServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer group border border-transparent hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {service.image}
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{service.type}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs font-medium text-foreground">{service.rating}</span>
                      <span className="text-xs text-muted-foreground">({service.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {service.distance}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-nature-green">
                    <Clock className="w-3 h-3" />
                    {service.hours}
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}

            <Button variant="outline" className="w-full mt-4" asChild>
              <Link to="/services">
                <MapPin className="w-4 h-4 mr-2" />
                Explore All Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
