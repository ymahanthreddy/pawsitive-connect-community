import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Legal = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          {/* PAGE TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-display font-bold mb-4">
              Legal Information
            </h1>
            <p className="text-muted-foreground">
              Transparency and trust matter to us at Pawsitive Community.
            </p>
          </motion.div>

          {/* PRIVACY POLICY */}
          <section id="privacy" className="mb-20 scroll-mt-28">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. Pawsitive Community collects only
              the information necessary to provide a safe and personalized
              experience for pet parents.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We do not sell or share personal data with third parties.</li>
              <li>Uploaded images and posts remain user-owned.</li>
              <li>AI interactions are simulated in demo mode.</li>
              <li>Location data is used only for nearby service discovery.</li>
            </ul>
          </section>

          {/* TERMS OF SERVICE */}
          <section id="terms" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>

            <p className="text-muted-foreground mb-4">
              By using Pawsitive Community, you agree to the following terms:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>This platform is for educational and community purposes.</li>
              <li>AI advice does not replace professional veterinary care.</li>
              <li>Users are responsible for the content they share.</li>
              <li>Adoption listings and services are simulated in demo mode.</li>
              <li>Misuse of the platform may result in access restriction.</li>
            </ul>

            <p className="text-muted-foreground mt-4">
              These terms may be updated to improve safety and functionality.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Legal;
