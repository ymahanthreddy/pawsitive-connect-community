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
import { PetQuiz } from "@/components/sections/PetQuiz";
import { LiveActivity } from "@/components/sections/LiveActivity";
import { Gamification } from "@/components/sections/Gamification";
import { EmergencyVet } from "@/components/sections/EmergencyVet";
import { PetHealthTracker } from "@/components/sections/PetHealthTracker";
import { Accessibility } from "@/components/sections/Accessibility";
import { AIPetNameGenerator } from "@/components/sections/AIPetNameGenerator";
import { SocialSharing } from "@/components/sections/SocialSharing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <PartnersMarquee />
        <LiveActivity />

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

        <Features />
        <PetQuiz />
        <Statistics />
        <CommunityFeed />
        <AIAssistant />
        <AIPetNameGenerator />
        <PetHealthTracker />
        <Gamification />
        <PetOfWeek />
        <Adoption />
        <EmergencyVet />
        <Services />
        <Events />
        <Groups />
        <SocialSharing />
        <Accessibility />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
