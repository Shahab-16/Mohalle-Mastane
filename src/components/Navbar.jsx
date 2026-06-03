import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    { name: 'Volunteer', href: '/#volunteer' },
    { name: 'Products', href: '/#products' }
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

  // Listen for navigation state redirects to scroll to elements
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToId) {
      const id = location.state.scrollToId;
      // Clear navigation state
      navigate('/', { replace: true, state: {} });
      // Wait for DOM to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, navigate]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-cream/90 backdrop-blur-md shadow-md border-b border-beige/40 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-primary-brown flex items-center justify-center text-accent-gold shadow-md group-hover:scale-105 transition-transform duration-300">
                <FaPaw className="text-xl" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary-brown group-hover:text-light-brown transition-colors duration-300">
                Mohalle <span className="text-accent-gold">Mastane</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans font-medium text-primary-brown hover:text-accent-gold transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Donate CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-semibold text-cream bg-primary-brown hover:bg-light-brown hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-brown"
              >
                Donate Now
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary-brown hover:text-accent-gold p-2 focus:outline-none"
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
            className="md:hidden fixed top-[64px] left-0 right-0 z-40 bg-cream/98 backdrop-blur-lg border-b border-beige/40 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block font-sans font-semibold text-lg text-primary-brown hover:text-accent-gold hover:bg-beige/20 px-3 py-3 rounded-xl transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-md text-base font-bold text-cream bg-primary-brown hover:bg-light-brown active:scale-[0.98] transition-all duration-200"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
