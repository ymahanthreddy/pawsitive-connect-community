import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  PawPrint,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* ================= EVENTS DATA ================= */
const EVENTS = [
  {
    title: "Weekend Dog Playdate",
    type: "Meetup",
    date: "Jan 20, 2026",
    time: "10:00 AM",
    location: "Cubbon Park, Bangalore",
    attendees: 45,
    gradient: "from-primary to-accent",
    popular: true,
  },
  {
    title: "Pet Adoption Drive",
    type: "Adoption",
    date: "Jan 25, 2026",
    time: "11:00 AM",
    location: "Phoenix Mall",
    attendees: 120,
    gradient: "from-nature-green to-secondary",
    popular: true,
  },
  {
    title: "Puppy Training Workshop",
    type: "Workshop",
    date: "Feb 2, 2026",
    time: "9:30 AM",
    location: "PetCare Centre",
    attendees: 30,
    gradient: "from-accent to-primary",
  },
  {
    title: "Cat Lovers Meetup",
    type: "Meetup",
    date: "Feb 5, 2026",
    time: "4:00 PM",
    location: "Indiranagar",
    attendees: 38,
    gradient: "from-secondary to-primary",
  },
  {
    title: "Senior Pet Health Camp",
    type: "Workshop",
    date: "Feb 10, 2026",
    time: "10:00 AM",
    location: "City Vet Hospital",
    attendees: 52,
    gradient: "from-primary to-nature-green",
  },
  {
    title: "Stray Feeding Drive",
    type: "Community",
    date: "Feb 15, 2026",
    time: "7:00 AM",
    location: "Multiple Locations",
    attendees: 80,
    gradient: "from-accent to-secondary",
    popular: true,
  },
  {
    title: "Pet First Aid Workshop",
    type: "Workshop",
    date: "Feb 18, 2026",
    time: "2:00 PM",
    location: "Whitefield",
    attendees: 40,
    gradient: "from-primary to-accent",
  },
  {
    title: "Community Dog Walk",
    type: "Community",
    date: "Feb 20, 2026",
    time: "6:30 AM",
    location: "Lalbagh",
    attendees: 65,
    gradient: "from-nature-green to-primary",
  },
  {
    title: "Kitten Adoption Day",
    type: "Adoption",
    date: "Feb 22, 2026",
    time: "11:00 AM",
    location: "Pet Shelter Hub",
    attendees: 95,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Dog Obedience Training",
    type: "Workshop",
    date: "Feb 25, 2026",
    time: "8:00 AM",
    location: "Yelahanka",
    attendees: 28,
    gradient: "from-accent to-primary",
  },
  {
    title: "Exotic Pets Meetup",
    type: "Meetup",
    date: "Feb 27, 2026",
    time: "5:00 PM",
    location: "HSR Layout",
    attendees: 22,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Community Pet Cleanup Drive",
    type: "Community",
    date: "Mar 1, 2026",
    time: "7:30 AM",
    location: "JP Nagar",
    attendees: 70,
    gradient: "from-secondary to-nature-green",
  },
];

const FILTERS = ["All", "Meetup", "Workshop", "Adoption", "Community"];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? EVENTS
      : EVENTS.filter((event) => event.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Community Events
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect offline through meetups, workshops, adoption drives,
              and community initiatives for pet lovers.
            </p>
          </motion.div>

          {/* WHY EVENTS MATTER */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg">
              Events help pet parents build real-world connections, learn from
              experts, and create safer, more supportive environments for pets
              and their communities.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FILTERS.map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant={activeFilter === filter ? "hero" : "outline"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* EVENTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="glass-card rounded-2xl overflow-hidden card-hover"
              >
                <div
                  className={`h-20 bg-gradient-to-r ${event.gradient} flex items-center justify-center`}
                >
                  <PawPrint className="w-8 h-8 text-primary-foreground opacity-90" />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {event.type}
                    </span>

                    {event.popular && (
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-bold mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  {/* ✅ ONLY CHANGE HERE */}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/auth">RSVP Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No events found — try a different category 🐾
            </p>
          )}

          {/* SAFETY NOTE */}
          <div className="max-w-3xl mx-auto mt-16 flex gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
            <p>
              Event details are shown for demonstration purposes.
              RSVPs are simulated and may require verification in real deployments.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
