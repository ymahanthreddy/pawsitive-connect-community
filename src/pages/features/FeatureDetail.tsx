import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type FeatureDetailProps = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

const FeatureDetail = ({
  title,
  subtitle,
  description,
  bullets,
}: FeatureDetailProps) => {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 aurora-bg">
        <section className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card-premium rounded-3xl p-10 shadow-float"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
              {title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {subtitle}
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3">
              {bullets.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FeatureDetail;
