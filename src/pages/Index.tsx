import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { Features } from "@/components/sections/Features";
import { Statistics } from "@/components/sections/Statistics";
import { CommunityFeed } from "@/components/sections/CommunityFeed";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { PetOfWeek } from "@/components/sections/PetOfWeek";
import { Adoption } from "@/components/sections/Adoption";
import { Services } from "@/components/sections/Services";
import { Events } from "@/components/sections/Events";
import { Groups } from "@/components/sections/Groups";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";


const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <PartnersMarquee />

        {/* ⬅️ ADDED: FEATURES INTRO (ONLY ADDITION) */}
        <section className="container mx-auto px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Everything Pet Parents Need — In One Place
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            From AI-powered guidance to real community connections, Pawsitive
            Community is designed to support every stage of your pet parenting
            journey.
          </p>
        </section>
        {/* ⬅️ END ADDITION */}

        <Features />
        <Statistics />
        <CommunityFeed />
        <AIAssistant />
        <PetOfWeek />
        <Adoption />
        <Services />
        <Events />
        <Groups />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
