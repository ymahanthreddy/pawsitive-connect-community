import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CommunityFeed } from "@/components/sections/CommunityFeed";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { PetOfWeek } from "@/components/sections/PetOfWeek";
import { Events } from "@/components/sections/Events";
import { Groups } from "@/components/sections/Groups";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CommunityFeed />
        <AIAssistant />
        <PetOfWeek />
        <Events />
        <Groups />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
