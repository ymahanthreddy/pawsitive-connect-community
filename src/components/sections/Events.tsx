import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Dog Park Meetup",
    description: "Weekly gathering for dogs of all sizes. Bring treats and toys!",
    date: "Sat, Jan 18",
    time: "10:00 AM",
    location: "Central Dog Park",
    attendees: 45,
    type: "Meetup",
    color: "from-primary to-sunset-orange",
  },
  {
    id: 2,
    title: "Cat Adoption Fair",
    description: "Find your perfect feline companion. 20+ cats looking for homes.",
    date: "Sun, Jan 19",
    time: "11:00 AM",
    location: "Community Center",
    attendees: 128,
    type: "Adoption",
    color: "from-secondary to-nature-green",
  },
  {
    id: 3,
    title: "Pet First Aid Workshop",
    description: "Learn essential first aid skills to keep your pets safe.",
    date: "Wed, Jan 22",
    time: "6:00 PM",
    location: "Pet Care Clinic",
    attendees: 32,
    type: "Workshop",
    color: "from-pet-purple to-paw-pink",
  },
  {
    id: 4,
    title: "Puppy Training Class",
    description: "Basic obedience training for puppies under 1 year.",
    date: "Fri, Jan 24",
    time: "4:00 PM",
    location: "Bark Academy",
    attendees: 15,
    type: "Training",
    color: "from-accent to-primary",
  },
];

export const Events = () => {
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Calendar className="w-4 h-4" />
            Upcoming Events
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Local Pet <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover playdates, adoption fairs, training workshops, and more happening near you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Colored Header */}
              <div className={`h-2 bg-gradient-to-r ${event.color}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{event.date}</span>
                    <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                    <span className="text-muted-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      {event.attendees} attending
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to="/events">RSVP Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/events">
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
