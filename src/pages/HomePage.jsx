import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyWorkforce from '../components/WhyWorkforce';
import Our4Cs from '../components/Our4Cs';
import SterilisationSection from '../components/SterilisationSection';
import EventsSection from '../components/EventsSection';
import OurCommunities from '../components/OurCommunities';
import VolunteerSection from '../components/VolunteerSection';
import CollaborationSection from '../components/CollaborationSection';
import SupportEcosystem from '../components/SupportEcosystem';
import RescuerWall from '../components/RescuerWall';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <AboutSection />
        
        <WhyWorkforce />
        
        <Our4Cs />
        
        <EventsSection />

        {/* Sterilisation: TNR Program */}
        <SterilisationSection />
        
        <OurCommunities />
        
        <VolunteerSection />

        {/* Collaboration */}
        <CollaborationSection />
        
        <SupportEcosystem />
        
        <RescuerWall />
      </main>

      <Footer />
    </div>
  );
}
