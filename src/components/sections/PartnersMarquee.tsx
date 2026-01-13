import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const partners = [
  { name: "PetSmart", logo: "🐾" },
  { name: "Chewy", logo: "🦴" },
  { name: "VetCo", logo: "💊" },
  { name: "PetPlan", logo: "📋" },
  { name: "ASPCA", logo: "🏥" },
  { name: "Petfinder", logo: "🔍" },
  { name: "Rover", logo: "🐕" },
  { name: "BarkBox", logo: "📦" },
];

const petEmojis = ["🐕", "🐈", "🐹", "🐰", "🦜", "🐢", "🐠", "🦎", "🐾", "❤️"];

export const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden relative">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground font-medium"
        >
          Trusted by leading pet brands and organizations worldwide
        </motion.p>
      </div>

      {/* Partners Marquee */}
      <Marquee speed={40} direction="left">
        {partners.map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 mx-2 cursor-pointer group"
          >
            <span className="text-3xl group-hover:scale-125 transition-transform">{partner.logo}</span>
            <span className="text-lg font-display font-semibold text-foreground/70 group-hover:text-foreground transition-colors">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </Marquee>

      {/* Pets Emoji Marquee */}
      <div className="mt-6">
        <Marquee speed={25} direction="right">
          {petEmojis.map((emoji, index) => (
            <motion.span
              key={index}
              className="text-4xl mx-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
              whileHover={{ scale: 1.3, rotate: 10 }}
            >
              {emoji}
            </motion.span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
