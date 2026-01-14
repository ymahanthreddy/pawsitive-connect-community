import { motion } from "framer-motion";
import { Calendar, ArrowLeft, MapPin, Clock, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Pet Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover playdates, adoption fairs, training workshops, and more happening near you
            </p>
          </motion.div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All Events</Button>
              <Button variant="ghost" size="sm">Meetups</Button>
              <Button variant="ghost" size="sm">Workshops</Button>
              <Button variant="ghost" size="sm">Adoption</Button>
            </div>
            <Button variant="hero" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                <div className="p-6">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {i % 2 === 0 ? "Workshop" : "Meetup"}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-3 mb-2">
                    Event Title #{i}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Event description goes here...
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Jan {10 + i}, 2026</span>
                      <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                      <span className="text-muted-foreground">10:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Location</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{20 + i * 5} attending</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    RSVP Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
