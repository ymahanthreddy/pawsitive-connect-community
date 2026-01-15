import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Join from "./pages/Join";
import Demo from "./pages/Demo";
import Posts from "./pages/Posts";
import SubmitPet from "./pages/SubmitPet";
import Adoption from "./pages/Adoption";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import GetStarted from "./pages/GetStarted";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import CommunityFeed from "@/pages/features/CommunityFeed";
import AIPetAssistant from "@/pages/features/AIPetAssistant";
import LocalDiscovery from "@/pages/features/LocalDiscovery";
import EventsFeature from "@/pages/features/Events";
import PetOfTheWeek from "@/pages/features/PetOfTheWeek";
import GroupsFeature from "./pages/features/Groups";
import PetProfiles from "@/pages/features/PetProfiles";
import Notifications from "@/pages/features/Notifications";
import CreatePost from "./pages/CreatePost";
import PetDetail from "./pages/PetDetail";
import Legal from "@/pages/Legal";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/join" element={<Join />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/submit-pet" element={<SubmitPet />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features/community-feed" element={<CommunityFeed />} />
<Route path="/features/ai-assistant" element={<AIPetAssistant />} />
<Route path="/features/local-discovery" element={<LocalDiscovery />} />
<Route path="/features/events" element={<EventsFeature />} />
<Route path="/features/pet-of-the-week" element={<PetOfTheWeek />} />
<Route path="/features/groups" element={<GroupsFeature />} />
<Route path="/features/pet-profiles" element={<PetProfiles />} />
<Route path="/features/notifications" element={<Notifications />} />
<Route path="/create-post" element={<CreatePost />} />
<Route path="/adoption/:petId" element={<PetDetail />} />
<Route path="/legal" element={<Legal />} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
