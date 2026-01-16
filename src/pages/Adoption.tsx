import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, Filter, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* =========================================================
   ADOPTABLE PETS DATA
========================================================= */
const PETS = [
  { id: "buddy", name: "Buddy", breed: "Golden Retriever", age: "2 years", location: "Bangalore", icon: "🐕", type: "Dog" },
  { id: "luna", name: "Luna", breed: "Persian Cat", age: "1 year", location: "Mumbai", icon: "🐈", type: "Cat" },
  { id: "rocky", name: "Rocky", breed: "Labrador", age: "3 years", location: "Delhi", icon: "🐕", type: "Dog" },
  { id: "milo", name: "Milo", breed: "Indie Cat", age: "8 months", location: "Pune", icon: "🐈", type: "Cat" },
  { id: "simba", name: "Simba", breed: "German Shepherd", age: "4 years", location: "Hyderabad", icon: "🐕", type: "Dog" },
  { id: "coco", name: "Coco", breed: "Rabbit", age: "6 months", location: "Chennai", icon: "🐰", type: "Other" },
  { id: "bella", name: "Bella", breed: "Beagle", age: "1.5 years", location: "Kochi", icon: "🐕", type: "Dog" },
  { id: "oreo", name: "Oreo", breed: "Tuxedo Cat", age: "2 years", location: "Bangalore", icon: "🐈", type: "Cat" },
  { id: "max", name: "Max", breed: "Doberman", age: "3 years", location: "Noida", icon: "🐕", type: "Dog" },
  { id: "nala", name: "Nala", breed: "Siamese Cat", age: "1 year", location: "Chandigarh", icon: "🐈", type: "Cat" },
  { id: "snowy", name: "Snowy", breed: "White Rabbit", age: "7 months", location: "Jaipur", icon: "🐰", type: "Other" },
  { id: "bruno", name: "Bruno", breed: "Rottweiler", age: "5 years", location: "Indore", icon: "🐕", type: "Dog" },
];

const FILTERS = ["All", "Dog", "Cat", "Other"];

const Adoption = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPets =
    activeFilter === "All"
      ? PETS
      : PETS.filter((pet) => pet.type === activeFilter);

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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-paw-pink to-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Adoptable Pets
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet loving pets waiting for a forever home — and make a life-changing difference.
            </p>
          </motion.div>

          {/* WHY ADOPT */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg">
              Adoption is more than bringing home a pet — it’s giving a second chance.
              By adopting, you help reduce overcrowding and create space for other animals in need.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {FILTERS.map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant={activeFilter === filter ? "hero" : "outline"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "All" && "All Pets"}
                {filter === "Dog" && "🐕 Dogs"}
                {filter === "Cat" && "🐈 Cats"}
                {filter === "Other" && "🐰 Others"}
              </Button>
            ))}
          </div>

          {/* PET GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-6xl">{pet.icon}</span>
                </div>

                <div className="p-4">
                  <h3 className="font-display font-bold">{pet.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pet.breed} • {pet.age}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {pet.location}
                  </p>

                  <Button asChild variant="outline" size="sm" className="w-full mt-4">
                    <Link to={`/adoption/${pet.id}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full mt-2 text-primary"
                  >
                     <Link to="/adoption/details">
                     Learn More About Adoption Process
                     </Link>
                  </Button>

                </div>
              </motion.div>
            ))}
          </div>

          {filteredPets.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No pets found for this category.
            </p>
          )}

          {/* SAFETY NOTE */}
          <div className="max-w-3xl mx-auto mt-16 flex gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
            <p>
              Adoption details shown are for demonstration purposes.
              Final adoption requires identity verification and shelter approval.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Adoption;
