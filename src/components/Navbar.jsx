import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../assets/Logo.png';
import VolunteerModal from './VolunteerModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVolModalOpen, setIsVolModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Animals', href: '/#animals' },
    { name: 'Events', href: '/#events' },
    { name: 'Volunteers', href: '/#volunteer' }
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    
    if (href === '/') {
      e.preventDefault();
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollToId: id } });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-brown/95 backdrop-blur-md shadow-lg border-b border-light-brown/20 py-2.5' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <img 
                src={LogoImg} 
                alt="Mohalle Mastane Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-cream leading-tight">
                  MOHALLE MASTANE
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-widest text-[#EBD3BC]">
                  COEXISTENCE • COMPASSION • TOGETHERNESS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans font-medium text-cream/90 hover:text-accent-gold transition-colors duration-200 relative group py-2 text-sm uppercase tracking-wider"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <Link
                to="/donate"
                className="px-6 py-2 rounded-full text-sm font-semibold text-cream bg-light-brown hover:bg-light-brown/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer"
              >
                Donate
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cream hover:text-accent-gold p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenuAlt3 className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[60px] left-0 right-0 z-40 bg-primary-brown/98 border-b border-light-brown/20 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block font-sans font-medium text-base text-cream/90 hover:text-accent-gold hover:bg-light-brown/10 px-3 py-3 rounded-xl transition-all duration-200 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-3">
                <Link
                  to="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-md text-sm font-bold text-cream bg-light-brown hover:bg-light-brown/90 active:scale-98 transition-all duration-200"
                >
                  Donate
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsVolModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-md text-sm font-bold text-[#3C2415] bg-cream hover:bg-[#EBD3BC] active:scale-98 transition-all duration-200"
                >
                  Join The Movement
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <VolunteerModal isOpen={isVolModalOpen} onClose={() => setIsVolModalOpen(false)} />
    </>
  );
}
