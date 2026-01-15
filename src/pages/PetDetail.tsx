import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

/* PET DATA */
const PETS = [
  {
    id: "buddy",
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Bangalore",
    icon: "🐕",
    description:
      "Buddy is a friendly and energetic Golden Retriever who loves walks and playing fetch.",
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Persian Cat",
    age: "1 year",
    location: "Mumbai",
    icon: "🐈",
    description:
      "Luna is calm, affectionate, and loves sunny windows and soft blankets.",
  },
  {
    id: "rocky",
    name: "Rocky",
    breed: "Labrador",
    age: "3 years",
    location: "Delhi",
    icon: "🐕",
    description:
      "Rocky is loyal, playful, and great with families and children.",
  },
  {
    id: "milo",
    name: "Milo",
    breed: "Indie Cat",
    age: "8 months",
    location: "Pune",
    icon: "🐈",
    description:
      "Milo is curious, playful, and loves exploring new spaces.",
  },
  {
    id: "simba",
    name: "Simba",
    breed: "German Shepherd",
    age: "4 years",
    location: "Hyderabad",
    icon: "🐕",
    description:
      "Simba is intelligent, protective, and very loyal.",
  },
  {
    id: "coco",
    name: "Coco",
    breed: "Rabbit",
    age: "6 months",
    location: "Chennai",
    icon: "🐰",
    description:
      "Coco is gentle, calm, and loves carrots and cuddles.",
  },
];

const PetDetail = () => {
  const { petId } = useParams();
  const pet = PETS.find((p) => p.id === petId);

  if (!pet) {
    return (
      <div className="pt-32 text-center">
        <p>Pet not found</p>
        <Link to="/adoption" className="text-primary">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 aurora-bg">
        <section className="container mx-auto px-4 md:px-6 max-w-xl">
          <Link
            to="/adoption"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Adoption
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card-premium rounded-3xl p-8 text-center"
          >
            <div className="text-7xl mb-4">{pet.icon}</div>

            <h1 className="text-3xl font-display font-bold mb-2">
              {pet.name}
            </h1>

            <p className="text-muted-foreground mb-2">
              {pet.breed} • {pet.age}
            </p>

            <p className="text-sm text-muted-foreground flex justify-center items-center gap-1 mb-4">
              <MapPin className="w-4 h-4" />
              {pet.location}
            </p>

            <p className="text-muted-foreground mb-6">
              {pet.description}
            </p>

            {/* ✅ REDIRECTS TO LOGIN */}
            <Button asChild variant="hero" className="w-full">
              <Link to="/auth">
                <Heart className="w-4 h-4 mr-2" />
                Apply for Adoption
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PetDetail;
