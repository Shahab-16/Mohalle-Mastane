import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AnimalGallery from '../components/AnimalGallery';
import EventsSection from '../components/EventsSection';
import VolunteerSection from '../components/VolunteerSection';
import ProductsSection from '../components/ProductsSection';
import ImpactSection from '../components/ImpactSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <AboutSection />
        
        <AnimalGallery />
        
        <ImpactSection />
        
        <EventsSection />
        
        <VolunteerSection />
        
        <ProductsSection />
        
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
