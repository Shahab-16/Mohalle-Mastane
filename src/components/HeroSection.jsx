import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import heroBg from '../assets/hero_section.png';
import LogoImg from '../assets/Logo.png';
import VolunteerModal from './VolunteerModal';

export default function HeroSection() {
  const [isVolModalOpen, setIsVolModalOpen] = useState(false);

  const scrollDown = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRescuerWall = () => {
    const el = document.getElementById('rescuer-wall');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-cream px-4 text-center py-24"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-[#23150D]/65 backdrop-blur-[1px] z-0" />

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto z-10 flex flex-col items-center space-y-6 mt-10"
      >
        {/* Central Arch Logo Emblem */}
        <div className="w-28 h-36 md:w-32 md:h-40 arch-frame border-2 border-[#EBD3BC]/40 p-1 flex items-center justify-center bg-primary-brown/30 backdrop-blur-sm shadow-xl">
          <div className="w-full h-full arch-frame bg-[#3C2415]/80 flex flex-col items-center justify-center p-3 text-center border border-[#EBD3BC]/20">
            <img 
              src={LogoImg} 
              alt="Mohalle Mastane Logo" 
              className="h-12 w-auto object-contain mb-1.5 filter brightness-110" 
            />
            <span className="font-serif font-bold text-[9px] sm:text-[10px] text-cream tracking-wide uppercase">
              MOHALLE MASTANE
            </span>
            <span className="text-[5px] font-sans font-medium text-accent-gold tracking-widest leading-none mt-0.5">
              COEXISTENCE • COMPASSION
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-serif font-medium tracking-tight text-cream leading-tight">
          Coexistence. <br />
          Compassion. Togetherness.
        </h1>

        {/* Hero Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-cream/90 font-sans font-light leading-relaxed">
          The spirit of the initiative is to inspire people to see how every lane and mohalla can become an example of coexistence — a space where humans and animals live and heal together.
        </p>

        {/* CTA Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <button
            onClick={() => setIsVolModalOpen(true)}
            className="w-full sm:w-auto px-8 py-3 bg-light-brown text-cream hover:bg-light-brown/95 hover:scale-105 active:scale-95 font-bold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            Join The Movement
          </button>
          <Link
            to="/donate"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-cream/80 hover:bg-cream hover:text-primary-brown hover:scale-105 active:scale-95 text-cream font-bold rounded-full shadow-md transition-all duration-300 text-center"
          >
            Donate
          </Link>
          <button
            onClick={scrollToRescuerWall}
            className="w-full sm:w-auto px-8 py-3 bg-cream/15 backdrop-blur-sm border border-cream/20 hover:bg-cream/25 hover:scale-105 active:scale-95 text-cream font-semibold rounded-full shadow-md transition-all duration-300 cursor-pointer text-sm"
          >
            Share Your Story
          </button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button 
        onClick={scrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-1.5 text-cream/60 hover:text-cream font-sans text-xs tracking-wider cursor-pointer"
      >
        <span>Scroll Down</span>
        <div className="w-6 h-9 rounded-full border-2 border-cream/40 flex items-center justify-center py-1">
          <FaChevronDown className="text-[9px]" />
        </div>
      </motion.button>

      {/* Volunteer Registration Modal */}
      <VolunteerModal isOpen={isVolModalOpen} onClose={() => setIsVolModalOpen(false)} />
    </div>
  );
}
