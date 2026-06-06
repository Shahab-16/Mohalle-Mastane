import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyWorkforce from '../components/WhyWorkforce';
import Our4Cs from '../components/Our4Cs';
import FundraisingSection from '../components/FundraisingSection';
import AnimalGallery from '../components/AnimalGallery';
import SterilisationSection from '../components/SterilisationSection';
import EventsSection from '../components/EventsSection';
import RescueStories from '../components/RescueStories';
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

        {/* Fundraising: General Fund + Oneness Oasis */}
        <FundraisingSection />
        
        {/* Who We Nourish & Protect */}
        <AnimalGallery />

        {/* Sterilisation: TNR Program */}
        <SterilisationSection />
        
        <EventsSection />
        
        <RescueStories />
        
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
