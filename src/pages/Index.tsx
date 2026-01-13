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

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <PartnersMarquee />
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
    </div>
  );
};

export default Index;
